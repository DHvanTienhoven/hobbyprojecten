const container = document.querySelector(`.container`)
const answerField = document.querySelector(`.answer`)
const title = document.querySelector(`.title`)
let button = document.querySelector(`#button`)

const createAnswer = (newTitle, coordinates, nextPage) => {
    title.innerHTML = newTitle;
    const location = document.createTextNode(coordinates);
    answerField.innerHTML = "";
    answerField.appendChild(location);
    container.removeChild(button);
    const newLink = document.createElement(`a`);
    newLink.href = nextPage;
    newLink.class = `link`
    newLink.innerHTML = `volgende missie`
    container.appendChild(newLink)
}


const completeFirstMission = button.addEventListener(`click`, () => {
    const inputValue = document.querySelector(`#first-answer`).value;
    if (inputValue.toLowerCase() === `dolfie`) {
        createAnswer(`Locatie 1`, `52.12274, 5.03088`, `missie2.html`)
        console.log(`yay`)
    }
    if (inputValue.toLowerCase()===`boom`){
        createAnswer(`Locatie 2`, `51.65935, 5.03081`, `missie3.html`)
    }
    if (inputValue.toLowerCase()==='efteling'){
        createAnswer(`Locatie 3`, `51.39603, 5.47804`, `missie4.html`)
    }
    if (inputValue.toLowerCase()===`nijntje`){
        createAnswer(`Locatie 4`, `51.26448, 5.70616`, `missie5.html`)
    }
    if (inputValue.toLowerCase()===`billy` && document.querySelector(`#second-answer`).value.toLowerCase() ===`muis`|| inputValue===`muis` && document.querySelector(`#second-answer`).value.toLowerCase() ===`billy`){
        createAnswer(`locatie 5`, `51.25724, 5.71216`, `missie6.html`);
        container.removeChild(document.querySelector(`#remove`))
    }
    if (inputValue.toLowerCase()===`honing`){
        createAnswer(`Locatie 6`, `51.28572, 5.75673`, `missie7.html`)
    }
    if (inputValue.toLowerCase() === `matroesjka`||inputValue.toLowerCase() === `matroeshka`|| inputValue.toLowerCase() === `matrushka`  ){
        createAnswer(`locatie 7`, `51.28576, 5.75235`, `missie8.html`)
    }
    if (inputValue.toLowerCase()===`koekoeksklok`){
        createAnswer(`locatie 8`, `51.28867, 5.75042`, `missie9.html`)
    }
    if (inputValue.toLowerCase() === 'taart'){
        createAnswer('locatie 9', `51.28725, 5.75115`, `einde.html`)
    }

})

