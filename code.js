function Key(value, upperCasable = true, eventKey = value) {
  this.eventKey = eventKey;
  this.value = value;
  this.upperCasable = upperCasable;
}

const Keyboard = {
  init() {
    //Create textatea
    const textarea = document.createElement("textarea");
    textarea.classList.add("textarea");
    document.body.appendChild(textarea);

    //create keyboard area
    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    document.body.appendChild(keyboard);
    keyboard.appendChild(this._createKeys());
  },

  //create keys
  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      new Key("`", false),
      new Key("1", false),
      new Key("2", false),
      new Key("3", false),
      new Key("4", false),
      new Key("5", false),
      new Key("6", false),
      new Key("7", false),
      new Key("8", false),
      new Key("9", false),
      new Key("0", false),
      new Key("-", false),
      new Key("=", false),
      new Key("Backspace", false),
      new Key("Tab", false),
      new Key("q"),
      new Key("w"),
      new Key("e"),
      new Key("r"),
      new Key("t"),
      new Key("y"),
      new Key("u"),
      new Key("i"),
      new Key("o"),
      new Key("p"),
      new Key("[", false),
      new Key("]", false),
      new Key("\\", false),
      new Key("DEL", false, "Delete"),
      new Key("Caps Lock", false, "CapsLock"),
      new Key("a"),
      new Key("s"),
      new Key("d"),
      new Key("f"),
      new Key("g"),
      new Key("h"),
      new Key("j"),
      new Key("k"),
      new Key("l"),
      new Key(";", false),
      new Key("'", false),
      new Key("Enter", false),
      new Key("Shift", false, "ShiftLeft"),
      new Key("\\", false),
      new Key("z"),
      new Key("x"),
      new Key("c"),
      new Key("v"),
      new Key("b"),
      new Key("n"),
      new Key("m"),
      new Key(".", false),
      new Key(",", false),
      new Key("/", false),
      new Key("↑", false),
      new Key("shift", false, "ShiftRight"),
      new Key("Ctrl", false, "ControlLeft"),
      new Key("Win", false, "Meta"),
      new Key("Alt", false, "AltLeft"),
      new Key("Space", false, " "),
      new Key("Alt", false, "AltRight"),
      new Key("Ctrl", false, "ControlRight"),
      new Key("←", false),
      new Key("↓", false),
      new Key("→", false),
    ];

    keyLayout.forEach((key) => {
      const keyElement = document.createElement("button");
      const insertLineBreak =
        ["Backspace", "DEL", "Enter", "shift", "→"].indexOf(key.value) !== -1;

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("key");
      const textarea = document.querySelector(".textarea");
      keyElement.innerHTML = key.value;
      keyElement.id = key.eventKey;

      switch (key.value) {
        case "Backspace":
          keyElement.classList.add("key-caps-shift-back");
          keyElement.addEventListener("click", () => {
            let chars = textarea.value.split("");
            console.log(chars);
            chars.pop();
            textarea.value = chars.join("");
          });
          break;

        case "Enter":
          keyElement.classList.add("key-enter");
          keyElement.innerHTML = "ENTER";
          keyElement.addEventListener("click", () => {
            textarea.value += "\n";
          });
          break;

        case "Space":
          keyElement.classList.add("key-space");
          keyElement.innerHTML = "";

          keyElement.addEventListener("click", () => {
            textarea.value += " ";
          });
          break;

        case "Caps Lock":
          keyElement.classList.add("key-caps-shift-back");
          keyElement.innerHTML = "Caps Lock";
          keyElement.classList.add("caps-lock-inactive");
          keyElement.addEventListener("click", () => {
            if (keyElement.classList.contains("caps-lock-active")) {
              keyElement.classList.replace(
                "caps-lock-active",
                "caps-lock-inactive"
              );
              document.querySelectorAll(".uppercasable-key").forEach((key) => {
                key.classList.add("upper");
              });
            } else {
              keyElement.classList.replace(
                "caps-lock-inactive",
                "caps-lock-active"
              );
              document.querySelectorAll(".uppercasable-key").forEach((key) => {
                key.classList.remove("upper");
              });
            }
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

        default:
          keyElement.textContent = key.value;
          if (key.upperCasable) {
            keyElement.classList.add("uppercasable-key");
          }
          keyElement.addEventListener("click", () => {
            textarea.value += keyElement.innerText;
          });

          break;
      }
      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });
    return fragment;
  },
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});

document.addEventListener(
  "keydown",
  (event) => {
    let name = event.key;

    if (["Shift", "Control", "Alt"].indexOf(name) !== -1) {
      name = event.code;
    }
    console.log(name)
    document.getElementById(name).classList.add("button-active");
  },
  false
);
document.addEventListener(
  "keyup",
  (event) => {
    let name = event.key;

    if (["Shift", "Control", "Alt"].indexOf(name) !== -1) {
      name = event.code;
    }
    document.getElementById(name).classList.remove("button-active");
  },
  false
);
