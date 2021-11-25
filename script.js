const main = document.querySelector('.main')
const unsplashURL = 'https://source.unsplash.com/random/'
const linhas = 10


for(let i=0; i < linhas * 3 ; i++)  { //3 imagens em cada linha, 10 linhas 
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    main.appendChild(img)
}   

console.log (getRandomSize())

function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr () {
    return Math.floor(Math.random()*10) + 300
}