const findRange = (x, y, ranges) => {
    let chosenBox
    
    ranges.forEach( box => {
        if(x >= box[0][0] && x <= box[1][0] && y >= box[0][1] && y <= box[1][1]){
            chosenBox = box
        }
    })



    for(let i = chosenBox[0][0]; i <= chosenBox[1][0]; i++){
        for(let j = chosenBox[0][1]; j <= chosenBox[1][1]; j++){
        }
    }
    
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

const generateRandom = (max) => {
    return Math.floor(Math.random() * (max - 1) + 1)
}

const fillRecursively = (x, y, table, ranges) => {
    //console.log("Fill recursively")
    if(y >= 9){
        x++;
        y = 0
    }

    if(x >= 9){
        //console.log("END")
        return true;
    }

    //console.log(`${x} - ${y}`)
    let possible = [1,2,3,4,5,6,7,8,9]

    while(possible.length > 0) {
        let num = possible[generateRandom(possible.length - 1)]

        if(isRowFree(num, x, table) && isColumnFree(num, y, table) && isBoxFree(num, x, y, table, ranges)){ 
            table[x][y] = num
            
            if(fillRecursively(x, y+1, table, ranges)){
                return true
            }
            else{
                possible.splice(possible.indexOf(num), 1)
            }
        }
        else{
            possible.splice(possible.indexOf(num), 1)
        }

        if(possible.length === 0){
            table[x][y] = 0
            return false
        }
    }

}

const FillTable = () => {
    const ranges = [
        [[0,0],[2,2]], [[0,3],[2,5]], [[0,6],[2,8]],
        [[3,0],[5,2]], [[3,3],[5,5]], [[3,6],[5,8]],
        [[6,0],[8,2]], [[6,3],[8,5]], [[6,6],[8,8]]
    ]
    
    let table = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    fillRecursively(0, 0, table, ranges)

    return table
}

export default FillTable