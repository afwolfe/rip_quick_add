import {createEventUrl} from './helpers.js'

async function quickAdd(text, lang) {
  const url = createEventUrl(text, lang);

  if (url) {
    browser.tabs.create({url});
  }
}

browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: 'id',
    title: 'Add to calendar: “%s”',
    contexts: ['selection'],
  });
});

browser.contextMenus.onClicked.addListener(async (info) => {
  const storage = await browser.storage.sync.get()
  const lang = storage.lang
  quickAdd(info.selectionText, lang)
});

