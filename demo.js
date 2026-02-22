let step = 0;
let timer = null;

const steps = [...document.querySelectorAll('.step')];
const views = [...document.querySelectorAll('.view')];

function render() {
  steps.forEach((el, i) => el.classList.toggle('active', i === step));
  views.forEach((el) => el.classList.toggle('active', Number(el.dataset.view) === step));
}

function go(n) {
  step = Math.max(0, Math.min(3, n));
  render();
}

document.getElementById('btnNext').addEventListener('click', () => go(step + 1));
document.getElementById('btnBack').addEventListener('click', () => go(step - 1));

document.getElementById('btnReset').addEventListener('click', () => {
  if (timer) { clearInterval(timer); timer = null; }
  go(0);
});

document.getElementById('btnAuto').addEventListener('click', () => {
  if (timer) { clearInterval(timer); timer = null; return; }
  timer = setInterval(() => {
    if (step >= 3) { clearInterval(timer); timer = null; return; }
    go(step + 1);
  }, 1600);
});

render();
