let click = document.querySelector('.click-cost')
let parsedClick = parseFloat(click.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)

function incrementClick() {
    parsedClick += 1
    click.innerHTML = parsedClick
}

function buyClicker() {
    if (parsedClick >= parsedClickerCost) {
        parsedClick -= parsedClickerCost
        click.innerHTML = parsedClick
    }
}

function saveMain() {
    localStorage.setItem('counter', parseInt(counter));
}

setInterval(saveMain, 1000);