"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var characters = {
  "characters": [{
    "img": "assets/dist/images/profiles/char_1.png",
    "name": "Kanye West",
    "subtitle": "1 month ago",
    "publication": "in Entertaiment",
    "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
    "positive": 5,
    "negative": 5
  }, {
    "img": "assets/dist/images/profiles/char_2.png",
    "name": "Mark Zuckenberg",
    "subtitle": "1 month ago",
    "publication": "in Bussines",
    "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
    "positive": 3,
    "negative": 7
  }, {
    "img": "assets/dist/images/profiles/char_3.png",
    "name": "Cristina Fernández de Kirchner",
    "subtitle": "1 month ago",
    "publication": "in Politics",
    "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
    "positive": 10,
    "negative": 15
  }, {
    "img": "assets/dist/images/profiles/char_4.png",
    "name": "Malala Yousafzai",
    "subtitle": "1 month ago",
    "publication": "in Entertaiment",
    "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
    "positive": 2,
    "negative": 2
  }]
};

var appContainer = document.querySelector('#app');
var cloneArray = JSON.parse(JSON.stringify(characters));

var fnCharacter = function () {
  function fnCharacter() {
    _classCallCheck(this, fnCharacter);

    this.array = cloneArray;
  }

  _createClass(fnCharacter, [{
    key: "addCharacters",
    value: function addCharacters() {
      this.array.characters.map(function (character, index) {
        var char = new newCharacter();
        char.data = character;
        char.indexx = index;
        char.addCharacter();
      });
    }
  }]);

  return fnCharacter;
}();

