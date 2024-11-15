let key = 'KeyZ'

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason == 'install') {
    chrome.storage.local.set({ key })
    console.log('installed')
  }
})