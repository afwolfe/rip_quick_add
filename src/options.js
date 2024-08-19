import {EN, LOCALES} from "./constants.js";

// Saves options to browser.storage
const saveOptions = () => {
  const lang = document.getElementById('lang').value;

  browser.storage.sync.set(
    { lang },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
const restoreOptions = () => {
  browser.storage.sync.get(
    { lang: EN },
    (items) => {
      document.getElementById('lang').value = items.lang;
    }
  );
};

const setLocalesOptions = () => {
  const langSelector = document.getElementById('lang');
  langSelector.innerHTML = '';

  Object.values(LOCALES).forEach(({ label, value }) => {
    const option = document.createElement('option');
    option.value = value;
    option.text = label;
    langSelector.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', setLocalesOptions);
document.addEventListener('DOMContentLoaded', restoreOptions);

document.getElementById('save').addEventListener('click', saveOptions);
