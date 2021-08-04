//variables for first input area and submit button *************************************************************************************************
const nameInput = document.getElementById('name-input')//grabbing the input area of name-field and assigning to a variable
const nameSubmit = document.getElementById('name-submit')//grabbing the submit button of name-field and assigning to a variable

//variables for second input area and submit button*************************************************************************************************
const personalityInput = document.getElementById('personality-input')//grabbing the input area of personality-field and assigning to a variable
const personalitySubmit = document.getElementById('personality-submit')//grabbing the submit button of personality-field and assigning to a variable

//variables for the image that will be displayed and the button that can be pushed to display it*****************************************************
const tuxedoCat = 'http://www.sloppykisscards.com/images/byo/breeds/cat/bwshort.png'//assigning an image from the web to a variable
const tuxedoButton = document.getElementById('tuxedo-button')//grabbing a specific button and assigning to a variable
const siameseCat = 'https://www.sloppykisscards.com/images/byo/breeds/cat/siamese.png'
const siameseButton = document.getElementById('siamese-button')
const tiger = 'http://pngimg.com/uploads/tiger/tiger_PNG23235.png'
const tigerButton = document.getElementById('tiger-button')
let catButtonSelection = 0

//variables for the image that will be displayed, the unique class it will have, and the button that gets pushed to select the image*****************
const wings = 'https://i.pinimg.com/originals/f5/b9/f2/f5b9f28593029410a0ba8932ae025814.png'//assigning an image from the web to a variable
const wingsClassName = 'wings'//assigning the literal name of a class to a variable
const wingsButton = document.getElementById('wings-button')//grabbing a specific button and assigning to a variable
const hat = 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf1a.png'
const hatClassName = 'hat'
const hatButton = document.getElementById('hat-button')
const glasses = 'http://3.bp.blogspot.com/-V_Q4gOLNA4A/U6eR3AqpYeI/AAAAAAAAFhc/oVrngT9PtaU/s1600/glasses_001_o.png'
const glassesClassName = 'glasses'
const glassesButton = document.getElementById('glasses-button')
let accessoryButtonSelection = 0

//variables for the image that will be displayed and the button that can be pushed to display it*****************************************************
const forest = 'https://64.media.tumblr.com/299ef7bc7444857a70868cdf28dfa621/tumblr_osvulu6kC31r4u4hbo1_540.jpg'//assigning an image from the web to a variable
const forestButton = document.getElementById('forest-button')//grabbing a specific button and assigning to a variable
const ocean = 'https://64.media.tumblr.com/1b8ded1c7e509da3510f8fac3d9bc2d5/72e645c063acb605-84/s540x810/f8f07096b6ed8e6e8e3b2110208b55006d3f6656.jpg'
const oceanButton = document.getElementById('ocean-button')
const city = 'https://64.media.tumblr.com/41c871e0bd0e6cc0dc7e0a2bb4d57c53/tumblr_onfa688bkm1vhp4qho1_540.jpg'
const cityButton = document.getElementById('city-button')
let backgroundButtonSelection = 0

//variables for the image that will be displayed and the button that can be pushed to display it*****************************************************
const cheeseburger = 'https://imagensemoldes.com.br/wp-content/uploads/2020/03/X-Burguer-PNG.png'//assigning an image from the web to a variable
const cheeseburgerButton = document.getElementById('cheeseburger-button')//grabbing a specific button and assigning to a variable
const kimchi = 'https://www.pnglib.com/wp-content/uploads/2020/01/bowl-of-kimchi_5e26d8c28589b.png'
const kimchiButton = document.getElementById('kimchi-button')
const trash = 'http://thisalso.com/img/projects/real-nyc-stickers/stickers/trash_pile.png'
const trashButton = document.getElementById('trash-button')
let foodButtonSelection = 0

//variables for the image area of the card where the images will be displayed, and the info area where the name and personality will be displayed****
const imageArea = document.getElementById('image-area')//grabbing the image area and assigning to a variable (where the picture goes)
const infoContainer = document.getElementById('info-container')//grabbing the info area and assigning to a variable (where the name and personality goes)

const postButton = document.getElementById('post-button')
//variable for the blank card that is displayed on page load and filled with images + text************************************************************
const petCreationCard = document.getElementById('pet-creation-card')

