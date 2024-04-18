import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";
import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic/board";
import { resetGameStorage, saveGameToStorage } from "./logic/storage";


//Componente padre
function App() {
  //los estados son asyncrono
  const [board, setBoard] = useState(() => { //Se usa una funcion porque la inicializacion ocurre solo una ves
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null)
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage
      ? JSON.parse(turnFromStorage)
      : TURNS.X
  });
  const [winner, setWinner] = useState(null);


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage();
  }
  //Declaramos la funcion en el elemento padre
  const updateBoard = (index) => {
    //Validar donde hizo click no haya algo
    if (board[index] !== null || winner) return
    //Llenar el board con el turno actual
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //Saber cuando alguien gana
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard))
      setWinner(false)
    //Cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //guardar partida 
    saveGameToStorage({
      board: newBoard,
      turn:newTurn
    })
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
