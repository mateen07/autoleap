// AutoLeap AI CRM Case Study — Slide Web App

const slides = [
  {
    "title": "The Autonomous CRM",
    "subtitle": "From “Marketing Tool” To “Revenue Partner”",
    "tag": "Vision",
    "kicker": "AutoLeap turns repair history into timely, compliant, personalized outreach that converts into booked appointments.",
    "sections": [
      {
        "type": "grid2",
        "cards": [
          {
            "h3": "Today",
            "p": "• Manual and inconsistent follow-ups\n• Missed deferred work + empty bays"
          },
          {
            "h3": "Tomorrow",
            "p": "• AI-guided follow-up will lead to higher reactivation and more booked jobs\n• Less owner effort with AI-assisted workflows\n• Higher revenue"
          }
        ]
      }
    ],
    "bullets": [
    ],
    "chips": [
    ]
  },
  {
    "title": "Problem & Jobs-to-be-Done (JTBD)",
    "subtitle": "Sending messages isn’t the hard part. Following up at the right time is.",
    "tag": "Customer",
    "kicker": "Busy shops lose revenue when follow-up doesn’t happen at the right time, or doesn’t happen at all.",
    "sections": [
      {
        "type": "card",
        "h3": "Top Jobs-to-be-Done",
        "p": "• Remind customers about previously recommended work without hunting through past invoices.\n• Remind the right customer at the right time without annoying everyone.\n• Make messages sound human and on-brand without writing them.\n• Prove outreach worked: did it lead to booked work and revenue?"
      },
      {
        "type": "card",
        "h3": "Pain Points",
        "p": "• Follow-up is inconsistent — it happens when someone remembers\n• Messages are generic — low response, higher opt-outs\n• No learning loop — results don’t improve over time"
      }
    ],
    "bullets": [],
    "chips": [
    ]
  },
  {
    "title": "What Autopilot Needs and how we de-risk it",
    "subtitle": "What we’re counting on, what we’ll validate fast, and how we’ll ship with imperfect data.",
    "tag": "Data",
    "kicker": "We start with clear data hypotheses, validate gaps in two weeks, and ship with fallbacks so we’re never blocked.",
    "sections": [
      {
        "type": "card",
        "h3": "What we can use right away",
        "p": "• Customer contact + consent status\n• Repair history\n• Vehicle details"
      },
      {
        "type": "card",
        "h3": "What we validate in 2 weeks",
        "p": "• Is deferred/declined work captured reliably?\n• How often is mileage recorded?\n• Can we tie outreach → booking → revenue?"
      },
      {
        "type": "card",
        "h3": "How we ship without perfect data",
        "p": "• No mileage → Time-based triggers\n• No deferred → One-click “Declined”\n• No attribution → Tracked booking link"
      }
    ],
    "bullets": [],
    "chips": [
    ]
  },
  {
    "title": "Market Gap & Differentiation",
    "subtitle": "Most CRMs send reminders. We drive booked work increasing revenue.",
    "tag": "Strategy",
    "kicker": "Shops already have campaigns, reminders, and texting. The gap is a system that decides who to contact, when, and why, and then proves it created bookings.",
    "sections": [
      {
        "type": "card",
        "h3": "What exists today",
        "p": "1) Campaigns + automated reminders + deferred/declined follow-ups\n2) Online booking + reminders + reviews + marketing dashboards\n3) Two-way messaging + bulk outreach"
      },
      {
        "type": "card",
        "h3": "Our differentiation: Capacity-Aware Revenue Orchestration",
        "p": "1) We fill schedule gaps (slow days, open bays, cancellations)\n2) We pull forward the right work mix (high-likelihood, service-relevant)\n3) Convert replies to appointments: fewer dead-ends between message and booking"
      }
    ],
    "bullets": ["Inputs: open bays + overdue/deferred services + past visit patterns → Output: Top 25 customers to fill Tuesday’s open slots."],
    "chips": [
    ]
  },
  {
    "title": "What We’re Building (Product Pillars)",
    "subtitle": "The capabilities that make capacity-aware orchestration real.",
    "tag": "Product",
    "kicker": "These pillars let AutoLeap fill open bays intelligently: detect available capacity, pick the right customers/services, communicate safely, and prove what worked.",
    "sections": [
      {
        "type": "card",
        "h3": "Pillar 1: Shop + Customer Data Foundation",
        "p": "1) Unify customer, vehicle, RO/invoice, estimate, and appointment data\n2) Standardize services into a simple taxonomy (oil, brakes, tires, etc.)\n3) Capture “declined/deferred” work reliably"
      },
      {
        "type": "card",
        "h3": "Pillar 2: Capacity + Recommendation Engine",
        "p": "1) Detect schedule gaps (open bays, slow days, cancellations)\n2) Rank customers by likelihood + relevance + value\n3) Recommend the “right work mix” based on capacity and service context"
      },
      {
        "type": "card",
        "h3": "Pillar 3: Orchestration + Guardrails",
        "p": "1) Trigger outreach when it helps the schedule\n2) Follow up on the schedule\n3) Tone/brand settings so messages still feel like the shop"
      },
      {
        "type": "card",
        "h3": "Pillar 4: Measurement + Learning Loop",
        "p": "1) Track: outreach → replies/clicks → bookings → revenue\n2) Use results to tune timing, targeting, and recommended offers\n 3) Learn and improve the system"
      }
    ],
    "bullets": [],
    "chips": [
    ]
  },
  {
    "title": "Success Metrics",
    "subtitle": "Win = More booked jobs completed successfully",
    "tag": "Metrics",
    "kicker": "We optimize for incremental booked appointments while keeping opt-outs and complaints low.",
    "sections": [
      {
        "type": "card",
        "h3": "North Star",
        "p": "Incremental booked appointments attributable to outreach"
      },
      {
        "type": "card",
        "h3": "Leading indicators",
        "p": "Booking conversion rate • Deferred-work recovery • Engagement with outreach"
      },
      {
        "type": "card",
        "h3": "Business outcomes",
        "p": "Filled capacity • Order value uplift • Owner hours saved"
      },
      {
        "type": "card",
        "h3": "Guardrails",
        "p": "Less Opt-out rate • Fewer complaints"
      }
    ],
    "bullets": [],
    "chips": [
    ]
  },
  {
    "title": "Incremental Delivery Plan",
    "subtitle": "From Human‑In‑The‑Loop to Autonomy",
    "tag": "Roadmap",
    "kicker": "We sequence delivery to build toward capacity‑aware orchestration by de‑risking trust → proof → autonomy.",
    "sections": [
      {
        "type": "card",
        "h3": "Phase 1 (MVP): Guided Messaging (4–6 weeks)",
        "p": "Goal: save time + establish trust + measurement baseline\n• AI drafting + rewrite with tone presets (owner in control)\n• Basic targeting (lapsed, recent, high-value)\n• Tracking foundation (message → click/reply → booking tag)"
      },
      {
        "type": "card",
        "h3": "Phase 2 (Major Launch): Capacity‑Aware Orchestration (6–10 weeks)",
        "p": "Goal: fill open bays intelligently (the game-changer)\n• Capacity-aware pull-forward: “Top customers to fill Tuesday”\n• High-signal triggers (declined work, reactivation)\n• Proof: incremental bookings measurement"
      },
      {
        "type": "card",
        "h3": "Phase 3 (Future): Autonomous Scheduling",
        "p": "Goal: reduce friction from interest → scheduled\n• Two-way AI-led conversation (questions, reschedules, confirmations)\n• Capacity-aware booking + escalation rules\n• Full visibility into AI actions"
      }
    ],
    "bullets": [],
    "chips": [
    ]
  },
  {
    "title": "Rationale of Delivery Plan",
    "subtitle": "De-risking the fastest path to impact.",
    "tag": "Plan",
    "kicker": "We ship in this order so we don’t bet the roadmap on perfect data or blind automation.",
    "sections": [
      {
        "type": "card",
        "h3": "Why this order",
        "p": "• Phase 1 builds trust and a baseline\n• Phase 2 proves ROI by filling open bays\n• Phase 3 focuses to scale autonomy for maximum value"
      },
      {
        "type": "card",
        "h3": "How we ship fast with a small team and AI ",
        "p": "• Designer: guided workflows + trust controls (approvals, previews, limits) + reusable templates\n• Dev (Messaging & guardrails): send pipeline, consent/opt-out, quiet hours, frequency limits\n• Dev (Signals & taxonomy): normalize service line items, capture declined/deferred work, detect open bays\n• Dev (Orchestration & proof): “Top 25 to fill Tuesday” logic, attribution, dashboard\n\nHow AI accelerates delivery:\n• LLM for drafting\n• LLM for repair context + smart scheduling \n• Intent AI for replies\n• AI-assisted dev (code/tests/SQL + instrumentation)"
      }
    ],
    "bullets": [],
    "chips": [
    ]
  },
  {
    "title": "Risks, Guardrails  & Rollout",
    "subtitle": "Scale automation with guardrails",
    "tag": "Delivery",
    "kicker": "We protect customer experience, deliverability, and compliance as first-class product requirements.",
    "sections": [
      {
        "type": "card",
        "h3": "Key risks",
        "p": "Wrong timing /Over-messaging /irrelevant outreach → opt‑outs + trust loss\nAutomation mistakes → wrong booking, operational disruption"
      },
      {
        "type": "card",
        "h3": "Guardrails",
        "p": "Consent + opt‑out logging\nFrequency caps + quiet hours + suppression lists\nHuman-guided approval modes\nKill switch + anomaly detection\nContent safety rules"
      },
      {
        "type": "card",
        "h3": "Rollout plan",
        "p": "Beta (20 shops): validate value & guardrails stability\nExpand (100 shops): refine orchestration rules\nScale: broader release with autonomy levels by shop maturity"
      }
    ],
    "bullets": [
      "Ship value in weeks, prove ROI with attribution, and earn autonomy responsibly."
    ],
    "chips": [
    ]
  }
]

