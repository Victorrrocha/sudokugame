import React from "react";

const SelectedContext = React.createContext({
    grid: [],
    initial_grid: [],
    grid_complete: [],
    selected_cell: {col: -1, row: -1},
    selected_number: -1,
    select_position: (position) => {},
    select_number: (number) => {},
    remove: (position) => {}
})

export default SelectedContext