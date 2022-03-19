let key = 'KeyS'

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ key })
  console.log('installed')
})