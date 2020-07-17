// query selectors
const columnContainer = document.querySelector('.columnContainer')
const columns = document.querySelectorAll('.column')


let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]


//track turn
let currentPlayer = 1

//for loop to add clicker event to each column and add  red or black chip
let eventColumn
for (let index = 0; index < columns.length; index++) {
    const currentColumn = columns[index];
    currentColumn.addEventListener('click', function () {
        let chip = document.createElement('div')
        eventColumn = event.currentTarget
        if (eventColumn.children.length === 6) {
            alert('nope')
        } else if (currentPlayer === 1) {
            chip.setAttribute('class', 'redChip')
            currentPlayer = 2
            currentColumn.append(chip)
        } else if (currentPlayer === 2) {
            chip.setAttribute('class', 'blackChip')
            currentPlayer = 1
            currentColumn.append(chip)
        }

    })
}