let step = 0;
let timer = null;

const stepEls = [...document.querySelectorAll('.step')];
const viewEls = [...document.querySelectorAll('.view')];

function render() {
  // Left: highlight selected step
  stepEls.forEach((el, i) => el.classList.toggle('active', i === step));

  // Right: show the matching view
  viewEls.forEach((el) => el.classList.toggle('active', Number(el.dataset.view) === step));
}

function go(n) {
  step = Math.max(0, Math.min(viewEls.length - 1, n));
  render();
}

function stopAutoPlay() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

// Buttons (if you have them)
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');
const btnReset = document.getElementById('btnReset');
const btnAuto = document.getElementById('btnAuto'); // your "Play Demo" button

btnNext?.addEventListener('click', () => { stopAutoPlay(); go(step + 1); });
btnBack?.addEventListener('click', () => { stopAutoPlay(); go(step - 1); });
btnReset?.addEventListener('click', () => { stopAutoPlay(); go(0); });

// Auto-play toggle
btnAuto?.addEventListener('click', () => {
  if (timer) { stopAutoPlay(); return; }
  timer = setInterval(() => {
    if (step >= viewEls.length - 1) { stopAutoPlay(); return; }
    go(step + 1);
  }, 1600);
});

/** ✅ Clickable stepper items */
stepEls.forEach((el) => {
  // Add accessibility semantics (no HTML edits needed)
  el.setAttribute('role', 'button');
  el.setAttribute('tabindex', '0');

  const index = Number(el.dataset.step);

  // Mouse click
  el.addEventListener('click', () => {
    stopAutoPlay();
    go(index);
  });

  // Keyboard: Enter / Space
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      stopAutoPlay();
      go(index);
    }
  });
});

// Optional: init from URL hash like #step-2
(function initFromHash() {
  const m = location.hash.match(/^#step-(\d+)$/);
  if (m) {
    const n = parseInt(m[1], 10);
    if (!isNaN(n)) step = Math.max(0, Math.min(viewEls.length - 1, n));
  }
})();

render();
