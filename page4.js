const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('backButton2');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      console.log('[renderer] sending back-to-main-from-page4');
      ipcRenderer.send('back-to-main-from-page4');
    });
  } else {
    console.error('Button #backButton2 not found');
  }
});

const _PRG = document.getElementById('p');
const _OUT = document.querySelector('output[for="p"]');
const K = 5, TMAX = K * _PRG.max;

function load(t = 0) {
  if (t <= TMAX) {
    if (t % K === 0) {
      _OUT.value = _PRG.value = t / K;
    }
    requestAnimationFrame(load.bind(this, t + (Math.random() > 0.5 ? 1 : 0)));
  }
};

load();