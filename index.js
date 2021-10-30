let firstcard = getRandomCard()
let secondcard = getRandomCard()
let sum = firstcard + secondcard
let cards = [firstcard, secondcard]
let hasBlackjack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards-el")




function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1
}


let message = ""
function renderGame() {
    sumEl.textContent = "sum: " + sum
    cardsEl.textContent = "cards: "
    for (
        let i = 0; i < cards.length; i++
    ) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "want a new card kid?"

    }
    else if (sum === 21) {
        message = "you got lucky "
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
    let card = getRandomCard()
        sum = sum + card
    if (sum <= 20) {
        message = "want a new card kid?"

    }
    else if (sum === 21) {
        message = "you got lucky "
        hasBlackjack = true
    }
    else {
        message = "ha! get outta here kid"
        isAlive = false
    }
    sumEl.textContent = "sum: " + sum
    cardsEl.textContent += " " + card
    messageEl.textContent = message
}

function startGame() {
    renderGame()
}





//     console.log(sum)

//     cardsEl.textContent = "cards: " + firstcard + " " + secondcard + " " + card