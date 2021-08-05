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

const defaultButton = document.getElementById('default')
const redButton = document.getElementById('red')
const pinkButton = document.getElementById('pink')
const blueButton = document.getElementById('blue')
const yellowButton = document.getElementById('yellow')
let cardColorSelection = 0
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
buttonEventListenerOneArg(defaultButton, cardBackground, 'white', 'click')
buttonEventListenerOneArg(redButton, cardBackground, 'rgb(187, 77, 74)', 'click')
buttonEventListenerOneArg(pinkButton, cardBackground, 'rgb(240, 130, 191)', 'click')
buttonEventListenerOneArg(blueButton, cardBackground, 'rgb(180, 187, 243)', 'click')
buttonEventListenerOneArg(yellowButton, cardBackground, 'rgb(255, 242, 182)', 'click')

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
    catName = nameInput.value//assigns the value of nameInput (whatever text the user enters into the box) to name variable
    h1.textContent = catName//assigns value of name to the h1 element 
    h1.id = 'name'
    h1.classList.add('pet-name')//assigns the pet-name class to the h1 element for styling purposes
    infoContainer.append(h1)//adds h1 element to the info-container area (bottom) of card
    nameInput.value = ''//clears the text from the input area
}

function submitPersonality() {
    const p = document.createElement('p')//creates a <p> element
    const personality = personalityInput.value//assigns the value of personalityInput (whatever the user enters into the box) to personality variable
    p.textContent = "This cat is " + personality + "!"//assigns the value of personality to the p element
    p.id = 'personality'
    infoContainer.append(p)//adds p element to the info-container area (bottom) of card
    personalityInput.value = ''//clears the text from the input area
}

function petSelect(petImage) { 
    catButtonSelection++
    if (catButtonSelection % 2 !== 0 || catButtonSelection === 1) {
        catImage = document.createElement('img')//creates an img element
        catImage.src = petImage//sets the src to whatever image is passed into the function
        catImage.id = 'pet-image'
        catImage.classList.add('pet')//adds class of pet to img element for styling purposes (all pet images will have the same styling)
        imageArea.append(catImage)//adds the pet to the image area
    } else if (catButtonSelection % 2 === 0) {
        catImage.remove()
    }
}

function accessorySelect(accessoryImage, accessoryClass) {
    accessoryButtonSelection++
    if (accessoryButtonSelection % 2 !== 0 || accessoryButtonSelection === 1) {
        accImage = document.createElement('img')//creates an img element
        accImage.src = accessoryImage//sets the src to whatever image is passed into the function
        accImage.id = 'accessory'
        accImage.classList.add(`${accessoryClass}`)//adds whatever class is passed into the function to element for styling purposes (each accessory will have a different
        imageArea.append(accImage)//adds the accessory to the image area
    } else if (accessoryButtonSelection % 2 === 0) {
        accImage.remove()
    }
}

function backgroundSelect(backgroundImage) {   
    backgroundButtonSelection++
    if (backgroundButtonSelection % 2 !== 0 || backgroundButtonSelection === 1) {
        bgImage = document.createElement('img')//creates an img element
        bgImage.src = backgroundImage//sets the src to whatever image is passed into the function
        bgImage.id = 'background'
        bgImage.classList.add('background')//adds class of background to img element for styling purposes (all background images will have the same styling)
        imageArea.append(bgImage)//adds background image to image area
    } else if (backgroundButtonSelection % 2 === 0) {
        bgImage.remove()
    }
}

function foodSelect(foodImage, petWords) {   
    foodButtonSelection++
    if (foodButtonSelection % 2 !== 0 || foodButtonSelection === 1) {
        catFoodImage = document.createElement('img')//creates an img element
        catFoodImage.src = foodImage//sets the src to whatever image is passed into the function
        catFoodImage.id = 'food'
        catFoodImage.classList.add('food')//adds class of food to img element for styling purposes (all foods images will have the same styling)
        imageArea.append(catFoodImage)//adds the food to image area
        phrase = document.createElement('p')//creates a p element 
        phrase.id = 'phrase'
        phrase.textContent = petWords + ` -${catName}`//petwords is whatever message you passed as an argumnet
        infoContainer.append(phrase)//adds the message to the text area like a quote
    } else if (foodButtonSelection % 2 === 0) {
        catFoodImage.remove()
        phrase.remove()
    }
}

function cardBackground(color) {
    cardColorSelection++
    if (cardColorSelection % 2 !== 0 || cardColorSelection === 1) {
        petCreationCard.style.background = color
    } else if (cardColorSelection % 2 === 0) {
        petCreationCard.style.background = 'white'
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
        comments: {comment: ''},
        likes: 0,
        cardColor: petCreationCard.style.background
    }
    renderPet(petObj)//function to display the finished pet on the page below the creation card
    postPet(petObj)
}

//function to hard-code the pet which was created onto the page by creating a new card and filling it with the information the user entered
function renderPet(pet) {
    console.log(pet)
    let card = document.createElement('div')
    card.className = 'card'
    card.id = 'pet-card'
    card.style.background = `${pet.cardColor}` 
    card.innerHTML = `
    <div class="image-area">
        <img src="${pet.petImage}" class="pet">
        <img src="${pet.accessoryImage}" class="${pet.accessoryClass}"></img>
        <img src="${pet.backgroundImage}" class="background">
        <img src="${pet.foodImage}" class="food">
    </div>
    <div class="info-container">
        <p class="pet-name">${pet.name}</p>
        <p>${pet.personality}</p>
        <p>${pet.phrase}</p>
    </div>
    <div class="comment-section">
        <p>Comments:</p>
        <ul id="comments">
        </ul>
    </div>
    <form id="comment-form">
        <input type="text" id="comment-field" placeholder="Add a comment...">
        <input type="text" id="user-name-field" placeholder="Your name...">
        <button type="submit" id="comment-submit">Post</button>
    </form>
    <div>
        <span class="likes-count" id="likes-count">${pet.likes}</span> likes
        <button id="likes" class="likes-button"><3</button>
    </div>
    <div>
        <button id="delete" class="delete-button">Delete</button>
    </div>
    `
    Object.values(pet.comments).forEach((e) => {
        const postedComment = document.createElement('li')
        postedComment.textContent = e
        card.querySelector('#comments').append(postedComment)
    })

    card.querySelector('#comment-form').addEventListener('submit', (e) => {
        e.preventDefault()
        const li = document.createElement('li')
        li.textContent = `"` + card.querySelector('#comment-field').value + `" ` + `- ${card.querySelector('#user-name-field').value}`
        card.querySelector('#comments').append(li)
        pet.comments[`${card.querySelector('#user-name-field').value}`] = li.textContent
        card.querySelector('#comment-field').value = ''
        card.querySelector('#user-name-field').value = ''
        update(pet)
    })

    card.querySelector('#likes').addEventListener('click', (e) => {
        pet.likes++
        card.querySelector('#likes-count').textContent = pet.likes
        update(pet)
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

function update(petObj) {
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