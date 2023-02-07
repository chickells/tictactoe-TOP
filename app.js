// fuck all this noise, restarting with WebDevSimplified youtube video
// https://www.youtube.com/watch?v=Y-GkMjUZsmM

const gameBoard = (() => {
    const cellElements = document.querySelectorAll('[data-cell]')
    
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true})
    })

    function handleClick(e) {
        // place mark
        // check for win
        // check for draw
        // switch turns
    }
})()


