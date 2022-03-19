let input = document.getElementById('input')

chrome.storage.sync.get("key", ({ key }) => {
  processKey(key)
})

input.addEventListener('keypress', (e) => {
  input.blur()
  let key = e.code
  processKey(key)
  chrome.storage.sync.set({ key })
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
    default:
      input.setAttribute('placeholder', key.charAt(key.length - 1))
  }
}