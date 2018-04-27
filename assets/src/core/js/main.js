const characters = {
  "characters": [
    {
      "img":"assets/dist/images/profiles/char_1.png",
      "name": "Kanye West",
      "subtitle": "1 month ago",
      "publication": "in Entertaiment",
      "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
      "thumbUp": "assets/dist/images/icons/thumb.png",
      "thumbDown": "assets/dist/images/icons/thumb_down.png"
    },
    {
      "img":"assets/dist/images/profiles/char_2.png",
      "name": "Mark Zuckenberg",
      "subtitle": "1 month ago",
      "publication": "in Bussines",
      "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
      "thumbUp": "assets/dist/images/icons/thumb.png",
      "thumbDown": "assets/dist/images/icons/thumb_down.png"
     },
    {
      "img":"assets/dist/images/profiles/char_3.png",
      "name": "Cristina Fernández de Kirchner",
      "subtitle": "1 month ago",
      "publication": "in Politics",
      "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
      "thumbUp": "assets/dist/images/icons/thumb.png",
      "thumbDown": "assets/dist/images/icons/thumb_down.png"
    },
    {
      "img":"assets/dist/images/profiles/char_4.png",
      "name": "Malala Yousafzai",
      "subtitle": "1 month ago",
      "publication": "in Entertaiment",
      "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
      "thumbUp": "assets/dist/images/icons/thumb.png",
      "thumbDown": "assets/dist/images/icons/thumb_down.png"
    }
  ]
}

var appContainer = document.querySelector('#app')

class fnCharacter {

  constructor () {
    this.array = characters
  }
  
  addCharacters () {
    for (let character of this.array.characters) {
      let char = new newCharacter()
      char.data = character
      char.addCharacter()
    }
  }

}

class newCharacter {
  
  constructor () {
    this.data = {}
  }

  addCharacter () {
    console.log(this.data.name)
    let tpl = `<div class="vote large-6 medium-6 small-12">
                  <article class="voting-card">
                    <div class="voting-img">
                        <picture>
                          <img src="${this.data.img}">
                        </picture>          
                    </div>
                    <div class="info-voting">
                      <div class="head-voting">
                        <div class="icon-thumb blue-bg positive">
                        
                        </div>
                        <h2 class="head-title">${this.data.name}</h2>
                        <p><span>${this.data.subtitle}</span> ${this.data.publication}</p>
                      </div>
                      <div class="txt-voting">
                        <p>
                          ${this.data.description}
                        </p>
                        <div class="buttons">
                          <button href="#" class="icon-thumb blue-bg is--active"><img src="assets/dist/images/icons/thumb.png"></button>
                          <button href="#" class="icon-thumb orange-bg"><img src="assets/dist/images/icons/thumb_down.png"></button>
                          <button href="#" class="btn">Vote now</button>
                        </div>
                      </div> 
                      <div class="bottom-bar w-100">
                        <div class="blue-bg-fill increase">
                          <div class="number">
                            <p>00<span>%</span></p>
                          </div>
                        </div>
                        <div class="orange-bg-fill decrease">
                          <div class="number">
                            <p>00<span>%</span></p>
                          </div>
                        </div>
                      </div>    
                    </div>    
                  </article>
                </div>`

    appContainer.innerHTML += tpl

  }

}

let iniCharacter = new fnCharacter()
iniCharacter.addCharacters()
