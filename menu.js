const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      console.log('[renderer] sending back-to-main');
      ipcRenderer.send('back-to-main');
    });
  } else {
    console.error('Button #backBtn not found');
  }

  const btnEating = document.getElementById('btn__eating');
  if (btnEating) {
    btnEating.addEventListener('click', () => {
      console.log('[renderer] sending eating');
      ipcRenderer.send('eating');
    });
  } else {
    console.error('Button #btn__eating not found');
  }

  const btnMakeASelfie = document.getElementById('btn__make-a-selfie');
  if (btnMakeASelfie) {
    btnMakeASelfie.addEventListener('click', () => {
      console.log('[renderer] sending make-a-selfie');
      ipcRenderer.send('make-a-selfie');
    });
  } else {
    console.error('Button #btn__make-a-selfie not found');
  }

  const btnSleeping = document.getElementById('btn__sleeping');
  if (btnSleeping) {
    btnSleeping.addEventListener('click', () => {
      console.log('[renderer] sending sleeping');
      ipcRenderer.send('sleeping');
    });
  } else {
    console.error('Button #btn__sleeping not found');
  }

  const btnGiftAFlower = document.getElementById('btn__gift-a-flower');
  if (btnGiftAFlower) {
    btnGiftAFlower.addEventListener('click', () => {
      console.log('[renderer] sending gift-a-flower');
      ipcRenderer.send('gift-a-flower');
    });
  } else {
    console.error('Button #btn__gift-a-flower not found');
  }
});