//event listeners for each button click, sending the corresponding image/text to the petCreationCard to be displayed for the user**********************
buttonEventListenerNoArgs(nameSubmit, submitName)
buttonEventListenerNoArgs(personalitySubmit, submitPersonality)

buttonEventListenerOneArg(window, alert, 'Welcome to our page!', 'load')
buttonEventListenerOneArg(tuxedoButton, petSelect, tuxedoCat, 'click') 
buttonEventListenerOneArg(siameseButton, petSelect, siameseCat, 'click')
buttonEventListenerOneArg(tigerButton, petSelect, tiger, 'click')
buttonEventListenerOneArg(forestButton, backgroundSelect, forest, 'click')
buttonEventListenerOneArg(oceanButton, backgroundSelect, ocean, 'click')
buttonEventListenerOneArg(cityButton, backgroundSelect, city, 'click')

buttonEventListenerTwoArgs(wingsButton, accessorySelect, wings, wingsClassName)
buttonEventListenerTwoArgs(hatButton, accessorySelect, hat, hatClassName)
buttonEventListenerTwoArgs(glassesButton, accessorySelect, glasses, glassesClassName)
buttonEventListenerTwoArgs(cheeseburgerButton, foodSelect, cheeseburger, `"Yum I love cheeseburgerzzzzzzzz"`)
buttonEventListenerTwoArgs(kimchiButton, foodSelect, kimchi, `"Wow kimchi is delish :)"`)
buttonEventListenerTwoArgs(trashButton, foodSelect, trash, `"Ew I don't like trash... but I'll still eat it"`)

initialize()
//event listener for the card where pet is displayed because the card is actually a form. each of the above button clicks allows the user to add to the form
petCreationCard.addEventListener('submit', (e) => {
    e.preventDefault()
    handleSubmit()
    imageArea.innerHTML = ''//reset the image area after form is submitted
    infoContainer.innerHTML = ''//reset text area after form is submitted
    setTimeout(function(){ window.location.reload() }, 500)
})

function buttonEventListenerNoArgs(button, func) {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        func()
    })
}

function buttonEventListenerOneArg(button, func, arg, event) {
    button.addEventListener(`${event}`, (e) => {
        e.preventDefault()
        func(arg)
    })
}

function buttonEventListenerTwoArgs(button, func, arg1, arg2) {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        func(arg1, arg2)
    })
}
//functions for each event listener****************************************************************************************************************************
function submitName() {
    infoContainer.innerHTML = ''
    const h1 = document.createElement('h1')//creates an <h1> element
    const name = nameInput.value//assigns the value of nameInput (whatever text the user enters into the box) to name variable
    h1.textContent = name//assigns value of name to the h1 element 
    h1.id = 'name'
    h1.classList.add('pet-name')//assigns the pet-name class to the h1 element for styling purposes
    infoContainer.append(h1)//adds h1 element to the info-container area (bottom) of card
    nameInput.value = ''//clears the text from the input area
}

function submitPersonality() {
    const p = document.createElement('p')//creates a <p> element
    const personality = personalityInput.value//assigns the value of personalityInput (whatever the user enters into the box) to personality variable
    p.textContent = personality//assigns the value of personality to the p element
    p.id = 'personality'
    infoContainer.append(p)//adds p element to the info-container area (bottom) of card
    personalityInput.value = ''//clears the text from the input area
}

function petSelect(petImage) { 
    catButtonSelection++
    if (catButtonSelection % 2 !== 0 || catButtonSelection === 1) {
        image = document.createElement('img')//creates an img element
        image.src = petImage//sets the src to whatever image is passed into the function
        image.id = 'pet-image'
        image.classList.add('pet')//adds class of pet to img element for styling purposes (all pet images will have the same styling)
        imageArea.append(image)//adds the pet to the image area
    } else if (catButtonSelection % 2 === 0) {
        image.src = ''
    }
}

function accessorySelect(accessoryImage, accessoryClass) {
    accessoryButtonSelection++
    if (accessoryButtonSelection % 2 !== 0 || accessoryButtonSelection === 1) {
        image = document.createElement('img')//creates an img element
        image.src = accessoryImage//sets the src to whatever image is passed into the function
        image.id = 'accessory'
        image.classList.add(`${accessoryClass}`)//adds whatever class is passed into the function to element for styling purposes (each accessory will have a different
                                             //class because each accessory requires different styling. Example: glasses would not be the same size as wings!)
        imageArea.append(image)//adds the accessory to the image area
    } else if (accessoryButtonSelection % 2 === 0) {
        image.src = ''
    }
}

