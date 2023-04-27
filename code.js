function Key(value, upperCasable = true, eventKey = value) {
  this.eventKey = eventKey;
  this.value = value;
  this.upperCasable = upperCasable;
}

let eng = true;

const Keyboard = {
  keyLayout: [
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
    new Key("↑", false, "ArrowUp"),
    new Key("shift", false, "ShiftRight"),
    new Key("Ctrl", false, "ControlLeft"),
    new Key("Win", false, "Meta"),
    new Key("Alt", false, "AltLeft"),
    new Key("Space", false, " "),
    new Key("Alt", false, "AltRight"),
    new Key("Ctrl", false, "ControlRight"),
    new Key("←", false, "ArrowLeft"),
    new Key("↓", false, "ArrowDown"),
    new Key("→", false, "ArrowRight"),
  ],

  keyLayoutRus: [
    new Key("`"),
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
    new Key("й"),
    new Key("ц"),
    new Key("у"),
    new Key("к"),
    new Key("е"),
    new Key("н"),
    new Key("г"),
    new Key("ш"),
    new Key("щ"),
    new Key("з"),
    new Key("х"),
    new Key("ъ"),
    new Key("\\", false),
    new Key("DEL", false, "Delete"),
    new Key("Caps Lock", false, "CapsLock"),
    new Key("ф"),
    new Key("ы"),
    new Key("в"),
    new Key("а"),
    new Key("п"),
    new Key("р"),
    new Key("о"),
    new Key("л"),
    new Key("д"),
    new Key("ж"),
    new Key("э"),
    new Key("Enter", false),
    new Key("Shift", false, "ShiftLeft"),
    new Key("\\", false),
    new Key("я"),
    new Key("ч"),
    new Key("с"),
    new Key("м"),
    new Key("и"),
    new Key("т"),
    new Key("ь"),
    new Key("б"),
    new Key("ю"),
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
  ],

  init() {
    //Create textatea
    const textarea = document.createElement("textarea");
    textarea.classList.add("textarea");
    document.body.appendChild(textarea);

    //create keyboard area
    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard");
    document.body.appendChild(keyboard);
    keyboard.appendChild(this._createKeys(this.keyLayout));

    const description = document.createElement("div");
    description.style.textAlign = "center";
    document.body.appendChild(description);

    const os = document.createElement("p");
    os.innerHTML = "Клавиатура создана в операционной системе Windows";
    description.appendChild(os);

    const placeholder = document.createElement("p");
    placeholder.innerHTML =
      "Для переключения языка комбинация: левыe alt + shift";
    description.appendChild(placeholder);
  },

  changeLanguage() {
    const keyboard = document.querySelector(".keyboard");
    keyboard.replaceChildren(this._createKeys(this.keyLayoutRus));
    eng = false;
  },

  //create keys
  _createKeys(keyLayout) {
    const fragment = document.createDocumentFragment();

    keyLayout.forEach((key) => {
      const keyElement = document.createElement("button");
      const insertLineBreak =
        ["Backspace", "DEL", "Enter", "shift", "→"].indexOf(key.value) !== -1;

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("key");
      const textarea = document.querySelector(".textarea");

      keyElement.innerHTML = key.value;
      keyElement.id = key.eventKey;

      textarea.focus();

      keyElement.addEventListener("click", function () {
        textarea.focus(); // устанавливаем фокус на textarea
      });

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

        case "DEL":
          keyElement.addEventListener("click", () => {
            const currentValue = textarea.value;
            const selectionStart = textarea.selectionStart;
            const selectionEnd = textarea.selectionEnd;
            if (selectionStart === selectionEnd) {
              // удаление символа после текущей позиции курсора
              textarea.value =
                currentValue.substring(0, selectionStart) +
                currentValue.substring(selectionStart + 1);
              textarea.selectionStart = selectionEnd;
              textarea.selectionEnd = selectionEnd;
            } else {
              // удаление выделенного текста
              textarea.value =
                currentValue.substring(0, selectionStart) +
                currentValue.substring(selectionEnd);
              textarea.selectionStart = selectionStart;
              textarea.selectionEnd = selectionStart;
            }
          });
          break;

        case "Enter":
          keyElement.classList.add("key-enter");
          keyElement.innerHTML = "ENTER";
          keyElement.addEventListener("click", () => {
            insertTextAtCursor(textarea, "\n");
          });
          break;

        case "Space":
          keyElement.classList.add("key-space");
          keyElement.innerHTML = "";

          keyElement.addEventListener("click", () => {
            insertTextAtCursor(textarea, " ");
          });
          break;

        case "Caps Lock":
          keyElement.classList.add("key-caps-shift-back");
          keyElement.innerHTML = "Caps Lock";
          keyElement.classList.add("caps-lock-inactive");
          keyElement.addEventListener("click", () => {
            if (keyElement.classList.contains("lock-active")) {
              keyElement.classList.replace("lock-active", "caps-lock-inactive");
              document.querySelectorAll(".uppercasable-key").forEach((key) => {
                key.classList.remove("upper");
              });
            } else {
              keyElement.classList.replace("caps-lock-inactive", "lock-active");
              document.querySelectorAll(".uppercasable-key").forEach((key) => {
                key.classList.add("upper");
              });
            }
          });

          break;

        case "Shift":
          keyElement.classList.add("key-caps-shift-back");
          keyElement.innerHTML = "Shift";
          keyElement.classList.add("shift-lock-inactive");
          keyElement.addEventListener("click", () => {
            if (keyElement.classList.contains("lock-active")) {
              keyElement.classList.replace(
                "lock-active",
                "shift-lock-inactive"
              );
              document.getElementById("`").innerHTML = "`";
              document.getElementById("1").innerHTML = "1";
              document.getElementById("2").innerHTML = "2";
              document.getElementById("3").innerHTML = "3";
              document.getElementById("4").innerHTML = "4";
              document.getElementById("5").innerHTML = "5";
              document.getElementById("6").innerHTML = "6";
              document.getElementById("7").innerHTML = "7";
              document.getElementById("8").innerHTML = "8";
              document.getElementById("9").innerHTML = "9";
              document.getElementById("0").innerHTML = "0";
              document.getElementById("-").innerHTML = "-";
              document.getElementById("=").innerHTML = "=";
            } else {
              keyElement.classList.replace(
                "shift-lock-inactive",
                "lock-active"
              );
              document.getElementById("`").innerHTML = "~";
              document.getElementById("1").innerHTML = "!";
              document.getElementById("2").innerHTML = "@";
              document.getElementById("3").innerHTML = "#";
              document.getElementById("4").innerHTML = "$";
              document.getElementById("5").innerHTML = "%";
              document.getElementById("6").innerHTML = "^";
              document.getElementById("7").innerHTML = "&";
              document.getElementById("8").innerHTML = "*";
              document.getElementById("9").innerHTML = "(";
              document.getElementById("0").innerHTML = ")";
              document.getElementById("-").innerHTML = "_";
              document.getElementById("=").innerHTML = "+";
            }
          });
          break;

        case "Tab":
          keyElement.classList.add("key-tab");
          keyElement.innerHTML = "Tab";
          keyElement.addEventListener("click", () => {
            insertTextAtCursor(textarea, "\t");
          });

          break;

        case "Ctrl":
          keyElement.classList.add("key-ctrl");
          keyElement.innerHTML = "Ctrl";
          keyElement.addEventListener("click", () => {
            insertTextAtCursor(textarea, "");
          });
          break;

        case "Alt":
          keyElement.addEventListener("click", () => {
            insertTextAtCursor(textarea, "");
          });
          break;

        case "Win":
          keyElement.addEventListener("click", () => {
            insertTextAtCursor(textarea, "");
          });
          break;

        default:
          keyElement.textContent = key.value;
          if (key.upperCasable) {
            keyElement.classList.add("uppercasable-key");
          }
          keyElement.addEventListener("click", () => {
            insertTextAtCursor(textarea, keyElement.innerText);
          });

          break;
      }

      document.addEventListener("keydown", function (event) {
        if (event.code === "CapsLock") {
          if (
            document
              .getElementById("CapsLock")
              .classList.contains("caps-lock-inactive")
          ) {
            document
              .getElementById("CapsLock")
              .classList.replace("caps-lock-inactive", "caps-lock-active");
            document.querySelectorAll(".uppercasable-key").forEach((key) => {
              key.classList.add("upper");
            });
          } else {
            document
              .getElementById("CapsLock")
              .classList.replace("caps-lock-active", "caps-lock-inactive");
            document.querySelectorAll(".uppercasable-key").forEach((key) => {
              key.classList.remove("upper");
            });
          }
        }

        if (event.code === "ShiftLeft" && !(event.altKey && event.shiftKey)) {
          if (
            document
              .getElementById("ShiftLeft")
              .classList.contains("lock-active")
          ) {
            keyElement.classList.replace("lock-active", "shift-lock-inactive");
            document.getElementById("`").innerHTML = "`";
            document.getElementById("1").innerHTML = "1";
            document.getElementById("2").innerHTML = "2";
            document.getElementById("3").innerHTML = "3";
            document.getElementById("4").innerHTML = "4";
            document.getElementById("5").innerHTML = "5";
            document.getElementById("6").innerHTML = "6";
            document.getElementById("7").innerHTML = "7";
            document.getElementById("8").innerHTML = "8";
            document.getElementById("9").innerHTML = "9";
            document.getElementById("0").innerHTML = "0";
            document.getElementById("-").innerHTML = "-";
            document.getElementById("=").innerHTML = "=";
          } else {
            keyElement.classList.replace("shift-lock-inactive", "lock-active");
            document.getElementById("`").innerHTML = "~";
            document.getElementById("1").innerHTML = "!";
            document.getElementById("2").innerHTML = "@";
            document.getElementById("3").innerHTML = "#";
            document.getElementById("4").innerHTML = "$";
            document.getElementById("5").innerHTML = "%";
            document.getElementById("6").innerHTML = "^";
            document.getElementById("7").innerHTML = "&";
            document.getElementById("8").innerHTML = "*";
            document.getElementById("9").innerHTML = "(";
            document.getElementById("0").innerHTML = ")";
            document.getElementById("-").innerHTML = "_";
            document.getElementById("=").innerHTML = "+";
          }
        }
      });

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    /*document.addEventListener('keydown', function(event) {
        if (event.code == "ControlLeft" && ("AltLeft")) {
            keyLayout = keyLayoutRus;
        }
      });*/
    return fragment;
  },
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});

