const userCount_span = document.getElementById('userCount')
const compCount_span = document.getElementById('compCount')

let userCounter = 0
let compCounter = 0

const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

let gameResult_p = document.getElementById('gameResult')

function main(){
    rock_div.addEventListener('click',function(){
        game('r')
    })
    paper_div.addEventListener('click',function(){
        game('p')
    })
    scissors_div.addEventListener('click',function(){
        game('s')
    })
}
main()

function compChoice(){
    let compArr = ['r','p','s']
    let compArrChoice = Math.floor(Math.random() * compArr.length)
    return compArr[compArrChoice]
}


function game(userChoice){
    let compResult = compChoice()
    let gameResult = userChoice + compResult
    switch (gameResult){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, compResult)
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, compResult)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, compResult)
            break;

    }
}

function win(user,computer){
    const smallUwuWord = 'Player\'s'.fontsize(3).sup();
    const smallCompWord = 'Comp\'s'.fontsize(3).sup();
    const chooseColor = document.getElementById(user)
    chooseColor.classList.add('green')
    setTimeout(function(){chooseColor.classList.remove('green')}, 500)
    userCounter ++
    userCount_span.innerHTML = userCounter
    gameResult_p.innerHTML = `${smallUwuWord}${wordConverter(user)} covers ${smallCompWord}${wordConverter(computer)}. you win!`
   
}
function lose(user, computer){
    const smallUwuWord = 'Player\'s'.fontsize(3).sup();
    const smallCompWord = 'Comp\'s'.fontsize(3).sup();
    const chooseColor = document.getElementById(user)
    chooseColor.classList.add('red')
    setTimeout(function(){chooseColor.classList.remove('red')}, 500)
    compCounter ++
    compCount_span.innerHTML = compCounter
    gameResult_p.innerHTML = ` ${smallCompWord}${wordConverter(computer)} covers ${smallUwuWord}${wordConverter(user)}. you lose! `
}
function draw(user, computer){
    const chooseColor = document.getElementById(user)
    gameResult_p.innerHTML = `DRAW`  
    chooseColor.classList.add('grey')
    setTimeout(function(){chooseColor.classList.remove('grey')}, 500)
}

function wordConverter(letter){
    if(letter ==='r') return 'Rock'
    else if(letter ==='p') return 'Paper'
    else return 'Scissors'
}