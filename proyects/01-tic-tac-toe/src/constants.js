export const TURNS = {
    X: '❌',
  O: '⚪'
}

export const WINNER = [
    //horizontal winner
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [6, 4, 2],
    [0, 4, 8]
]