function insertTextAtCursor(textarea, newText) {
  // Получаем текущую позицию курсора в тексте

  const position = textarea.selectionStart;

  // Получаем текст, который находится до позиции курсора
  const textBeforeCursor = textarea.value.slice(0, position);

  // Получаем текст, который находится после позиции курсора
  const textAfterCursor = textarea.value.slice(position);

  // Объединяем текст до курсора, новый текст и текст после курсора
  const newTextareaValue = textBeforeCursor + newText + textAfterCursor;

  // Обновляем значение textarea
  textarea.value = newTextareaValue;

  // Устанавливаем позицию курсора после добавленного текста
  textarea.selectionStart = position + newText.length;
  textarea.selectionEnd = position + newText.length;
}

document.addEventListener(
  "keydown",
  (event) => {
    let name = event.key;

    if (["Shift", "Control", "Alt"].indexOf(name) !== -1) {
      name = event.code;
    }
    console.log(name);
    document.getElementById(name).classList.add("button-active");

    if (event.code === "Tab") {
      const textarea = document.querySelector(".textarea");

      event.preventDefault();
      insertTextAtCursor(textarea, "\t");
    }

    if (event.altKey || event.shiftKey) {
      event.preventDefault();
    }

    if (event.altKey && event.shiftKey) {
      event.preventDefault();
      Keyboard.changeLanguage();
      console.log("changeLanguage");
    }
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

let keyboardLanguage = navigator.language;
console.log(keyboardLanguage);

//let startPosition = document.querySelector(".textarea").selectionStart;
//let endPosition = document.querySelector(".textarea").selectionEnd;

/*if(startPosition == endPosition){
    alert("The position of the cursor is (" + startPosition + "/" + document.querySelector("textarea").value.length + ")");
}else{
    alert("Selected text from ("+ startPosition +" to "+ endPosition + " of " + document.querySelector("textarea").value.length + ")");
}*/
