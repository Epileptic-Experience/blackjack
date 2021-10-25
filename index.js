let firstcard = 11

let seconcard = 10

let sum = firstcard + seconcard

let hasBlackjack = false

let isAlive = true

let messageEl = document.getElementById("message-el")




console.log(sum)

let message = ""

function startGame() {


    if (sum <= 20) {
        message = "want a new card kid?"

    }
    else if (sum === 21) {
        message = "you got lucky kid"
        hasBlackjack = true
    }
    else {
        message = "you're out kid"
        isAlive = false
    }

    messageEl.textContent = message

}
