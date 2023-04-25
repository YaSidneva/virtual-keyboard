const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  /*eventHandlers: {
    oninput: null,
    onclose: null,
  },*/

  properties: {
    value: "",
    capsLock: false,
  },

  init() {
    //Create textatea
    const textarea = document.createElement("textarea");
    textarea.classList.add("textarea");
    document.body.appendChild(textarea);

    //create keyboard area
    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    document.body.appendChild(keyboard);
    keyboard.appendChild(this._createKeys())
  },

  //create keys
  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
      "Tab",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "[",
      "]",
      "\\",
      "DEL",
      "Caps Lock",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      ";",
      "'",
      "Enter",
      "Shift",
      "\\",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ".",
      ",",
      "/",
      "↑",
      "shift",
      "Ctrl",
      "Win",
      "Alt",
      "Space",
      "Alt",
      "Ctrl",
      "←",
      "↓",
      "→",
    ];

    // Creates HTML for an icon
   

    keyLayout.forEach((key) => {
      const keyElement = document.createElement("button");
      const insertLineBreak =
        ["Backspace", "DEL", "Enter", "shift", "→"].indexOf(key) !== -1;

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("key");

      switch (key) {
        default:
          keyElement.textContent = key;

          keyElement.addEventListener("click", () => {
            this.properties.value += this.properties.capsLock
              ? key.toUpperCase()
              : key.toLowerCase();
            //this._triggerEvent("oninput");
          });

          break;

        case "Backspace":
          keyElement.classList.add("key-caps-shift-back");
          keyElement.innerHTML = "Backspace";
          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            //this._triggerEvent("oninput");
          });

          break;

        case "Caps Lock":
          keyElement.classList.add(
            "key-caps-shift-back"
            //"keyboard__key--activatable"
          );
          keyElement.innerHTML = "Caps Lock";
          keyElement.addEventListener("click", () => {
            this._toggleCapsLock();
            keyElement.classList.toggle(
              //"keyboard__key--active",
              this.properties.capsLock
            );
          });

          break;

        case "Enter":
          keyElement.classList.add("key-enter");
          keyElement.innerHTML = "ENTER";
          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            //this._triggerEvent("oninput");
          });

          break;

        case "Space":
          keyElement.classList.add("key-space");
          //keyElement.innerHTML = createIconHTML("");

          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            //this._triggerEvent("oninput");
          });

          break;

        case "Shift":
          keyElement.classList.add("key-caps-shift-back");
          keyElement.innerHTML = "Shift";
          break;

        case "Tab":
          keyElement.classList.add("key-tab");
          keyElement.innerHTML = "Tab";
          break;

          case "Ctrl":
          keyElement.classList.add("key-ctrl");
          keyElement.innerHTML = "Ctrl";
          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });
    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  },
  
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
