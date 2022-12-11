// BASIC SYNTAX
// Selectors: 
let elementName = document.querySelector("#elementId")
// Functions
function functionName() {
  // do something here
 
}
// Call the event with an event listener
// elementName.addEventListener("onclick", functionName);

// 1. DISPLAY NAME
// Click the button to display your name in the box
// (Tip: in this example, you will hard code your name within the JavaScript function, rather than use the input box to grab it).

// Selectors
let myName = document.querySelector("#myName")
let btnName = document.querySelector("#btnName")

// Function
function sayMyname(){
  myName.value = 'Yang'
}
// Call the event
btnName.addEventListener('click',sayMyname)

// 2. LIGHTSWITCH
// Switch lights on mouseover
// When the mouse cursor is on the lightbulb image, the lighton image should show; and revert back to the lightoff image when the mouse moves off.

// Selectors
let imageOff = document.querySelector("#imageOff")

// Function
function switchLight(){
  imageOff.src = 'images/lighton.png'
}
function switchOff(){
  imageOff.src = 'images/lightoff.png'
}
// Call the event
imageOff.addEventListener('mouseover',switchLight)
imageOff.addEventListener('mouseout',switchOff)

// 3. Double click button to display content
// Selectors
let btndbName = document.querySelector("#btndbName")
let pText = document.querySelector("#displayPara")


/* Function {
  //some code here
  //create a new img element
}*/
function doubleClick(){
  pText.innerText = 'You double clicked me'
  pText.style.color = 'red'
  const imgOn = document.createElement('img')
  imgOn.src = 'images/smileyface.png'
  pText.append(imgOn)
 
}
// Call the event
btndbName.addEventListener('dblclick',doubleClick)

// 4. Traffic Lights
// Selectors
let stopSign = document.getElementById("btnStop")
let readySign = document.getElementById('btnReady')
let goSign = document.getElementById('btnGo')
let lights = document.querySelectorAll('.lights')
let stopDiv = document.getElementById('stopDiv')
let readyDiv = document.getElementById('readyDiv')
let goDiv = document.getElementById('goDiv')

// Function 1
function Stop(){
  // console.log('stop()')
  reSetLight()
  stopDiv.style.background = 'red'
}
// Function 2
function Ready(){
  // console.log('Ready()')
  reSetLight()
  readyDiv.style.background = 'yellow'
}
// Function 3
function Go(){
  // console.log('Go()')
  reSetLight()
  goDiv.style.background = 'green'
}
// reset lights to 'black' 
function reSetLight(){
  for(let i=0;i<lights.length;i++) {
    lights[i].style.background = 'black'
  }
}


// Call the events
stopSign.addEventListener('click',Stop)
readySign.addEventListener('click',Ready)
goSign.addEventListener('click',Go)


// 5. Change textbox border colours
// Selectors
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let clickMe = document.getElementById('btn2Name')
// Function
function changeBorderColor(){
  firstName.style.borderColor ='red'
  lastName.style.borderColor ='green'
  console.log('changecolor')
}
// Call the event
clickMe.addEventListener('click',changeBorderColor)

// 6. Validate the input [length should be more than 5 characters]
// Selectors
let errMsg = document.getElementById('errMsg')
let validateText = document.getElementById('myName2')
let validateButton = document.getElementById('btnSub2')

/*Function {
  //if statement
}*/
function validateLength(){
  console.log(`validate length = ${validateText.value.length}`)
  validateText.value.length > 5 ? errMsg.style.color = 'grey' : errMsg.style.color = 'red'  
  validateText.value.length > 5 ? errMsg.innerHTML = 'All Good' : errMsg.innerHTML = 'length should be more than 5 characters'  
}
// Call the event
validateButton.addEventListener('click',validateLength)
// 7.create a list of hobbies
// Selectors
let hobbies = document.querySelector('#hobbies ul')
let addHobbieButton = document.querySelector('#btnHobbies')
/*Function {
  //for loop
}*/
function addHobbie(){
  let count = 0
  while(count<3){
    let userInput = prompt('What are your hobbies')
    let hobbie = document.createElement('li')
    hobbie.innerHTML = userInput
    hobbies.appendChild(hobbie)
    count++
  }
}

// Call the event
addHobbieButton.addEventListener('click',addHobbie)

// 8. Display a profile card from an object
//Object
let Laize = {
  name:'Laize',
  title: 'Instructor',
  hobbies:['Walking','Cycling'],
  picture:'images/face.jpg'
}

// Selectors
let btnDisplayCard = document.querySelector('#btnProfile')
let displayCard = document.querySelector('#displayCard')

const card = document.createElement('div')
card.className = 'card'
card.style = "width: 18rem;"

const imgCard = document.createElement('img')
imgCard.className = 'card-img-top'
imgCard.src = "./images/face.jpg"
imgCard.alt = "Card image cap"

const cardBody = document.createElement('div')
cardBody.className = "card-body"

const cardName = document.createElement('h3')
cardName.innerText = Laize.name

const cardTextJob = document.createElement('p')
cardTextJob.innerHTML = Laize.title

const cardTextHobbies = document.createElement('p')
cardTextHobbies.innerHTML = Laize.hobbies

cardBody.appendChild(cardName)
cardBody.appendChild(cardTextJob)
cardBody.appendChild(cardTextHobbies)

/*Function {
    //for loop
      //if statement
  }*/

function displayMyCard(){
  displayCard.appendChild(card)
  card.appendChild(imgCard)
  card.appendChild(cardBody)
  console.log('displayMyCard() call')
  console.log(`Laize = ${Laize}`)
  for(property in Laize){
  console.log(`property = ${property}`)
  
  console.log(`profile.hasOwnProperty(property) = ${Laize.hasOwnProperty(property)}`)
}

}

btnDisplayCard.addEventListener('click',displayMyCard)
