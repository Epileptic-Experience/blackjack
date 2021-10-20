let firstcard = 11

let seconcard = 11

let sum = firstcard + seconcard

let hasBlackjack = false

let isAlive = true

let message = ""


console.log(sum)

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

console.log (message)
