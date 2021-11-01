let firstcard = getRandomCard()
let secondcard = getRandomCard()
let sum = firstcard + secondcard
let cards = [firstcard, secondcard]
let hasBlackjack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum")
let cardsEl = document.getElementById("cards-el")




function getRandomCard() {
    let cardnumber = Math.floor(Math.random() * 13) + 1
    if (cardnumber > 10) {
        return 10
    } else if (cardnumber === 1) {
        return 11
    } else { return cardnumber }
}

let message = ""

function renderGame() {
    isAlive = true
    sumEl.textContent = "sum: " + sum
    cardsEl.textContent = "cards: "
    //for loop hace una cuenta en el array de cartas y el textcontent usa esa cuenta como index 
    //primero son las dos cartas pero cada vez que se activa newCard() se pushea un elemento random al array
    //que el textcontent suma
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


function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }

}



// function startGame() {
//     renderGame()
// }





//     console.log(sum)

//     cardsEl.textContent = "cards: " + firstcard + " " + secondcard + " " + card