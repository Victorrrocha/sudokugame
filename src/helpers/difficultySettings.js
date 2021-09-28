export const copyArray = (grid) => {
    const newGrid = []

    for(let i = 0; i < 9; i++){
        const row = []
        for(let j = 0; j < 9; j++){
            row.push(grid[i][j])
            console.log(row)
        }
        newGrid.push(row)
    }

    return newGrid
}

const SelectDificulty = (grid, level) => {
    
    const newGrid = copyArray(grid)

    let counter = level * 30
    while(counter > 0){
        let x = Math.floor(Math.random() * 9 )
        let y = Math.floor(Math.random() * 9 )

        if(newGrid[x][y] !== 0){
            newGrid[x][y] = 0
            counter--
        }
    }

    return newGrid
}

export default SelectDificulty