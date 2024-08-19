import {createEventUrl} from './helpers.js'

function quickAdd(text, lang) {
  const url = createEventUrl(text, lang);

  if (url) {
    browser.tabs.create({url});
  } else {
    document.getElementById('error').textContent = 'Could not parse time data from input';
  }
}

document.getElementById('add').addEventListener('click', async (e) => {
  const input = document.getElementById('input').value;
  const storage = await browser.storage.sync.get()
  const lang = storage.lang

  quickAdd(input, lang);
});

document.querySelector('#go-to-options').addEventListener('click', function () {
  if (browser.runtime.openOptionsPage) {
    browser.runtime.openOptionsPage();
  } else {
    window.open(browser.runtime.getURL('options.html'));
  }
});
