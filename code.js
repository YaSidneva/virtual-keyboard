/* eslint-disable semi */
class Key {
  constructor (value, eventCode, upperCasable = true, eventKey = value) {
    this.eventKey = eventKey;
    this.eventCode = eventCode;
    this.value = value;
    this.upperCasable = upperCasable;
  }
}

const keyLayoutEng = [
  new Key('`', 'Backquote', false),
  new Key('1', 'Digit1', false),
  new Key('2', 'Digit2', false),
  new Key('3', 'Digit3', false),
  new Key('4', 'Digit4', false),
  new Key('5', 'Digit5', false),
  new Key('6', 'Digit6', false),
  new Key('7', 'Digit7', false),
  new Key('8', 'Digit8', false),
  new Key('9', 'Digit9', false),
  new Key('0', 'Digit0', false),
  new Key('-', 'Minus', false),
  new Key('=', 'Equal', false),
  new Key('Backspace', 'Backspace', false),
  new Key('Tab', 'Tab', false),
  new Key('q', 'KeyQ'),
  new Key('w', 'KeyW'),
  new Key('e', 'KeyE'),
  new Key('r', 'KeyR'),
  new Key('t', 'KeyT'),
  new Key('y', 'KeyY'),
  new Key('u', 'KeyU'),
  new Key('i', 'KeyI'),
  new Key('o', 'KeyO'),
  new Key('p', 'KeyP'),
  new Key('[', 'BracketLeft', false),
  new Key(']', 'BracketRight', false),
  new Key('\\', 'Backslash', false),
  new Key('DEL', 'Delete', false, 'Delete'),
  new Key('Caps Lock', 'CapsLock', false, 'CapsLock'),
  new Key('a', 'KeyA'),
  new Key('s', 'KeyS'),
  new Key('d', 'KeyD'),
  new Key('f', 'KeyF'),
  new Key('g', 'KeyG'),
  new Key('h', 'KeyH'),
  new Key('j', 'KeyJ'),
  new Key('k', 'KeyK'),
  new Key('l', 'KeyL'),
  new Key(';', 'Semicolon', false),
  new Key("'", 'Quote', false),
  new Key('Enter', 'Enter', false),
  new Key('Shift', 'ShiftLeft', false, 'ShiftLeft'),
  new Key('\\', 'IntlBackslash', false),
  new Key('z', 'KeyZ'),
  new Key('x', 'KeyX'),
  new Key('c', 'KeyC'),
  new Key('v', 'KeyV'),
  new Key('b', 'KeyB'),
  new Key('n', 'KeyN'),
  new Key('m', 'KeyM'),
  new Key('.', 'Comma', false),
  new Key(',', 'Period', false),
  new Key('/', 'Slash', false),
  new Key('↑', 'ArrowUp', false, 'ArrowUp'),
  new Key('shift', 'ShiftRight', false, 'ShiftRight'),
  new Key('Ctrl', 'ControlLeft', false, 'ControlLeft'),
  new Key('Win', 'MetaLeft', false, 'Meta'),
  new Key('Alt', 'AltLeft', false, 'AltLeft'),
  new Key('Space', 'Space', false, ' '),
  new Key('Alt', 'AltRight', false, 'AltRight'),
  new Key('Ctrl', 'ControlRight', false, 'ControlRight'),
  new Key('←', 'ArrowLeft', false, 'ArrowLeft'),
  new Key('↓', 'ArrowDown', false, 'ArrowDown'),
  new Key('→', 'ArrowRight', false, 'ArrowRight')
];

