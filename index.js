let firstcard = 10

let secondcard = 4

let sum = firstcard + secondcard

let cards = [firstcard, secondcard]

let hasBlackjack = false

let isAlive = true

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum")

let cardsEl = document.getElementById("cards-el")





let message = ""

function renderGame() {

    sumEl.textContent = "sum: " + sum

    cardsEl.textContent += firstcard + " " + secondcard

    if (sum <= 20) {
        message = "want a new card kid?"

    }
    else if (sum === 21) {
        message = "you got lucky kid"
        hasBlackjack = true
    }
    else {
        message = "ha! get outta here kid"
        isAlive = false
    }

    messageEl.textContent = message

}

console.log(sum)

function newCard() {
    let card = 8

    sum += card

    renderGame()

//     console.log(sum)

//     cardsEl.textContent = "cards: " + firstcard + " " + secondcard + " " + card
// }


function startGame() {
    renderGame()
}