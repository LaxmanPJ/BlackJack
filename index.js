// let firstCard = randomCard()
// let secondCard = randomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
        name:"Stanford Wong",
        chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function randomCard(){
    let randomNum = Math.floor(Math.random()* 13) + 1
    if(randomNum === 1){
        return 11
    }
    else if(randomNum >=11 && randomNum<=13){
        return 10
    }
    else{
        return randomNum
    }
}

function startGame(){
    playerEl.textContent = player.name + ": $" + player.chips
    isAlive = true
    hasBlackJack = false
    let firstCard = randomCard()
    cards.push(firstCard)
    let secondCard = randomCard()
    cards.push(secondCard)
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
        // sum += cards[i]

    }
    sumEl.textContent = "Score: " + sum
    if(sum <= 20){
        messageEl.textContent = "Do you want to draw a new card?"

    }
    else if(sum === 21){
        messageEl.textContent = "You have got Blackjack!"
        hasBlackJack = true
        playerEl.textContent = player.name + ": $" + 290
        cards = []
        
    }
    else{
        messageEl.textContent = "You are out of the game!"
        isAlive = false
        cards = []
        sum = 0
    }

}

function newcard(){
    if(isAlive === true && hasBlackJack === false){
    let newcard = randomCard()
    sum += newcard
    cards.push(newcard)
    console.log(cards)
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2];
    // sumEl.textContent = "Sum: " + sum
    renderGame()
    }
    
}

