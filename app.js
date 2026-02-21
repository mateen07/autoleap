// AutoLeap AI CRM Case Study — Slide Web App
// No external dependencies.

const slides = [
  {
    "title": "The Autonomous Service Advisor",
    "subtitle": "From “Marketing Tool” → “Revenue Partner”",
    "tag": "Vision",
    "kicker": "AutoLeap turns repair history into timely, compliant, personalized outreach that converts into booked appointments.",
    "sections": [
      {
        "type": "grid2",
        "cards": [
          {
            "h3": "Today",
            "p": "Manual, inconsistent follow-up → missed deferred work + empty bays"
          },
          {
            "h3": "Tomorrow",
            "p": "AI-guided follow-up → higher reactivation + more booked jobs, with owner control"
          }
        ]
      }
    ],
    "bullets": [
      "**More booked appointments** from deferred work + lapsed customers",
      "**Less owner effort** (minutes, not hours) with AI-assisted workflows",
      "**Trust-first autonomy** with clear controls and safety rails"
    ],
    "chips": [
      "Revenue partner",
      "More booked jobs",
      "Vision"
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
      "Deferred work",
      "Lapsed customers",
      "Time-poor owners",
      "No learning loop"
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
      "Audit",
      "Coverage score",
      "Fallbacks",
      "De-risking"
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
      "Next Best Action",
      "Attribution",
      "Learning loop"
    ]
  },
  {
    "title": "What We’re Building (Product Pillars)",
    "subtitle": "Capabilities that create compounding advantage",
    "tag": "Product",
    "kicker": "We build four pillars: data foundation, recommendation engine, guardrails, and measurement.",
    "sections": [
      {
        "type": "card",
        "h3": "Pillar 1: Data foundation & taxonomy",
        "p": "Normalize invoice/estimate line items into a service taxonomy. Capture deferred work consistently."
      },
      {
        "type": "card",
        "h3": "Pillar 2: Next Best Action engine",
        "p": "Rules-first for speed, ML later for accuracy. Output: customer + recommended service + reason + timing."
      },
      {
        "type": "card",
        "h3": "Pillar 3: Messaging + compliance + control",
        "p": "Consent, opt-out, logging, quiet hours, frequency caps. Approval modes (draft-only → auto-send with limits)."
      },
      {
        "type": "card",
        "h3": "Pillar 4: Measurement & experimentation",
        "p": "Track send → reply/click → booking → revenue. Holdout tests to measure incremental lift."
      }
    ],
    "bullets": [],
    "chips": [
      "Rules-first",
      "Guardrails",
      "Experimentation"
    ]
  },
  {
    "title": "Success Metrics",
    "subtitle": "Win = incremental booked appointments without burning trust",
    "tag": "Metrics",
    "kicker": "We measure true incremental impact and protect deliverability and customer trust.",
    "sections": [
      {
        "type": "card",
        "h3": "North Star",
        "p": "Incremental booked appointments attributable to outreach"
      },
      {
        "type": "card",
        "h3": "Leading indicators",
        "p": "Reactivation rate • Deferred-work recovery • Booking conversion • Time-to-book"
      },
      {
        "type": "card",
        "h3": "Business outcomes",
        "p": "Bay utilization • AOV uplift • Owner hours saved"
      },
      {
        "type": "card",
        "h3": "Guardrails (non-negotiable)",
        "p": "Opt-out rate • Complaint/spam flags • Deliverability health • Negative review mentions"
      }
    ],
    "bullets": [],
    "chips": [
      "North Star",
      "Guardrails"
    ]
  },
  {
    "title": "Incremental Delivery Plan",
    "subtitle": "Copilot → Autopilot → Autonomy (tied to trust & data maturity)",
    "tag": "Roadmap",
    "kicker": "We ship value in weeks, prove ROI, then earn automation safely.",
    "sections": [
      {
        "type": "card",
        "h3": "Phase 1 (MVP): AI Copilot + instrumentation",
        "p": "Goal: save time + establish voice + baseline metrics.\nDelivers: one-click draft/rewrite, tone presets, compliant templates, basic segmentation, tracking."
      },
      {
        "type": "card",
        "h3": "Phase 2 (Major Launch): Autopilot triggers + deferred work recovery",
        "p": "Goal: measurable revenue engine.\nDelivers: trigger engine (declined estimates, lapsed customers, seasonal), recommendations (rules-first), attribution + holdouts."
      },
      {
        "type": "card",
        "h3": "Phase 3 (Future): Conversational booking + capacity-aware scheduling",
        "p": "Goal: reduce friction from interest to scheduled.\nDelivers: 2-way SMS scheduling, calendar-aware booking, escalation to staff, learning from outcomes."
      }
    ],
    "bullets": [],
    "chips": [
      "MVP",
      "Major launch",
      "Future"
    ]
  },
  {
    "title": "Why This Sequence",
    "subtitle": "We de-risk in the order that kills AI products: trust → compliance → data → autonomy",
    "tag": "Plan",
    "kicker": "Phase 1 earns trust and lays measurement foundations; Phase 2 is the game-changing revenue engine; Phase 3 adds operational autonomy.",
    "sections": [
      {
        "type": "card",
        "h3": "Why Phase 1 first",
        "p": "Fast value with minimal data dependency. Builds trust in AI voice & controls. Establishes baseline + instrumentation."
      },
      {
        "type": "card",
        "h3": "Why Phase 2 is the game-changer",
        "p": "Shifts from content generation to outcome optimization. Triggers + targeting + attribution create measurable ROI."
      },
      {
        "type": "card",
        "h3": "Resourcing (3 devs + 1 designer)",
        "p": "Designer: Copilot UX + controls.\nDev A: messaging + consent + logging.\nDev B: taxonomy + triggers + segmentation.\nDev C: AI integration + analytics/experiments."
      },
      {
        "type": "card",
        "h3": "Moat",
        "p": "Not the LLM. The moat is repair-context data + conversion feedback loop + tuning based on outcomes."
      }
    ],
    "bullets": [],
    "chips": [
      "De-risking",
      "Moat"
    ]
  },
  {
    "title": "Risks, Mitigations & Rollout",
    "subtitle": "How we avoid ‘automated spam’ and build trust at scale",
    "tag": "Delivery",
    "kicker": "We protect customer experience, deliverability, and compliance as first-class product requirements.",
    "sections": [
      {
        "type": "card",
        "h3": "Key risks",
        "p": "Incorrect recommendations reduce trust.\nOver-messaging increases opt-outs and harms deliverability.\nCompliance exposure.\nUnsafe phrasing without evidence."
      },
      {
        "type": "card",
        "h3": "Mitigations",
        "p": "Default approval mode; earn autopilot with thresholds.\nFrequency caps + quiet hours + suppression lists.\nExplainability: “why we’re reaching out”.\nKill switch + anomaly detection.\nContent safety rules."
      },
      {
        "type": "card",
        "h3": "Rollout plan",
        "p": "Beta: 20 shops → validate lift & guardrails.\nExpand: 100 shops → refine triggers and controls.\nGA: tiered autonomy settings by shop maturity."
      }
    ],
    "bullets": [
      "Ship value in weeks, prove ROI with attribution, and earn autonomy responsibly."
    ],
    "chips": [
      "Beta→GA",
      "Safety"
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
