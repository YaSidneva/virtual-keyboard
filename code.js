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

    keyLayout.forEach((key) => {
      const keyElement = document.createElement("button");
      const insertLineBreak =
        ["Backspace", "DEL", "Enter", "shift", "→"].indexOf(key) !== -1;

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("key");
      const textarea = document.querySelector(".textarea");
      keyElement.textContent = key;

      switch (key) {
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
          keyElement.classList.add(
            "key-caps-shift-back"
          );
          keyElement.innerHTML = "Caps Lock";
          keyElement.classList.add("caps-lock-inactive")
          keyElement.addEventListener("click", () => {
            if (keyElement.classList.contains("caps-lock-active")) {
              keyElement.classList.replace(
                "caps-lock-active",
                "caps-lock-inactive"
              );
              document.querySelectorAll(".key-letter").forEach((key) => {
                key.classList.add("upper");
              });
            } else {
              keyElement.classList.replace(
                "caps-lock-inactive",
                "caps-lock-active"
              );
              document.querySelectorAll(".key-letter").forEach((key) => {
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
          keyElement.textContent = key;
          keyElement.classList.add("key-letter");
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
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});