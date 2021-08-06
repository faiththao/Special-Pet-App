const nameInput = document.getElementById('name-input')
const nameSubmit = document.getElementById('name-submit')

const personalityInput = document.getElementById('personality-input')
const personalitySubmit = document.getElementById('personality-submit')

const tuxedoCat = 'http://www.sloppykisscards.com/images/byo/breeds/cat/bwshort.png'
const tuxedoButton = document.getElementById('tuxedo-button')
const siameseCat = 'https://www.sloppykisscards.com/images/byo/breeds/cat/siamese.png'
const siameseButton = document.getElementById('siamese-button')
const tiger = 'http://pngimg.com/uploads/tiger/tiger_PNG23235.png'
const tigerButton = document.getElementById('tiger-button')
let catButtonSelection = 0

const wings = 'https://i.pinimg.com/originals/f5/b9/f2/f5b9f28593029410a0ba8932ae025814.png'
const wingsClassName = 'wings'
const wingsButton = document.getElementById('wings-button')
const hat = 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf1a.png'
const hatClassName = 'hat'
const hatButton = document.getElementById('hat-button')
const glasses = 'http://3.bp.blogspot.com/-V_Q4gOLNA4A/U6eR3AqpYeI/AAAAAAAAFhc/oVrngT9PtaU/s1600/glasses_001_o.png'
const glassesClassName = 'glasses'
const glassesButton = document.getElementById('glasses-button')
let accessoryButtonSelection = 0

const forest = 'https://64.media.tumblr.com/299ef7bc7444857a70868cdf28dfa621/tumblr_osvulu6kC31r4u4hbo1_540.jpg'
const forestButton = document.getElementById('forest-button')
const ocean = 'https://64.media.tumblr.com/1b8ded1c7e509da3510f8fac3d9bc2d5/72e645c063acb605-84/s540x810/f8f07096b6ed8e6e8e3b2110208b55006d3f6656.jpg'
const oceanButton = document.getElementById('ocean-button')
const city = 'https://64.media.tumblr.com/41c871e0bd0e6cc0dc7e0a2bb4d57c53/tumblr_onfa688bkm1vhp4qho1_540.jpg'
const cityButton = document.getElementById('city-button')
let backgroundButtonSelection = 0

const cheeseburger = 'https://imagensemoldes.com.br/wp-content/uploads/2020/03/X-Burguer-PNG.png'
const cheeseburgerButton = document.getElementById('cheeseburger-button')
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

const imageArea = document.getElementById('image-area')
const infoContainer = document.getElementById('info-container')
const nameDiv = document.getElementById('name-div')

const postButton = document.getElementById('post-button')

const petCreationCard = document.getElementById('pet-creation-card')

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

petCreationCard.addEventListener('submit', (e) => {
    e.preventDefault()
    handleSubmit()
    imageArea.innerHTML = ''
    infoContainer.innerHTML = ''
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

function submitName() {
    infoContainer.innerHTML = ''
    const h1 = document.createElement('h1')
    catName = nameInput.value
    h1.textContent = catName
    h1.id = 'name'
    h1.classList.add('pet-name')
    nameDiv.append(h1)
    nameInput.value = ''
}

function submitPersonality() {
    const p = document.createElement('p')
    const personality = personalityInput.value
    p.textContent = "This cat is " + personality + "!"
    p.id = 'personality'
    infoContainer.append(p)
    personalityInput.value = ''
}

function petSelect(petImage) { 
    catButtonSelection++
    if (catButtonSelection % 2 !== 0 || catButtonSelection === 1) {
        catImage = document.createElement('img')
        catImage.src = petImage
        catImage.id = 'pet-image'
        catImage.classList.add('pet')
        imageArea.append(catImage)
    } else if (catButtonSelection % 2 === 0) {
        catImage.remove()
    }
}

function accessorySelect(accessoryImage, accessoryClass) {
    accessoryButtonSelection++
    if (accessoryButtonSelection % 2 !== 0 || accessoryButtonSelection === 1) {
        accImage = document.createElement('img')
        accImage.src = accessoryImage
        accImage.id = 'accessory'
        accImage.classList.add(`${accessoryClass}`)
        imageArea.append(accImage)
    } else if (accessoryButtonSelection % 2 === 0) {
        accImage.remove()
    }
}

function backgroundSelect(backgroundImage) {   
    backgroundButtonSelection++
    if (backgroundButtonSelection % 2 !== 0 || backgroundButtonSelection === 1) {
        bgImage = document.createElement('img')
        bgImage.src = backgroundImage
        bgImage.id = 'background'
        bgImage.classList.add('background')
        imageArea.append(bgImage)
    } else if (backgroundButtonSelection % 2 === 0) {
        bgImage.remove()
    }
}

function foodSelect(foodImage, petWords) {   
    foodButtonSelection++
    if (foodButtonSelection % 2 !== 0 || foodButtonSelection === 1) {
        catFoodImage = document.createElement('img')
        catFoodImage.src = foodImage
        catFoodImage.id = 'food'
        catFoodImage.classList.add('food')
        imageArea.append(catFoodImage)
        phrase = document.createElement('p')
        phrase.id = 'phrase'
        phrase.textContent = petWords + ` -${catName}`
        infoContainer.append(phrase)
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

function handleSubmit() {
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
    renderPet(petObj)
    postPet(petObj)
}

function renderPet(pet) {
    console.log(pet)
    let card = document.createElement('div')
    card.className = 'card'
    card.id = 'pet-card'
    card.style.background = `${pet.cardColor}` 
    card.innerHTML = `
    <div id="name-div">
        <h1>${pet.name}</h1>
    </div>
    <div class="image-area">
        <img src="${pet.petImage}" class="pet">
        <img src="${pet.accessoryImage}" class="${pet.accessoryClass}"></img>
        <img src="${pet.backgroundImage}" class="background">
        <img src="${pet.foodImage}" class="food">
    </div>
    <div class="info-container">
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
    delete pet.comments.comment
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

function postComments(petObj) {
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