document.getElementsByTagName('body')[0].focus()
let sKey

chrome.storage.sync.get("key", ({ key }) => {
  sKey = key
})

chrome.storage.onChanged.addListener(() => {
  chrome.storage.sync.get("key", ({ key }) => {
    sKey = key
  })
})

document.addEventListener('keypress', (e) => {
  if (e.code != sKey) {
    return
  }

  let countDown = document.getElementsByClassName('ytp-ad-preview-container countdown-next-to-thumbnail')[0]
  let button

  if (countDown && countDown.getAttribute('style') == 'display: none;') {
    button = document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0] || null
  } else {
    button = document.getElementsByClassName('ytp-ad-overlay-close-container')[0] || null
  }

  if (button && e.target.tagName != 'INPUT' && e.target.className != 'style-scope yt-formatted-string') {
    button.click()
  }
})