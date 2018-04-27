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
    "thumbUp": "assets/dist/images/icons/thumb.png",
    "thumbDown": "assets/dist/images/icons/thumb_down.png"
  }, {
    "img": "assets/dist/images/profiles/char_2.png",
    "name": "Mark Zuckenberg",
    "subtitle": "1 month ago",
    "publication": "in Bussines",
    "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
    "thumbUp": "assets/dist/images/icons/thumb.png",
    "thumbDown": "assets/dist/images/icons/thumb_down.png"
  }, {
    "img": "assets/dist/images/profiles/char_3.png",
    "name": "Cristina Fernández de Kirchner",
    "subtitle": "1 month ago",
    "publication": "in Politics",
    "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
    "thumbUp": "assets/dist/images/icons/thumb.png",
    "thumbDown": "assets/dist/images/icons/thumb_down.png"
  }, {
    "img": "assets/dist/images/profiles/char_4.png",
    "name": "Malala Yousafzai",
    "subtitle": "1 month ago",
    "publication": "in Entertaiment",
    "description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
    "thumbUp": "assets/dist/images/icons/thumb.png",
    "thumbDown": "assets/dist/images/icons/thumb_down.png"
  }]
};

var appContainer = document.querySelector('#app');

var fnCharacter = function () {
  function fnCharacter() {
    _classCallCheck(this, fnCharacter);

    this.array = characters;
  }

  _createClass(fnCharacter, [{
    key: "addCharacters",
    value: function addCharacters() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.array.characters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var character = _step.value;

          var char = new newCharacter();
          char.data = character;
          char.addCharacter();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return fnCharacter;
}();

var newCharacter = function () {
  function newCharacter() {
    _classCallCheck(this, newCharacter);

    this.data = {};
  }

  _createClass(newCharacter, [{
    key: "addCharacter",
    value: function addCharacter() {
      console.log(this.data.name);
      var tpl = "<div class=\"vote large-6 medium-6 small-12\">\n                  <article class=\"voting-card\">\n                    <div class=\"voting-img\">\n                        <picture>\n                          <img src=\"" + this.data.img + "\">\n                        </picture>          \n                    </div>\n                    <div class=\"info-voting\">\n                      <div class=\"head-voting\">\n                        <div class=\"icon-thumb blue-bg positive\">\n                        \n                        </div>\n                        <h2 class=\"head-title\">" + this.data.name + "</h2>\n                        <p><span>" + this.data.subtitle + "</span> " + this.data.publication + "</p>\n                      </div>\n                      <div class=\"txt-voting\">\n                        <p>\n                          " + this.data.description + "\n                        </p>\n                        <div class=\"buttons\">\n                          <button href=\"#\" class=\"icon-thumb blue-bg is--active\"><img src=\"assets/dist/images/icons/thumb.png\"></button>\n                          <button href=\"#\" class=\"icon-thumb orange-bg\"><img src=\"assets/dist/images/icons/thumb_down.png\"></button>\n                          <button href=\"#\" class=\"btn\">Vote now</button>\n                        </div>\n                      </div> \n                      <div class=\"bottom-bar w-100\">\n                        <div class=\"blue-bg-fill increase\">\n                          <div class=\"number\">\n                            <p>00<span>%</span></p>\n                          </div>\n                        </div>\n                        <div class=\"orange-bg-fill decrease\">\n                          <div class=\"number\">\n                            <p>00<span>%</span></p>\n                          </div>\n                        </div>\n                      </div>    \n                    </div>    \n                  </article>\n                </div>";

      appContainer.innerHTML += tpl;
    }
  }]);

  return newCharacter;
}();

var iniCharacter = new fnCharacter();
iniCharacter.addCharacters();

/*function menu() {
    let menu = document.getElementById("topMenu");
    if (menu.className === "menu") {
        menu.className += " responsive";
    } else {
        menu.className = "menu";
    }
}*/