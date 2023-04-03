let refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),    
};

let colorChanger = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      bodyBGColorChanger();
    }, 1000);

    refs.startBtn.disabled = true;
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.startBtn.disabled = false;
  },
};

refs.startBtn.addEventListener('click', () => {
  colorChanger.start();
});

refs.stopBtn.addEventListener('click', () => {
  colorChanger.stop();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function bodyBGColorChanger() {
    refs.body.style.backgroundColor = getRandomHexColor();    
}
