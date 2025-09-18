const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('my-button');
  if (btn) {
    btn.addEventListener('click', () => {
      console.log('[renderer] sending open-menu');
      ipcRenderer.send('open-menu');
    });
  } else {
    console.error('Button not found!');
  }
});
