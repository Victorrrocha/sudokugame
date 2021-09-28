const findRange = (x, y, ranges) => {
    let chosenBox
    
    ranges.forEach( box => {
        if(x >= box[0][0] && x <= box[1][0] && y >= box[0][1] && y <= box[1][1]){
            chosenBox = box
        }
    })
    
    return chosenBox
}

const isBoxFree = (num, x, y, table, ranges) => {
    let box = findRange(x, y, ranges)

    let isBoxOk = true

    for(let i = box[0][0]; i <= box[1][0]; i++){
        for(let j = box[0][1]; j <= box[1][1]; j++){
            if(table[i][j] === num){

                //console.log("box not free")
                isBoxOk = false;
            
            }
        }
    }

    return isBoxOk;
}

const isRowFree = (num, row, table) => {
    let isOk = true

    table[row].forEach(value => {
        
        if(value === num){
            //console.log("Row not free")
            isOk = false
        }
    })

    return isOk
}

const isColumnFree = (num, col, table) => {
    let isColOk = true;

    table.forEach(line => {
        if(line[col] === num) {
            //console.log("col not free")
            isColOk = false;
        }
    })

    return isColOk;
}

const CheckBoundaries = (table, position, row, col) => {

    const ranges = [
        [[0,0],[2,2]], [[0,3],[2,5]], [[0,6],[2,8]],
        [[3,0],[5,2]], [[3,3],[5,5]], [[3,6],[5,8]],
        [[6,0],[8,2]], [[6,3],[8,5]], [[6,6],[8,8]]
    ]

    const box = findRange(position.row, position.col, ranges)
    
    if(row >= box[0][0] && row <= box[1][0] && col >= box[0][1] && col <= box[1][1] ){
        return true
    }
    else {
        return false
    }
}

export default CheckBoundaries