const keyLayoutRus = [
  new Key('`', 'Backquote'),
  new Key('1', 'Digit1', false),
  new Key('2', 'Digit2', false),
  new Key('3', 'Digit3', false),
  new Key('4', 'Digit4', false),
  new Key('5', 'Digit5', false),
  new Key('6', 'Digit6', false),
  new Key('7', 'Digit7', false),
  new Key('8', 'Digit8', false),
  new Key('9', 'Digit9', false),
  new Key('0', 'Digit0', false),
  new Key('-', 'Minus', false),
  new Key('=', 'Equal', false),
  new Key('Backspace', 'Backspace', false),
  new Key('Tab', 'Tab', false),
  new Key('й', 'KeyQ'),
  new Key('ц', 'KeyW'),
  new Key('у', 'KeyE'),
  new Key('к', 'KeyR'),
  new Key('е', 'KeyT'),
  new Key('н', 'KeyY'),
  new Key('г', 'KeyU'),
  new Key('ш', 'KeyI'),
  new Key('щ', 'KeyO'),
  new Key('з', 'KeyP'),
  new Key('х', 'BracketLeft'),
  new Key('ъ', 'BracketRight'),
  new Key('\\', 'Backslash', false),
  new Key('DEL', 'Delete', false, 'Delete'),
  new Key('Caps Lock', 'CapsLock', false, 'CapsLock'),
  new Key('ф', 'KeyA'),
  new Key('ы', 'KeyS'),
  new Key('в', 'KeyD'),
  new Key('а', 'KeyF'),
  new Key('п', 'KeyG'),
  new Key('р', 'KeyH'),
  new Key('о', 'KeyJ'),
  new Key('л', 'KeyK'),
  new Key('д', 'KeyL'),
  new Key('ж', 'Semicolon'),
  new Key('э', 'Quote'),
  new Key('Enter', 'Enter', false),
  new Key('Shift', 'ShiftLeft', false, 'ShiftLeft'),
  new Key('\\', 'IntlBackslash', false),
  new Key('я', 'KeyZ'),
  new Key('ч', 'KeyX'),
  new Key('с', 'KeyC'),
  new Key('м', 'KeyV'),
  new Key('и', 'KeyB'),
  new Key('т', 'KeyN'),
  new Key('ь', 'KeyM'),
  new Key('б', 'Comma'),
  new Key('ю', 'Period'),
  new Key('/', 'Slash', false),
  new Key('↑', 'ArrowUp', false),
  new Key('shift', 'ShiftRight', false, 'ShiftRight'),
  new Key('Ctrl', 'ControlLeft', false, 'ControlLeft'),
  new Key('Win', 'MetaLeft', false, 'Meta'),
  new Key('Alt', 'AltLeft', false, 'AltLeft'),
  new Key('Space', 'Space', false, ' '),
  new Key('Alt', 'AltRight', false, 'AltRight'),
  new Key('Ctrl', 'ControlRight', false, 'ControlRight'),
  new Key('←', 'ArrowLeft', false),
  new Key('↓', 'ArrowRight', false),
  new Key('→', 'ArrowDown', false)
];

let eng = 'English';

