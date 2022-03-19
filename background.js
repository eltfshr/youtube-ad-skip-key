let key = 'KeyS'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ key })
  console.log('installed')
})