var newCharacter = function () {
  function newCharacter() {
    _classCallCheck(this, newCharacter);

    this.data = {};
    this.indexx = 0;
    this.typeVote = '';
    this.voteAgain = false;
    this.thanks = false;
  }

  _createClass(newCharacter, [{
    key: "addCharacter",
    value: function addCharacter() {
      var tpl = "<div class=\"vote large-6 medium-6 small-12\">\n    <article class=\"voting-card\">\n      <div class=\"voting-img\">\n          <picture>\n            <img src=\"" + this.data.img + "\">\n          </picture>          \n      </div>\n      <div class=\"info-voting\">\n        <div class=\"head-voting\" id=\"head" + this.indexx + "\">\n          <div class=\"icon-thumb blue-bg\">\n            <img src=\"assets/dist/images/icons/thumb.png\">\n          </div>\n          <div class=\"icon-thumb orange-bg\">\n            <img src=\"assets/dist/images/icons/thumb_down.png\">\n          </div>\n          <h2 class=\"head-title\">" + this.data.name + "</h2>\n          <p><span>" + this.data.subtitle + "</span> " + this.data.publication + "</p>\n        </div>\n        <div class=\"txt-voting\">\n          <p id=\"txtThanks" + this.indexx + "\">\n            " + this.data.description + "\n          </p>\n          <div class=\"buttons\" id=\"buttons" + this.indexx + "\">\n            <button class=\"icon-thumb blue-bg\">\n              <img src=\"assets/dist/images/icons/thumb.png\" id=\"btUp" + this.indexx + "\">\n            </button>\n            <button class=\"icon-thumb orange-bg\">\n              <img src=\"assets/dist/images/icons/thumb_down.png\" id=\"btDown" + this.indexx + "\">\n            </button>\n            <button class=\"btn\" id=\"btVote" + this.indexx + "\">\n              Vote now\n            </button>\n          </div>\n        </div> \n        <div class=\"bottom-bar w-100\">\n          <div class=\"blue-bg-fill increase\" id=\"increase" + this.indexx + "\">\n            <div class=\"number\">\n              <p><b id=\"txtincrease" + this.indexx + "\"></b><span>%</span></p>\n            </div>\n          </div>\n          <div class=\"orange-bg-fill decrease\" id=\"decrease" + this.indexx + "\">\n            <div class=\"number\">\n              <p><b id=\"txtdecrease" + this.indexx + "\"></b><span>%</span></p>\n            </div>\n          </div>\n        </div>    \n      </div>    \n    </article>\n    </div>";
      appContainer.innerHTML += tpl;
      this.fnBUttons();
      this.fnPercents(this.data.positive, this.data.negative);
    }
  }, {
    key: "fnBUttons",
    value: function fnBUttons() {
      var _this = this;
      document.addEventListener('click', function (e) {
        if (e.target.id === "btUp" + _this.indexx) {
          e.preventDefault();
          _this.fnBtUp();
        }
        if (e.target.id === "btDown" + _this.indexx) {
          e.preventDefault();
          _this.fnBtDown();
        }
        if (e.target.id === "btVote" + _this.indexx) {
          e.preventDefault();
          _this.fnVote();
        }
      });
    }
  }, {
    key: "fnVote",
    value: function fnVote() {
      if (!this.voteAgain) {
        switch (this.typeVote) {
          case 'positive':
            this.voteAgain = true;
            document.getElementById("buttons" + this.indexx).className = 'buttons active';
            document.getElementById("btVote" + this.indexx).innerHTML = 'Vote again';
            document.getElementById("txtThanks" + this.indexx).innerHTML = 'Thank you for voting!';
            this.fnIncrease();
            break;
          case 'negative':
            this.voteAgain = true;
            document.getElementById("buttons" + this.indexx).className = 'buttons active';
            document.getElementById("btVote" + this.indexx).innerHTML = 'Vote again';
            document.getElementById("txtThanks" + this.indexx).innerHTML = 'Thank you for voting!';
            this.fnDecrease();
            break;
          default:
            alert('debes seleccionar una opción');
            break;
        }
      } else {
        this.voteAgain = false;
        this.typeVote = '';
        document.getElementById("buttons" + this.indexx).className = 'buttons';
        document.getElementById("btVote" + this.indexx).innerHTML = 'Vote now';
        document.getElementById("txtThanks" + this.indexx).innerHTML = 'We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.';
      }
    }
  }, {
    key: "fnBtUp",
    value: function fnBtUp() {
      var _this = this;
      var _parentpos = document.getElementById("btUp" + _this.indexx).parentElement;
      var _parentneg = document.getElementById("btDown" + _this.indexx).parentElement;
      var classParent = _parentpos.className;
      if (classParent.indexOf('is__active') >= 0) {
        _this.typeVote = '';
        _parentpos.className = 'icon-thumb blue-bg';
      } else {
        _this.typeVote = 'positive';
        _parentpos.className = 'icon-thumb blue-bg is__active';
        _parentneg.className = 'icon-thumb orange-bg';
      }
    }
  }, {
    key: "fnBtDown",
    value: function fnBtDown() {
      var _this = this;
      var _parentpos = document.getElementById("btUp" + _this.indexx).parentElement;
      var _parentneg = document.getElementById("btDown" + _this.indexx).parentElement;
      var classParent = _parentneg.className;
      if (classParent.indexOf('is__active') >= 0) {
        _this.typeVote = '';
        _parentneg.className = 'icon-thumb orange-bg';
      } else {
        _this.typeVote = 'negative';
        _parentneg.className = 'icon-thumb orange-bg is__active';
        _parentpos.className = 'icon-thumb blue-bg';
      }
    }
  }, {
    key: "fnIncrease",
    value: function fnIncrease(e) {
      document.getElementById("btUp" + this.indexx).parentElement.className = 'icon-thumb blue-bg';
      this.data.positive = this.data.positive += 1;
      this.fnPercents(this.data.positive, this.data.negative);
    }
  }, {
    key: "fnDecrease",
    value: function fnDecrease() {
      document.getElementById("btDown" + this.indexx).parentElement.className = 'icon-thumb orange-bg';
      this.data.negative = this.data.negative += 1;
      this.fnPercents(this.data.positive, this.data.negative);
    }
  }, {
    key: "fnPercents",
    value: function fnPercents(increase, decrease) {
      var total = increase + decrease;
      var headCard = document.getElementById("head" + this.indexx);
      increase >= decrease ? headCard.className = "head-voting positive" : headCard.className = "head-voting negative";
      document.getElementById("txtincrease" + this.indexx).innerHTML = "" + Math.ceil(100 * increase / total);
      document.getElementById("txtdecrease" + this.indexx).innerHTML = "" + Math.ceil(100 * decrease / total);
      document.getElementById("increase" + this.indexx).style.width = Math.ceil(100 * increase) / total + "%";
      document.getElementById("decrease" + this.indexx).style.width = Math.ceil(100 * decrease) / total + "%";
    }
  }]);

  return newCharacter;
}();

var iniCharacter = new fnCharacter();
iniCharacter.addCharacters();