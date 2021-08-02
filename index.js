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

//variables for the image that will be displayed, the unique class it will have, and the button that gets pushed to select the image*****************
const wings = 'https://i.pinimg.com/originals/f5/b9/f2/f5b9f28593029410a0ba8932ae025814.png'//assigning an image from the web to a variable
const wingsClassName = 'wings'//assigning the literal name of a class to a variable
const wingsButton = document.getElementById('wings-button')//grabbing a specific button and assigning to a variable
const hat = 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf19.png'
const hatClassName = 'hat'
const hatButton = document.getElementById('hat-button')
const glasses = 'https://cdn140.picsart.com/263573561020211.png'
const glassesClassName = 'glasses'
const glassesButton = document.getElementById('glasses-button')

//variables for the image that will be displayed and the button that can be pushed to display it*****************************************************
const forest = 'https://64.media.tumblr.com/299ef7bc7444857a70868cdf28dfa621/tumblr_osvulu6kC31r4u4hbo1_540.jpg'//assigning an image from the web to a variable
const forestButton = document.getElementById('forest-button')//grabbing a specific button and assigning to a variable
const ocean = 'https://d.ibtimes.co.uk/en/full/1657585/ocean-floor.jpg'
const oceanButton = document.getElementById('ocean-button')
const home = 'https://i.pinimg.com/originals/7e/4f/62/7e4f626d22eed7df79eb27f31c13656a.jpg'
const homeButton = document.getElementById('home-button')

//variables for the image that will be displayed and the button that can be pushed to display it*****************************************************
const cheeseburger = 'https://imagensemoldes.com.br/wp-content/uploads/2020/03/X-Burguer-PNG.png'//assigning an image from the web to a variable
const cheeseburgerButton = document.getElementById('cheeseburger-button')//grabbing a specific button and assigning to a variable
const kimchi = 'https://www.pnglib.com/wp-content/uploads/2020/01/bowl-of-kimchi_5e26d8c28589b.png'
const kimchiButton = document.getElementById('kimchi-button')

//variables for the image area of the card where the images will be displayed, and the info area where the name and personality will be displayed****
const imageArea = document.getElementById('image-area')//grabbing the image area and assigning to a variable (where the picture goes)
const infoContainer = document.getElementById('info-container')//grabbing the info area and assigning to a variable (where the name and personality goes)


//variable for the blank card that is displayed on page load and filled with images + text************************************************************
const petCreationCard = document.getElementById('pet-creation-card')

//event listeners for each button click, sending the corresponding image/text to the petCreationCard to be displayed for the user**********************
nameSubmit.addEventListener('click', (e) => {//adding an event listener to the name-field submit button
    e.preventDefault()//stopping the page from refreshing on button click(necessary for every button)
    submitName()//calls submitName every time button is clicked
})

personalitySubmit.addEventListener('click', (e) => {//adding event listener to the poersonality-field submit button
    e.preventDefault()//stopping the page from refreshing on button click(necessary for every button)
    submitPersonality()//calls submitPersonality every time button is clicked
})

tuxedoButton.addEventListener('click', (e) => {//adding event listener to the tuxedo cat button
    e.preventDefault()//stopping the page from refreshing on button click(necessary for every button)
    petSelect(tuxedoCat)//calls petSelect every time button is pushed with specific parameter of tuxedoCat
})

siameseButton.addEventListener('click', (e) => {
    e.preventDefault()
    petSelect(siameseCat)
})

tigerButton.addEventListener('click', (e) => {
    e.preventDefault()
    petSelect(tiger)
})

wingsButton.addEventListener('click', (e) => {//adding event listener to wings button
    e.preventDefault()//stopping the page from refreshing on button click(necessary for every button)
    accessorySelect(wings, wingsClassName)//calls accessorySelect every time button is pushed with specific parameters of wings and wingsClassName
})

hatButton.addEventListener('click', (e) => {
    e.preventDefault()
    accessorySelect(hat, hatClassName)
})

glassesButton.addEventListener('click', (e) => {
    e.preventDefault()
    accessorySelect(glasses, glassesClassName)
})

forestButton.addEventListener('click', (e) => {//adding event listener to forest button
    e.preventDefault()//stopping the page from refreshing on button click(necessary for every button)
    backgroundSelect(forest)//calls backgroundSelect every time button is pushed with specific parameter of forest
})

oceanButton.addEventListener('click', (e) => {
    e.preventDefault()//stopping the page from refreshing on button click(necessary for every button)
    backgroundSelect(ocean)
})

homeButton.addEventListener('click', (e) => {
    e.preventDefault()
    backgroundSelect(home)
})

cheeseburgerButton.addEventListener('click', (e) => {//adding event listener to cheeseburger button
    e.preventDefault()//stopping the page from refreshing on button click(necessary for every button)
    foodSelect(cheeseburger, `"Yum I love cheeseburgerzzzzzzzz"`)//calls foodSelect every time button is pushed with specific parameter of cheeseburger                                                                  
                                                                //and whatever message you want displayed
})

kimchiButton.addEventListener('click', (e) => {
    e.preventDefault()
    foodSelect(kimchi, `"Wow kimchi is delish :)"`)
})

//event listener for the card where pet is displayed because the card is actually a form. each of the above button clicks allows the user to add to the form
petCreationCard.addEventListener('submit', (e) => {
    e.preventDefault()
    handleSubmit()
    imageArea.innerHTML = ''//reset the image area after form is submitted
    infoContainer.innerHTML = ''//reset text area after form is submitted
})


//functions for each event listener****************************************************************************************************************************
function submitName() {
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
    const image = document.createElement('img')//creates an img element
    image.src = petImage//sets the src to whatever image is passed into the function
    image.id = 'pet-image'
    image.classList.add('pet')//adds class of pet to img element for styling purposes (all pet images will have the same styling)
    imageArea.append(image)//adds the pet to the image area
}

function accessorySelect(accessoryImage, accessoryClass) {
    const image = document.createElement('img')//creates an img element
    image.src = accessoryImage//sets the src to whatever image is passed into the function
    image.id = 'accessory'
    image.classList.add(`${accessoryClass}`)//adds whatever class is passed into the function to element for styling purposes (each accessory will have a different
                                             //class because each accessory requires different styling. Example: glasses would not be the same size as wings!)
    imageArea.append(image)//adds the accessory to the image area
}

function backgroundSelect(backgroundImage) {   
    const image = document.createElement('img')//creates an img element
    image.src = backgroundImage//sets the src to whatever image is passed into the function
    image.id = 'background'
    image.classList.add('background')//adds class of background to img element for styling purposes (all background images will have the same styling)
    imageArea.append(image)//adds background image to image area
}

function foodSelect(foodImage, petWords) {   
    const image = document.createElement('img')//creates an img element
    image.src = foodImage//sets the src to whatever image is passed into the function
    image.id = 'food'
    image.classList.add('food')//adds class of food to img element for styling purposes (all foods images will have the same styling)
    imageArea.append(image)//adds the food to image area
    const phrase = document.createElement('p')//creates a p element 
    phrase.id = 'phrase'
    phrase.textContent = petWords//petwords is whatever message you passed as an argumnet
    infoContainer.append(phrase)//adds the message to the text area like a quote
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
        phrase: document.getElementById('phrase').textContent
    }
    console.log(petObj)
    renderPet(petObj)//function to display the finished pet on the page below the creation card
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
    `
    document.querySelector('body').appendChild(card)
}
 