function backgroundSelect(backgroundImage) {   
    backgroundButtonSelection++
    if (backgroundButtonSelection % 2 !== 0 || backgroundButtonSelection === 1) {
        image = document.createElement('img')//creates an img element
        image.src = backgroundImage//sets the src to whatever image is passed into the function
        image.id = 'background'
        image.classList.add('background')//adds class of background to img element for styling purposes (all background images will have the same styling)
        imageArea.append(image)//adds background image to image area
    } else if (backgroundButtonSelection % 2 === 0) {
        image.remove()
    }
}

function foodSelect(foodImage, petWords) {   
    foodButtonSelection++
    if (foodButtonSelection % 2 !== 0 || foodButtonSelection === 1) {
        image = document.createElement('img')//creates an img element
        image.src = foodImage//sets the src to whatever image is passed into the function
        image.id = 'food'
        image.classList.add('food')//adds class of food to img element for styling purposes (all foods images will have the same styling)
        imageArea.append(image)//adds the food to image area
        phrase = document.createElement('p')//creates a p element 
        phrase.id = 'phrase'
        phrase.textContent = petWords//petwords is whatever message you passed as an argumnet
        infoContainer.append(phrase)//adds the message to the text area like a quote
    } else if (foodButtonSelection % 2 === 0) {
        image.remove()
        phrase.remove()
    }
}
//function to create an object using what is submitted from the filled out petCreationCard and post the content (object can later be uploaded to a database?)
function handleSubmit() {//the below code runs after submit button is pushed!
    let petObj = {
        name: document.getElementById('name').textContent,
        personality: document.getElementById('personality').textContent,
        petImage: document.getElementById('pet-image').getAttribute('src'),
        accessoryImage : document.getElementById('accessory').getAttribute('src'),
        accessoryClass: document.getElementById('accessory').getAttribute('class'),
        backgroundImage: document.getElementById('background').getAttribute('src'),
        foodImage: document.getElementById('food').getAttribute('src'),
        phrase: document.getElementById('phrase').textContent,
        likes: 0
    }
    renderPet(petObj)//function to display the finished pet on the page below the creation card
    postPet(petObj)
}

//function to hard-code the pet which was created onto the page by creating a new card and filling it with the information the user entered
function renderPet(pet) {
    let card = document.createElement('div')
    card.className = 'card'
    card.id = 'pet-card'
    card.innerHTML = `
    <div class="image-area">
        <img src="${pet.petImage}" class="pet">
        <img src="${pet.accessoryImage}" class="${pet.accessoryClass}">
        <img src="${pet.backgroundImage}" class="background">
        <img src="${pet.foodImage}" class="food">
    </div>
    <div class="info-container">
        <h1 class="pet-name">${pet.name}</h1>
        <p>${pet.personality}</p>
        <p>${pet.phrase}</p>
    </div>
    <div>
        <span class="likes-count" id="likes-count">${pet.likes}</span> likes
        <button id="likes" class="likes-button"><3</button>
    </div>
    <div>
        <button id="delete" class="delete-button">Delete</button>
    </div>
    `
    card.querySelector('#likes').addEventListener('click', (e) => {
        pet.likes++
        card.querySelector('#likes-count').textContent = pet.likes
        updateLikes(pet)
    })

    card.querySelector('#delete').addEventListener('click', (e) => {
        card.remove()
        deletePet(pet.id)
    })

    document.querySelector('body').appendChild(card)
}

function getAllPets() {
    fetch('http://localhost:3000/post')
    .then(res => res.json())
    .then(petData => petData.forEach(pet => renderPet(pet)))
}

function postPet(petObj) {
    fetch('http://localhost:3000/post', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(petObj)
    })
    .then(res => res.json())
    .then(pet => console.log(pet))
}

function updateLikes(petObj) {
    fetch(`http://localhost:3000/post/${petObj.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petObj)
    })
    .then(res => res.json())
    .then(pet => console.log(pet))
}

function deletePet(id) {
    fetch(`http://localhost:3000/post/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(pet => console.log(pet))
}

function initialize() {
    getAllPets()
}

