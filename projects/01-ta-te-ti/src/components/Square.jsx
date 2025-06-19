export const Square = ({ children, index, isSelected, updateBoardCallback }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => { updateBoardCallback(index) }

  return (
    <button
      className={className}
      onClick={handleClick}
      translate="no"
    >
      {children}
    </button>
  )
}