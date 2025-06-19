import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'
import { TURNS } from './constants.js'
import { 
  evalWinner, 
  checkEndGame,
  loadInitialBoard,
  saveTurnToLocalStorage,
  saveBoardToLocalStorage,
  getCurrentTurn
} from './utils/boardUtils.js'


function App() {
  const [board, setBoard] = useState(
    () => loadInitialBoard() // Load the initial board state from localStorage or create a new one
  )
  const [winner, setWinner] = useState(null)
  const [turn, setTurn] = useState(
    () => getCurrentTurn()  // Load the current turn from localStorage or default to 'X'
  ) // 'X' or 'O'

  const resetGame = () => {
    window.localStorage.clear()          // Clear localStorage to reset the game
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)                     // Reset the turn to 'X'
  }

  const changeTurn = () => {
    setTurn((prevTurn) => (prevTurn === TURNS.X ? TURNS.O : TURNS.X))
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return  // If the square is already filled or there's a winner, do nothing
    const newBoard = [...board]
    newBoard[index] = turn              // Place the current player's turn in the square
    setBoard(newBoard)

    changeTurn()                        // Change the turn to the next player

    const newWinner = evalWinner(newBoard) // Check if there's a winner
    if (newWinner) {
      setWinner(newWinner)              // If there's a winner, set it
    } else if (checkEndGame(newBoard)) {
      setWinner(false)                  // If the game ends in a draw, set winner to false
    }

    saveBoardToLocalStorage(newBoard)   // Save the current board state to localStorage
    saveTurnToLocalStorage(turn)         // Save the current turn to localStorage
  }

  return (
    <main className='board'>
      <h1 translate="no">El juego del ta te ti</h1>
      <button onClick={resetGame}> Restart game </button>

      <section className='game'>
        {
          board.map((sq, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoardCallback={updateBoard}
              >
                {sq}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
