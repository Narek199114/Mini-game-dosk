const board=document.querySelector('#board')
const SQUERES_NUMBER=600
const colors=['#FF4500',';#40ff00','#1a1aff',' #ffff1a','#ff1ac6','#ff1a1a','#2eb82e','#00e6e6','#5c00e6']

for(let i=0;i<SQUERES_NUMBER;i++){
    const square=document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',()=>
        setColor(square))
    square.addEventListener('mouseleave',()=>
        removeColor(square)
    )
    board.append(square)
}

function setColor(element) {
    const color=getRandomColor()
    element.style.backgroundColor=color
    element.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor='#1d1d1d'
    element.style.boxShadow=`0 0 2px black`


}

function getRandomColor(){
    const index=Math.floor(Math.random()*colors.length)
    return colors[index]
}