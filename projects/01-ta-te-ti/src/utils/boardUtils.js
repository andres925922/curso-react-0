import { TURNS, WINNER_COMBOS } from '../constants.js' // Import constants

/**
 * @param {array} newBoard 
 * @returns {?boolean}
 */
const evalWinner = (newBoard) => {
    // if the board with current turn has a winner
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo // Destructure the winning combination indices
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
            return newBoard[a] // Return the winner ('X' or 'O')
        }
    }
    return null // No winner found
}

/**
 * Check if the game has ended in a draw
 * @param {array} newBoard 
 * @returns {boolean}
 */
const checkEndGame = (newBoard) => {
    return newBoard.every(square => square !== null) // Check if all squares are filled
}

/**
 * Save the current board state to localStorage
 * @param {array} board
 */
const saveBoardToLocalStorage = (board) => {
    window.localStorage.setItem('board', JSON.stringify(board)) // Save the board as a JSON string
}

/**
 * Save the current turn to localStorage
 * @param {string} turn
 */
const saveTurnToLocalStorage = (turn) => {
    window.localStorage.setItem('turn', turn) // Save the turn as a string
}

const loadInitialBoard = () => {
    const savedBoard = window.localStorage.getItem('board')
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null) // Load the board from localStorage or return an empty board
}

const getCurrentTurn = () => {
    const savedTurn = window.localStorage.getItem('turn')
    if (!savedTurn) return TURNS.X // If no turn is saved, default to 'X'

    return  savedTurn === TURNS.X ? TURNS.O : TURNS.X // Load the turn from localStorage or default to 'X'
}


export { 
    evalWinner, 
    checkEndGame, 
    loadInitialBoard, 
    saveTurnToLocalStorage, 
    saveBoardToLocalStorage,
    getCurrentTurn
} // Export the utility functions