const $ = (sel) => document.querySelector(sel);
const stage = $('#stage');
const toc = $('#toc');
const overview = $('#overview');
const counter = $('#counter');
const barFill = $('#barFill');

let idx = 0;

function mdInline(text) {
  // Minimal markdown: **bold** and line breaks.
  return String(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />');
}

function renderSections(s) {
  if (!s.sections || !s.sections.length) return '';

  const grid2 = s.sections.find(x => x.type === 'grid2');
  let out = '';
  if (grid2 && grid2.cards) {
    out += '<div class="grid2">' + grid2.cards.map(c => `
      <div class="card">
        <h3>${c.h3}</h3>
        <p>${mdInline(c.p)}</p>
      </div>
    `).join('') + '</div>';
  }

  const cards = s.sections.filter(x => x.type === 'card');
  if (cards.length) {
    out += '<div class="grid2">' + cards.map(c => `
      <div class="card">
        <h3>${c.h3}</h3>
        <p>${mdInline(c.p)}</p>
      </div>
    `).join('') + '</div>';
  }

  return out;
}

function renderBullets(s) {
  if (!s.bullets || !s.bullets.length) return '';
  return '<ul class="bullets">' + s.bullets.map(b => `<li>${mdInline(b)}</li>`).join('') + '</ul>';
}

function renderChips(s) {
  if (!s.chips || !s.chips.length) return '';
  return '<div class="footerStrip">' + s.chips.map(c => `<span class="chip">${c}</span>`).join('') + '</div>';
}

function renderMedia(s) {
  if (!s.media) return '';
  const m = s.media;
  if (m.type === 'img') {
    return `<div class="media"><img src="${m.src}" alt="${m.alt || ''}" /></div>`;
  }
  if (m.type === 'svg') {
    return `<div class="media"><object type="image/svg+xml" data="${m.src}" aria-label="${m.alt || ''}"></object></div>`;
  }
  return '';
}

function renderSlide(i) {
  idx = Math.max(0, Math.min(slides.length - 1, i));
  const s = slides[idx];

  const el = document.createElement('article');
  el.className = 'slide';
  el.innerHTML = `
    <div class="slideHeader">
      <div class="hgroup">
        <h1>${s.title}</h1>
        <h2>${s.subtitle}</h2>
      </div>
      <div class="tag"><span class="pill"></span> ${s.tag}</div>
    </div>

    <div class="kicker">${mdInline(s.kicker || '')}</div>

    ${renderSections(s)}
    ${renderBullets(s)}
    ${renderChips(s)}
    ${renderMedia(s)}
  `;

  stage.innerHTML = '';
  stage.appendChild(el);

  [...toc.querySelectorAll('button')].forEach((b, bi) => b.setAttribute('aria-current', bi === idx ? 'true' : 'false'));

  counter.textContent = `${idx + 1}/${slides.length}`;
  const pct = ((idx + 1) / slides.length) * 100;
  barFill.style.width = `${pct}%`;

  history.replaceState(null, '', `#${idx + 1}`);
}

function renderTOC() {
  toc.innerHTML = '';
  slides.forEach((s, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerHTML = `<span class="n">${String(i+1).padStart(2,'0')}</span><span class="t">${s.title}</span>`;
    btn.addEventListener('click', () => renderSlide(i));
    btn.setAttribute('aria-current', i === idx ? 'true' : 'false');
    li.appendChild(btn);
    toc.appendChild(li);
  });
}

function renderOverview() {
  const grid = document.createElement('div');
  grid.className = 'overviewGrid';
  slides.forEach((s, i) => {
    const c = document.createElement('div');
    c.className = 'overviewCard';
    c.innerHTML = `<h4>${i+1}. ${s.title}</h4><p>${s.subtitle}</p>`;
    c.addEventListener('click', () => {
      toggleOverview(false);
      renderSlide(i);
    });
    grid.appendChild(c);
  });
  overview.innerHTML = '';
  overview.appendChild(grid);
}

function toggleOverview(force) {
  const shouldShow = typeof force === 'boolean' ? force : overview.hidden;
  overview.hidden = !shouldShow;
  if (shouldShow) renderOverview();
}

function next() { renderSlide(idx + 1); }
function prev() { renderSlide(idx - 1); }

$('#btnNext').addEventListener('click', next);
$('#btnPrev').addEventListener('click', prev);
$('#btnOverview').addEventListener('click', () => toggleOverview());
$('#btnFullscreen').addEventListener('click', () => {
  const el = document.documentElement;
  if (!document.fullscreenElement) el.requestFullscreen?.();
  else document.exitFullscreen?.();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); next(); }
  else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
  else if (e.key.toLowerCase() === 'o') { e.preventDefault(); toggleOverview(); }
  else if (e.key.toLowerCase() === 'f') { e.preventDefault(); $('#btnFullscreen').click(); }
  else if (e.key === 'Home') { e.preventDefault(); renderSlide(0); }
  else if (e.key === 'End') { e.preventDefault(); renderSlide(slides.length - 1); }
  else if (e.key === '?') { e.preventDefault(); $('#help').showModal(); }
  else if (e.key === 'Escape') { if (!overview.hidden) toggleOverview(false); }
});

function initFromHash() {
  const m = location.hash.match(/^#(\d+)$/);
  if (m) {
    const n = parseInt(m[1], 10);
    if (!isNaN(n)) idx = Math.min(slides.length - 1, Math.max(0, n - 1));
  }
}

initFromHash();
renderTOC();
renderSlide(idx);
