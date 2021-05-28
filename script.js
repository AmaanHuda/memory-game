document.addEventListener('DOMContentLoaded', () => {
  // Variables
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  const greet = document.querySelector('.greet')
  const main = document.querySelector('.main')
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
  ]
  // SET THE IMAGES FOR THE CARDS

  cardArray.sort(() => 0.5 - Math.random())

  // FUNCTIONS
  function setToBlank(element) {
    element.setAttribute('src', 'images/blank.png')
  }
  function setToWhite(element) {
    element.setAttribute('src', 'images/white.png')
  }
  function hide(element) {
    element.classList.add('hidden')
  }
  function show(element) {
    element.classList.add('hidden')
  }

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      setToBlank(card)
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
      setToBlank(cards[optionOneId])
      setToBlank(cards[optionTwoId])
      alert('You have clicked the same image!')
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      setToWhite(cards[optionOneId])
      setToWhite(cards[optionTwoId])
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      setToBlank(cards[optionOneId])
      setToBlank(cards[optionTwoId])
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      hide(main)
      show(greet)
    }
  }
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
  createBoard()
})
