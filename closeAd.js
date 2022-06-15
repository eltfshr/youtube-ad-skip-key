document.getElementsByTagName('body')[0].focus()
let sKey

chrome.storage.local.get("key", ({ key }) => {
  sKey = key
})

chrome.storage.onChanged.addListener(() => {
  chrome.storage.local.get("key", ({ key }) => {
    sKey = key
  })
})

document.addEventListener('keypress', (e) => {
  if (e.code != sKey) {
    return
  }

  let countDown = document.getElementsByClassName('ytp-ad-preview-container')[0] || null
  let pie = document.getElementsByClassName('ytp-ad-timed-pie-countdown-container')[0] || null
  let button

  if ((countDown && countDown.getAttribute('style').includes('display: none;')) || pie) {
    button = document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0] || null
  } else {
    button = document.getElementsByClassName('ytp-ad-overlay-close-container')[0] || null
  }

  if (document.querySelector('ytd-button-renderer#dismiss-button') && !document.querySelector('ytd-button-renderer#dismiss-button').parentElement.parentElement.parentElement.parentElement.getAttribute('style').includes('display: none;')) {
    button = document.querySelector('ytd-button-renderer#dismiss-button') || null
  }

  if (button && e.target.tagName != 'INPUT' && e.target.className != 'style-scope yt-formatted-string') {
    button.click()
  }
})