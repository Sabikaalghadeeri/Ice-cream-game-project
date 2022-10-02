let box = document.querySelector(".box")
let alphaLetters = []
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// creating divs for alphabets letters 
for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i])
  let letter = document.createElement('div')
  letter.innerHTML = alphabet[i]
  letter.id = alphabet[i]
  letter.classList.add(alphabet[i])
  box.appendChild(letter)
//   letter.classList.add('letter')
  letter.addEventListener('click', clickLetter)
}


function clickLetter(event){
    console.log('letter was clicked!')
    console.log(event.target.classList[0])
    event.target.removeEventListener('click', clickLetter)
    event.target.style.backgroundColor = 'lightgrey'

}

// function Reset(){
//     for (let i = 0; i < alphabet.length; i++) {
//         console.log(alphabet[i])

//     document.getElementById('alphabet[i]').innerHTML=''
//     alphaLetters = []
//  }
// }