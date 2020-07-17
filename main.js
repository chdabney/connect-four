const columnContainer = document.querySelector('.columnContainer')
const columns = document.querySelectorAll('.column')


let currentPlayer = 0

for (let index = 0; index < columns.length; index++) {
    const currentColumn = columns[index];
    currentColumn.addEventListener('click', function () {
        let chip = document.createElement('div')
        if (currentPlayer === 0) {
            chip.setAttribute('class', 'redChip')
            currentPlayer = 1
        } else if (currentPlayer === 1) {
            chip.setAttribute('class', 'blackChip')
            currentPlayer = 0

        }
        currentColumn.append(chip)
    })
}