const Keyboard = {
  init () {
    // Create textatea
    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    document.body.appendChild(textarea);

    // create keyboard area
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    document.body.appendChild(keyboard);
    const savedValue = localStorage.getItem('lang');
    if (savedValue !== undefined) {
      console.log(savedValue);
      eng = savedValue;
    }
    const currentLanguage = eng === 'English' ? keyLayoutEng : keyLayoutRus;

    console.log(currentLanguage);
    keyboard.appendChild(this._createKeys(currentLanguage));

    const description = document.createElement('div');
    description.style.textAlign = 'center';
    document.body.appendChild(description);

    const os = document.createElement('p');
    os.innerHTML = 'Клавиатура создана в операционной системе Windows';
    description.appendChild(os);

    const placeholder = document.createElement('p');
    placeholder.innerHTML =
      'Для переключения языка комбинация: левыe alt + shift';
    description.appendChild(placeholder);
  },

  changeLanguage () {
    const keyboard = document.querySelector('.keyboard');
    eng = eng === 'English' ? 'Russian' : 'English';
    localStorage.setItem('lang', eng);
    const currentLanguage = eng === 'English' ? keyLayoutEng : keyLayoutRus;
    keyboard.replaceChildren(this._createKeys(currentLanguage));
  },

  // create keys
  _createKeys (keyLayout) {
    console.log(keyLayout);
    const fragment = document.createDocumentFragment();
    const textarea = document.querySelector('.textarea');

    document.addEventListener('click', function () {
      textarea.focus(); // устанавливаем фокус на textarea
    });

    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak =
        ['Backspace', 'DEL', 'Enter', 'shift', '→'].indexOf(key.value) !== -1;

      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('key');

      keyElement.innerHTML = key.value;
      keyElement.id = key.eventCode;

      textarea.focus();

      switch (key.value) {
        case 'Backspace':
          keyElement.classList.add('key-caps-shift-back');
          keyElement.addEventListener('click', () => {
            const chars = textarea.value.split('');
            chars.pop();
            textarea.value = chars.join('');
          });
          break;

        case 'DEL':
          keyElement.addEventListener('click', () => {
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

        case 'Enter':
          keyElement.classList.add('key-enter');
          keyElement.innerHTML = 'ENTER';
          keyElement.addEventListener('click', () => {
            insertTextAtCursor(textarea, '\n');
          });
          break;

        case 'Space':
          keyElement.classList.add('key-space');
          keyElement.innerHTML = '';

          keyElement.addEventListener('click', () => {
            insertTextAtCursor(textarea, ' ');
          });
          break;

        case 'Caps Lock':
          keyElement.classList.add('key-caps-shift-back');
          keyElement.innerHTML = 'Caps Lock';
          keyElement.classList.add('caps-lock-inactive');
          keyElement.addEventListener('click', () => {
            if (keyElement.classList.contains('lock-active')) {
              keyElement.classList.replace('lock-active', 'caps-lock-inactive');
              document.querySelectorAll('.uppercasable-key').forEach((key) => {
                key.classList.remove('upper');
              });
            } else {
              keyElement.classList.replace('caps-lock-inactive', 'lock-active');
              document.querySelectorAll('.uppercasable-key').forEach((key) => {
                key.classList.add('upper');
              });
            }
          });

          break;

        case 'Shift':
          keyElement.classList.add('key-caps-shift-back');
          keyElement.innerHTML = 'Shift';
          keyElement.classList.add('shift-lock-inactive');
          keyElement.addEventListener('click', () => {
            if (keyElement.classList.contains('lock-active')) {
              keyElement.classList.replace(
                'lock-active',
                'shift-lock-inactive'
              );
              document.getElementById('Backquote').innerHTML = '`';
              document.getElementById('Digit1').innerHTML = '1';
              document.getElementById('Digit2').innerHTML = '2';
              document.getElementById('Digit3').innerHTML = '3';
              document.getElementById('Digit4').innerHTML = '4';
              document.getElementById('Digit5').innerHTML = '5';
              document.getElementById('Digit6').innerHTML = '6';
              document.getElementById('Digit7').innerHTML = '7';
              document.getElementById('Digit8').innerHTML = '8';
              document.getElementById('Digit9').innerHTML = '9';
              document.getElementById('Digit0').innerHTML = '0';
              document.getElementById('Minus').innerHTML = '-';
              document.getElementById('Equal').innerHTML = '=';
            } else {
              keyElement.classList.replace(
                'shift-lock-inactive',
                'lock-active'
              );
              document.getElementById('Backquote').innerHTML = '~';
              document.getElementById('Digit1').innerHTML = '!';
              document.getElementById('Digit2').innerHTML = '@';
              document.getElementById('Digit3').innerHTML = '#';
              document.getElementById('Digit4').innerHTML = '$';
              document.getElementById('Digit5').innerHTML = '%';
              document.getElementById('Digit6').innerHTML = '^';
              document.getElementById('Digit7').innerHTML = '&';
              document.getElementById('Digit8').innerHTML = '*';
              document.getElementById('Digit9').innerHTML = '(';
              document.getElementById('Digit0').innerHTML = ')';
              document.getElementById('Minus').innerHTML = '_';
              document.getElementById('Equal').innerHTML = '+';
            }
          });
          break;

        case 'Tab':
          keyElement.classList.add('key-tab');
          keyElement.innerHTML = 'Tab';
          keyElement.addEventListener('click', () => {
            insertTextAtCursor(textarea, '\t');
          });

          break;

        case 'Ctrl':
          keyElement.classList.add('key-ctrl');
          keyElement.innerHTML = 'Ctrl';
          keyElement.addEventListener('click', () => {
            insertTextAtCursor(textarea, '');
          });
          break;

        case 'Alt':
          keyElement.addEventListener('click', () => {
            insertTextAtCursor(textarea, '');
          });
          break;

        case 'Win':
          keyElement.addEventListener('click', () => {
            insertTextAtCursor(textarea, '');
          });
          break;

        default:
          keyElement.textContent = key.value;
          if (key.upperCasable) {
            keyElement.classList.add('uppercasable-key');
          }
          keyElement.addEventListener('click', () => {
            insertTextAtCursor(textarea, keyElement.innerText);
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });
    return fragment;
  }
};

window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});

function insertTextAtCursor (textarea, newText) {
  const position = textarea.selectionStart;
  const textBeforeCursor = textarea.value.slice(0, position);
  const textAfterCursor = textarea.value.slice(position);
  const newTextareaValue = textBeforeCursor + newText + textAfterCursor;

  textarea.value = newTextareaValue;

  textarea.selectionStart = position + newText.length;
  textarea.selectionEnd = position + newText.length;
}

document.addEventListener(
  'keydown',
  (event) => {
    const name = event.code;
    document.getElementById(name).classList.add('button-active');
    if (event.code === 'CapsLock') {
      if (
        document
          .getElementById('CapsLock')
          .classList.contains('caps-lock-inactive')
      ) {
        document
          .getElementById('CapsLock')
          .classList.replace('caps-lock-inactive', 'lock-active');
        document.querySelectorAll('.uppercasable-key').forEach((key) => {
          key.classList.add('upper');
        });
      } else {
        document
          .getElementById('CapsLock')
          .classList.replace('lock-active', 'caps-lock-inactive');
        document.querySelectorAll('.uppercasable-key').forEach((key) => {
          key.classList.remove('upper');
        });
      }
    }

    if (event.code === 'Tab') {
      const textarea = document.querySelector('.textarea');

      event.preventDefault();
      insertTextAtCursor(textarea, '\t');
    }

    if (event.altKey && event.shiftKey) {
      event.preventDefault();
      Keyboard.changeLanguage();
    }

    if (event.shiftKey && !event.altKey) {
      const keyElement = document
        .getElementById(event.code);
      if (keyElement.classList.contains('lock-active')) {
        keyElement.classList.replace('lock-active', 'shift-lock-inactive');
        document.getElementById('Backquote').innerHTML = '`';
        document.getElementById('Digit1').innerHTML = '1';
        document.getElementById('Digit2').innerHTML = '2';
        document.getElementById('Digit3').innerHTML = '3';
        document.getElementById('Digit4').innerHTML = '4';
        document.getElementById('Digit5').innerHTML = '5';
        document.getElementById('Digit6').innerHTML = '6';
        document.getElementById('Digit7').innerHTML = '7';
        document.getElementById('Digit8').innerHTML = '8';
        document.getElementById('Digit9').innerHTML = '9';
        document.getElementById('Digit0').innerHTML = '0';
        document.getElementById('Minus').innerHTML = '-';
        document.getElementById('Equal').innerHTML = '=';
      } else {
        keyElement.classList.replace('shift-lock-inactive', 'lock-active');
        document.getElementById('Backquote').innerHTML = '~';
        document.getElementById('Digit1').innerHTML = '!';
        document.getElementById('Digit2').innerHTML = '@';
        document.getElementById('Digit3').innerHTML = '#';
        document.getElementById('Digit4').innerHTML = '$';
        document.getElementById('Digit5').innerHTML = '%';
        document.getElementById('Digit6').innerHTML = '^';
        document.getElementById('Digit7').innerHTML = '&';
        document.getElementById('Digit8').innerHTML = '*';
        document.getElementById('Digit9').innerHTML = '(';
        document.getElementById('Digit0').innerHTML = ')';
        document.getElementById('Minus').innerHTML = '_';
        document.getElementById('Equal').innerHTML = '+';
      }
    }
  },
  false
);
document.addEventListener(
  'keyup',
  (event) => {
    const name = event.code;
    document.getElementById(name).classList.remove('button-active');
  },
  false
);
