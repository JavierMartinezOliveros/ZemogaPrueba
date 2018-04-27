const characters = {
  "characters": [
    {
      "img":"assets/dist/images/profiles/char_1.png",
      "name": "Kanye West",
      "subtitle": "1 month ago",
      "publication": "in Entertaiment",
      "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
      "positive": 5,
      "negative": 5
    },
    {
      "img":"assets/dist/images/profiles/char_2.png",
      "name": "Mark Zuckenberg",
      "subtitle": "1 month ago",
      "publication": "in Bussines",
      "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
      "positive": 3,
      "negative": 7
    },
    {
      "img":"assets/dist/images/profiles/char_3.png",
      "name": "Cristina Fernández de Kirchner",
      "subtitle": "1 month ago",
      "publication": "in Politics",
      "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
      "positive": 10,
      "negative": 15
    },
    {
      "img":"assets/dist/images/profiles/char_4.png",
      "name": "Malala Yousafzai",
      "subtitle": "1 month ago",
      "publication": "in Entertaiment",
      "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
      "positive": 2,
      "negative": 2
    }
  ]
}

const appContainer = document.querySelector('#app')
let cloneArray = JSON.parse(JSON.stringify(characters))

class fnCharacter {

  constructor () {
    this.array = cloneArray
  }
  addCharacters () {
    this.array.characters.map((character, index) => {
      let char = new newCharacter()
      char.data = character
      char.indexx = index
      char.addCharacter()
    })
      
  }
}

class newCharacter {
  
  constructor () {
    this.data = {}
    this.indexx = 0
    this.typeVote = ''
    this.voteAgain = false
    this.thanks = false
  }

  addCharacter () {
    let tpl = `<div class="vote large-6 medium-6 small-12">
    <article class="voting-card">
      <div class="voting-img">
          <picture>
            <img src="${this.data.img}">
          </picture>          
      </div>
      <div class="info-voting">
        <div class="head-voting" id="head${this.indexx}">
          <div class="icon-thumb blue-bg">
            <img src="assets/dist/images/icons/thumb.png">
          </div>
          <div class="icon-thumb orange-bg">
            <img src="assets/dist/images/icons/thumb_down.png">
          </div>
          <h2 class="head-title">${this.data.name}</h2>
          <p><span>${this.data.subtitle}</span> ${this.data.publication}</p>
        </div>
        <div class="txt-voting">
          <p id="txtThanks${this.indexx}">
            ${this.data.description}
          </p>
          <div class="buttons" id="buttons${this.indexx}">
            <button class="icon-thumb blue-bg">
              <img src="assets/dist/images/icons/thumb.png" id="btUp${this.indexx}">
            </button>
            <button class="icon-thumb orange-bg">
              <img src="assets/dist/images/icons/thumb_down.png" id="btDown${this.indexx}">
            </button>
            <button class="btn" id="btVote${this.indexx}">
              Vote now
            </button>
          </div>
        </div> 
        <div class="bottom-bar w-100">
          <div class="blue-bg-fill increase" id="increase${this.indexx}">
            <div class="number">
              <p><b id="txtincrease${this.indexx}"></b><span>%</span></p>
            </div>
          </div>
          <div class="orange-bg-fill decrease" id="decrease${this.indexx}">
            <div class="number">
              <p><b id="txtdecrease${this.indexx}"></b><span>%</span></p>
            </div>
          </div>
        </div>    
      </div>    
    </article>
    </div>`
    appContainer.innerHTML += tpl
    this.fnBUttons()
    this.fnPercents(this.data.positive, this.data.negative)
  }

  fnBUttons () {
    let _this = this
    document.addEventListener('click', function(e){
      if(e.target.id === `btUp${_this.indexx}`){
        e.preventDefault()  
        _this.fnBtUp()
      }
      if(e.target.id === `btDown${_this.indexx}`){
        e.preventDefault()  
        _this.fnBtDown()
      }
      if(e.target.id === `btVote${_this.indexx}`){
        e.preventDefault()
        _this.fnVote()
      }
    })
  }

  fnVote () {
    if (!this.voteAgain) {
      switch (this.typeVote) {
        case 'positive':
          this.voteAgain = true
          document.getElementById(`buttons${this.indexx}`).className = 'buttons active'
          document.getElementById(`btVote${this.indexx}`).innerHTML = 'Vote again'
          document.getElementById(`txtThanks${this.indexx}`).innerHTML = 'Thank you for voting!'
          this.fnIncrease()
          break
        case 'negative':
        this.voteAgain = true
          document.getElementById(`buttons${this.indexx}`).className = 'buttons active'
          document.getElementById(`btVote${this.indexx}`).innerHTML = 'Vote again'
          document.getElementById(`txtThanks${this.indexx}`).innerHTML = 'Thank you for voting!'
          this.fnDecrease()
          break
        default:
          alert('debes seleccionar una opción')
          break
      }
    } else {
      this.voteAgain = false
      this.typeVote = ''
      document.getElementById(`buttons${this.indexx}`).className = 'buttons'
      document.getElementById(`btVote${this.indexx}`).innerHTML = 'Vote now'
      document.getElementById(`txtThanks${this.indexx}`).innerHTML = 'We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.'
    }
  }

  fnBtUp () {
    let _this = this
    let _parentpos = document.getElementById(`btUp${_this.indexx}`).parentElement
    let _parentneg = document.getElementById(`btDown${_this.indexx}`).parentElement
    let classParent = _parentpos.className
    if (classParent.indexOf('is__active') >= 0) {
      _this.typeVote = ''
      _parentpos.className = 'icon-thumb blue-bg' 
    } else { 
      _this.typeVote = 'positive'
      _parentpos.className = 'icon-thumb blue-bg is__active'
      _parentneg.className =  'icon-thumb orange-bg'
    }
  }

  fnBtDown () {
    let _this = this
    let _parentpos = document.getElementById(`btUp${_this.indexx}`).parentElement
    let _parentneg = document.getElementById(`btDown${_this.indexx}`).parentElement
    let classParent = _parentneg.className
    if (classParent.indexOf('is__active') >= 0) {
      _this.typeVote = ''
      _parentneg.className = 'icon-thumb orange-bg' 
    } else { 
      _this.typeVote = 'negative'
      _parentneg.className = 'icon-thumb orange-bg is__active'
      _parentpos.className =  'icon-thumb blue-bg'
    }
  }

  fnIncrease (e) {
    document.getElementById(`btUp${this.indexx}`).parentElement.className = 'icon-thumb blue-bg'
    this.data.positive = this.data.positive += 1
    this.fnPercents(this.data.positive, this.data.negative)
  }

  fnDecrease () {
    document.getElementById(`btDown${this.indexx}`).parentElement.className = 'icon-thumb orange-bg'
    this.data.negative = this.data.negative += 1
    this.fnPercents(this.data.positive, this.data.negative)
  }

  fnPercents (increase, decrease) {
    let total = increase + decrease
    let headCard = document.getElementById(`head${this.indexx}`)
    increase >= decrease ? headCard.className = "head-voting positive" : headCard.className = "head-voting negative"
    document.getElementById(`txtincrease${this.indexx}`).innerHTML = `${Math.ceil((100*increase)/total)}`
    document.getElementById(`txtdecrease${this.indexx}`).innerHTML = `${Math.ceil((100*decrease)/total)}`
    document.getElementById(`increase${this.indexx}`).style.width = `${Math.ceil(100*increase)/total}%`
    document.getElementById(`decrease${this.indexx}`).style.width = `${Math.ceil(100*decrease)/total}%`
  }

}

let iniCharacter = new fnCharacter()
iniCharacter.addCharacters()
