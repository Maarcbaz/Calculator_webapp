let display = document.getElementById('inputField')
console.log(display);
function insert(num) {
    display.value += num;
    if (mode == "equal") {
        display.value += num
        display = 'pokwo'
        mode = 'calc'
    }
    else {

    }
};
function equal() {
    try {
        display.value = eval(display.value)
    } catch (err) {
        display.value = 'Syntax error'
    }
}
function clr() {
    display.value = ''
}
function del() {
    display.value = display.value.slice(0, -1)
}
let icon = document.querySelector('.icon')
let menu = document.querySelector('.menu')
icon.onclick = function () {
    menu.classList.toggle('active')
}

function getTime() {
    let date = new Date()
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()

    document.getElementById('time').innerHTML = `${hours} : ${minutes} : ${seconds}`
}

setInterval(getTime)

let blueTheme = document.querySelector('.blue')
let redTheme = document.querySelector('.red')
let greenTheme = document.querySelector('.green')
let purpleTheme = document.querySelector('.purple')
let pinkTheme = document.querySelector('.pink')
let yellowTheme = document.querySelector('.yellow')
let blackTheme = document.querySelector('.black')



blueTheme.onclick = () => {
    document.body.classList.add('blue')
    document.body.classList.remove('red')
    document.body.classList.remove('green')
    document.body.classList.remove('purple')
    document.body.classList.remove('pink')
    document.body.classList.remove('yellow')
    document.body.classList.remove('black')
    menu.classList.remove('active')
}

redTheme.onclick = () => {
    document.body.classList.add('red')
    document.body.classList.remove('blue')
    document.body.classList.remove('green')
    document.body.classList.remove('purple')
    document.body.classList.remove('pink')
    document.body.classList.remove('yellow')
    document.body.classList.remove('black')
    menu.classList.remove('active')
}

greenTheme.onclick = () => {
    document.body.classList.add('green')
    document.body.classList.remove('blue')
    document.body.classList.remove('red')
    document.body.classList.remove('purple')
    document.body.classList.remove('pink')
    document.body.classList.remove('yellow')
    document.body.classList.remove('black')
    menu.classList.remove('active')
}

purpleTheme.onclick = () => {
    document.body.classList.add('purple')
    document.body.classList.remove('blue')
    document.body.classList.remove('red')
    document.body.classList.remove('green')
    document.body.classList.remove('pink')
    document.body.classList.remove('yellow')
    document.body.classList.remove('black')
    menu.classList.remove('active')
}

pinkTheme.onclick = () => {
    document.body.classList.add('pink')
    document.body.classList.remove('blue')
    document.body.classList.remove('red')
    document.body.classList.remove('green')
    document.body.classList.remove('purple')
    document.body.classList.remove('yellow')
    document.body.classList.remove('black')
    menu.classList.remove('active')

}
yellowTheme.onclick = () => {
    document.body.classList.add('yellow')
    document.body.classList.remove('blue')
    document.body.classList.remove('red')
    document.body.classList.remove('green')
    document.body.classList.remove('purple')
    document.body.classList.remove('pink')
    document.body.classList.remove('black')
    menu.classList.remove('active')
}

blackTheme.onclick = () => {
    document.body.classList.add('black')
    document.body.classList.remove('blue')
    document.body.classList.remove('red')
    document.body.classList.remove('green')
    document.body.classList.remove('purple')
    document.body.classList.remove('pink')
    document.body.classList.remove('yellow')
    menu.classList.remove('active')
}