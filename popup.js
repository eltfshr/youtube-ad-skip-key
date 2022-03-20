let input = document.getElementById('input')

chrome.storage.local.get("key", ({ key }) => {
  processKey(key)
})

input.addEventListener('keypress', (e) => {
  input.blur()
  let key = e.code
  processKey(key)
  chrome.storage.local.set({ key })
})

function processKey(key) {
  switch (key) {
    case 'Minus':
      input.setAttribute('placeholder', '-')
      break;
    case 'Equal':
      input.setAttribute('placeholder', '=')
      break;
    case 'BracketLeft':
      input.setAttribute('placeholder', '[')
      break;
    case 'BracketRight':
      input.setAttribute('placeholder', ']')
      break;
    case 'Semicolon':
      input.setAttribute('placeholder', ';')
      break;
    case 'Quote':
      input.setAttribute('placeholder', "'")
      break;
    case 'Comma':
      input.setAttribute('placeholder', ',')
      break;
    case 'Period':
      input.setAttribute('placeholder', '.')
      break;
    case 'Slash':
      input.setAttribute('placeholder', '/')
      break;
    case 'Backslash':
      input.setAttribute('placeholder', '\\')
      break;
    case 'Enter':
      input.setAttribute('placeholder', 'En')
      break;
    case 'Space':
      input.setAttribute('placeholder', 'SB')
      break;
    case 'Backquote':
      input.setAttribute('placeholder', '~')
      break;
    case 'NumpadSubtract':
      input.setAttribute('placeholder', 'N-')
      break;
    case 'NumpadMultiply':
      input.setAttribute('placeholder', 'N*')
      break;
    case 'NumpadDivide':
      input.setAttribute('placeholder', 'N/')
      break;
    case 'NumpadAdd':
      input.setAttribute('placeholder', 'N+')
      break;
    case 'NumpadEnter':
      input.setAttribute('placeholder', 'NE')
      break;
    case 'NumpadDecimal':
      input.setAttribute('placeholder', "N.")
      break;
    case 'Numpad0':
      input.setAttribute('placeholder', 'N0')
      break;
    case 'Numpad1':
      input.setAttribute('placeholder', 'N1')
      break;
    case 'Numpad2':
      input.setAttribute('placeholder', 'N2')
      break;
    case 'Numpad3':
      input.setAttribute('placeholder', 'N3')
      break;
    case 'Numpad4':
      input.setAttribute('placeholder', 'N4')
      break;
    case 'Numpad5':
      input.setAttribute('placeholder', 'N5')
      break;
    case 'Numpad6':
      input.setAttribute('placeholder', 'N6')
      break;
    case 'Numpad7':
      input.setAttribute('placeholder', 'N7')
      break;
    case 'Numpad8':
      input.setAttribute('placeholder', 'N8')
      break;
    case 'Numpad9':
      input.setAttribute('placeholder', 'N9')
      break;
    default:
      input.setAttribute('placeholder', key.charAt(key.length - 1))
  }
}