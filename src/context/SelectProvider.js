import React, {useReducer} from "react";
import SelectedContext from "./select-context";
import compareObjs from "../helpers/ObjectEquality";
import SelectDificulty, { copyArray } from "../helpers/difficultySettings";
import FillTable from "../components/Sudoku/sudokuGenerator";


const grid_complete = FillTable()
const grid = SelectDificulty(grid_complete, 1)
const initial_grid = copyArray(grid) //imutavel durante a execução

const selectDefault = {
    initial_grid: initial_grid,
    grid: grid,
    grid_complete: grid_complete,
    selectedNumber: -1,
    selectedPosition: {row: -1, col: -1}
}

const selectedReducer = (state, action) => {
    if(action.type === "SELECT"){
        if(compareObjs(state.selectedPosition, action.value)){
            console.log("Dessecting")
            return {
                grid: state.grid,
                initial_grid: initial_grid,
                selectedNumber: state.selectedNumber,
                selectedPosition: {row: -1, col: -1}
            }
        }
        console.log("Selecting")
        return {
            grid: state.grid,
            initial_grid: initial_grid,
            selected_number: state.selectedNumber,
            selectedPosition: action.value
        }
    }

    if(action.type === "SELECT_NUMBER"){
        if(action.value >= 0 && action.value <= 9){
            //checa se já tem uma cell selecionada
            if(state.selectedPosition.row > -1 && state.selectedPosition.col > -1){
                let newGrid = state.grid
                
                newGrid[state.selectedPosition.row][state.selectedPosition.col] = action.value
                return {
                    grid: newGrid,
                    initial_grid: initial_grid,
                    selectedNumber: +action.value,
                    selectedPosition: state.selectedPosition
                }
            }

            return {
                grid: state.grid,
                initial_grid: state.initial_grid,
                selectedNumber: +action.value,
                selectedPosition: state.selectedPosition
            }
        }
    }

    if(action.type === "REMOVE"){
        let newGrid = state.grid
        newGrid[action.value.row][action.value.col] = 0
        return {
            grid: newGrid,
            selectedNumber: state.selectedNumber,
            selectedPosition: state.selectedPosition
        }
    }

    return selectDefault
}

const SelectProvider = props => {

    const [SelectState, SelectDispatch] = useReducer(selectedReducer, selectDefault)

    const selectPosition = position => {
        SelectDispatch({type: "SELECT", value: position})
    }

    const selectNumber = number => {
        SelectDispatch({type: "SELECT_NUMBER", value: number})
    }

    const removePosition = position => {
        SelectDispatch({type: "REMOVE", value: position})
    }

    const selectValue = {
        grid: grid,
        initial_grid: initial_grid,
        grid_complete: grid_complete,
        selected_cell: SelectState.selectedPosition,
        selected_number: SelectState.selectedNumber,
        select_position: selectPosition,
        select_number: selectNumber,
        remove: removePosition
    }

    return (
        <SelectedContext.Provider value={selectValue}>
            {props.children}
        </SelectedContext.Provider>
    )
}

export default SelectProvider