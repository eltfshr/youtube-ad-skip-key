document.getElementsByTagName('body')[0].focus()
let sKey = "KeyZ"

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

  // countDown here is the 5 seconds countdown to skip
  let countDown = document.querySelectorAll('div[class*="preview"][class*="ad"]:not([class*="player"])')[0] || null

  // pie is the upper right circle pie
  let pie = document.querySelectorAll('div[class*="pie"][class*="countdown"]')[0] || null
  // survey is the multiple choices about brands
  let survey = document.querySelectorAll('div[class*="survey"]')[0] || null
  let button

  // close youtube premium ads
  let premium = document.querySelector('yt-button-renderer[id*="dismiss"][id*="button"]') || document.querySelector('ytp-button-renderer[id*="dismiss"][id*="button"]') || document.querySelector('ytd-button-renderer[id*="dismiss"][id*="button"]') || null

  // bottom overlay square
  button = document.querySelectorAll('button[class*="overlay"][class*="ad"][class*="close"]')[0] || document.getElementsByClassName('ytp-ad-overlay-close-container')[0] || null

  let isButtonReady = document.querySelectorAll('button[class*="skip"][class*="ad"]')[0] && ((document.querySelectorAll('button[class*="skip"][class*="ad"]')[0].getAttribute('style') && document.querySelectorAll('button[class*="skip"][class*="ad"]')[0].getAttribute('style').match(/display.*none/g) === null) || !(document.querySelectorAll('button[class*="skip"][class*="ad"]')[0].getAttribute('style')))

  if ((countDown && (countDown.getAttribute('style').match(/display.*none/g)) !== null) || pie || survey || isButtonReady) { // normal skip ad
    button = document.querySelectorAll('button[class*="skip"][class*="ad"]')[0] || document.querySelectorAll('[id^="skip-button"]')[1].childNodes[0].childNodes[0] || null
  }

  if (premium && !(premium.parentElement.parentElement.parentElement.parentElement.getAttribute('style').match(/display.*none/g) !== null)) {
    button = premium || null
  }

  // skip ad if focus is not on input boxes
  if (button && e.target.tagName != 'INPUT' && e.target.className.match(/style.*scope.*formatted.*string/g) === null) {
    button.click()
    button.focus()
  }
})