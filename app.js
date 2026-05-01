const modules = [
  {
    id: "caves",
    title: "Cave Paintings",
    image: "assets/placeholders/cave-paintings.svg",
    imageAlt: "Ochre animals and hand marks suggested on a dark cave wall.",
    imageCredit: "Placeholder image for Phase 1. Replace with properly licensed Lascaux or Chauvet imagery.",
    prompt: "What do you see?",
    choices: [
      {
        id: "primitive-beginning",
        label: "The first art of primitive people, reaching toward culture for the first time.",
        frameSupplied: "the primitive-beginning story",
        patternTags: ["clean-story", "progress", "distance"]
      },
      {
        id: "skilled-tradition",
        label: "A skilled visual tradition made by people whose minds were already fully human.",
        frameSupplied: "the Chesterton reversal",
        patternTags: ["continuity", "evidence-first", "skill"]
      },
      {
        id: "ritual-unknown",
        label: "A sacred or ritual image whose meaning is mostly unavailable to us.",
        frameSupplied: "the mystery frame",
        patternTags: ["uncertainty", "evidence-first", "restraint"]
      },
      {
        id: "hunting-tool",
        label: "A practical hunting image, made to track, teach, or prepare.",
        frameSupplied: "the practical-use frame",
        patternTags: ["material-life", "function", "evidence-first"]
      }
    ],
    inheritedFrame: "primitive man",
    alternativeReading:
      "The quieter reading is that the distance may be in our imagination, not theirs. The image can look early without being simple. The maker may be less a child at the beginning of culture than an adult in a different room of it.",
    anchorLine: "The evidence stayed still. The picture moved.",
    sources: [
      {
        title: "Phase 6 source note",
        url: "#",
        note: "Backfill with a short note on Paleolithic cave art, dating, interpretation, and Chesterton's reversal."
      }
    ]
  },
  {
    id: "west",
    title: "Wild West",
    image: "assets/placeholders/wild-west.svg",
    imageAlt: "A frontier town street, ledger marks, rail lines, and a low horizon.",
    imageCredit: "Placeholder image for Phase 1. Replace with public-domain town, labor, railroad, or homestead imagery.",
    prompt: "What do you see?",
    choices: [
      {
        id: "lawless-frontier",
        label: "A lawless frontier where civilization had not arrived yet.",
        frameSupplied: "the lawless-frontier picture",
        patternTags: ["clean-story", "order-from-chaos", "mythic-violence"]
      },
      {
        id: "working-landscape",
        label: "A working landscape of farms, railroads, paperwork, credit, labor, and ordinary rules.",
        frameSupplied: "the ordinary-working-life frame",
        patternTags: ["material-life", "continuity", "evidence-first"]
      },
      {
        id: "entertainment-stage",
        label: "A national stage where later entertainment made rare violence feel normal.",
        frameSupplied: "the myth-making frame",
        patternTags: ["public-memory", "clean-story", "performance"]
      },
      {
        id: "collision-zone",
        label: "A collision of law, business, Indigenous dispossession, migration, and force.",
        frameSupplied: "the collision-zone frame",
        patternTags: ["complexity", "material-life", "power"]
      }
    ],
    inheritedFrame: "the lawless frontier",
    alternativeReading:
      "The quieter record is ordinary in the useful way: wages, fences, court filings, freight schedules, family businesses, debt, weather, and paperwork. Later stories kept the gun smoke and misplaced the ledgers.",
    anchorLine: "The evidence stayed still. The picture moved.",
    sources: [
      {
        title: "Phase 6 source note",
        url: "#",
        note: "Backfill with notes on frontier courts, commerce, settlement records, dime novels, and Western film memory."
      }
    ]
  },
  {
    id: "wwii-memory",
    title: "WWII Contribution",
    image: "assets/placeholders/wwii-memory.svg",
    imageAlt: "A subdued chart, map grid, and archival document fragments about wartime memory.",
    imageCredit: "Placeholder image for Phase 1. Replace with licensed chart, survey, or archival public-domain material.",
    prompt: "What do you see?",
    choices: [
      {
        id: "settled-ledger",
        label: "A settled ledger: the war happened once, so the memory should stay fixed.",
        frameSupplied: "the fixed-event frame",
        patternTags: ["fixed-memory", "clean-story", "ledger"]
      },
      {
        id: "shifting-memory",
        label: "A public memory that changes with schooling, politics, cinema, family history, and national need.",
        frameSupplied: "the shifting-memory frame",
        patternTags: ["public-memory", "complexity", "identity"]
      },
      {
        id: "credit-contest",
        label: "A contest over credit, because victory became part of national identity.",
        frameSupplied: "the national-credit frame",
        patternTags: ["identity", "power", "public-memory"]
      },
      {
        id: "records-do-not-map",
        label: "A set of casualty, production, and battle records that do not map neatly onto gratitude.",
        frameSupplied: "the evidence-ledger frame",
        patternTags: ["evidence-first", "complexity", "restraint"]
      }
    ],
    inheritedFrame: "a fixed event",
    alternativeReading:
      "The event stayed fixed; the remembered proportion did not. Public memory is not the same object as the past. It is a living arrangement between evidence, identity, grief, gratitude, and whatever a country needs to tell itself next.",
    anchorLine: "The evidence stayed still. The picture moved.",
    sources: [
      {
        title: "Phase 6 source note",
        url: "#",
        note: "Backfill with survey history and a concise note on how national memory of wartime contribution changes over time."
      }
    ]
  },
  {
    id: "titanic",
    title: "Titanic",
    image: "assets/placeholders/titanic.svg",
    imageAlt: "A large ocean liner silhouette moving through dark water beneath a pale ice field.",
    imageCredit: "Placeholder image for Phase 1. Replace with public-domain Titanic imagery or licensed archival material.",
    prompt: "What do you see?",
    choices: [
      {
        id: "technical-disaster",
        label: "A technical maritime disaster: ice, speed, wireless warnings, lifeboat rules, and design tradeoffs.",
        frameSupplied: "the systems-and-regulation frame",
        patternTags: ["evidence-first", "systems", "material-life"]
      },
      {
        id: "hubris-punished",
        label: "A punishment story about human arrogance: the unsinkable ship humbled by nature.",
        frameSupplied: "the hubris story",
        patternTags: ["moral-drama", "clean-story", "warning"]
      },
      {
        id: "class-access",
        label: "A class story about who was believed, who had access, and who survived.",
        frameSupplied: "the class-and-access frame",
        patternTags: ["power", "material-life", "moral-drama"]
      },
      {
        id: "media-morality",
        label: "A media story that became a morality play because disaster needs a shape.",
        frameSupplied: "the media-myth frame",
        patternTags: ["public-memory", "moral-drama", "performance"]
      }
    ],
    inheritedFrame: "a moralized hubris story",
    alternativeReading:
      "The hubris version gives the event a clean moral. But the evidence is less sermon than system: regulations, class arrangements, commercial pressure, design assumptions, weather, warnings, response time, and the old human habit of believing the picture already in the room.",
    anchorLine: "The evidence stayed still. The picture moved.",
    sources: [
      {
        title: "Phase 6 source note",
        url: "#",
        note: "Backfill with notes on Titanic inquiries, lifeboat regulations, wireless warnings, class, and later cultural memory."
      }
    ]
  },
  {
    id: "renaissance",
    title: "Renaissance",
    image: "assets/placeholders/renaissance.svg",
    imageAlt: "Layered manuscripts, arches, trade lines, and a figure study in muted light.",
    imageCredit: "Placeholder image for Phase 1. Replace with public-domain manuscript, painting, or architectural imagery.",
    prompt: "What do you see?",
    choices: [
      {
        id: "clean-rebirth",
        label: "A clean rebirth after darkness, when Europe woke up again.",
        frameSupplied: "the clean-rebirth frame",
        patternTags: ["rupture", "clean-story", "progress"]
      },
      {
        id: "long-continuity",
        label: "A long continuity where medieval, Islamic, Byzantine, commercial, and classical threads met unevenly.",
        frameSupplied: "the continuity frame",
        patternTags: ["continuity", "complexity", "evidence-first"]
      },
      {
        id: "later-branding",
        label: "A branding story later ages used to organize taste, status, and period labels.",
        frameSupplied: "the period-label frame",
        patternTags: ["public-memory", "performance", "power"]
      },
      {
        id: "networked-boom",
        label: "A regional art and knowledge boom made possible by money, institutions, and networks.",
        frameSupplied: "the network-and-patronage frame",
        patternTags: ["material-life", "systems", "continuity"]
      }
    ],
    inheritedFrame: "a clean rebirth narrative",
    alternativeReading:
      "Rebirth is a powerful picture because it gives history a before and after. The quieter reading is less theatrical: continuity, recovery, translation, trade, patronage, institutions, rival cities, and old materials becoming newly useful.",
    anchorLine: "The evidence stayed still. The picture moved.",
    sources: [
      {
        title: "Phase 6 source note",
        url: "#",
        note: "Backfill with notes on periodization, medieval continuity, classical transmission, patronage, and Renaissance self-description."
      }
    ]
  }
];

const tagDescriptions = {
  "clean-story": "You often reached for the version with the cleanest story shape.",
  "evidence-first": "You often let the artifact resist the story being placed on top of it.",
  "public-memory": "You often noticed that memory is made after the event, not just during it.",
  "material-life": "You often looked for work, systems, institutions, and ordinary pressure.",
  continuity: "You often preferred slow continuity over sudden historical rupture.",
  complexity: "You often chose the reading that lets several causes remain in the room.",
  "moral-drama": "You often gave the evidence a moral shape.",
  power: "You often looked for who benefits, who is excluded, and who gets to name the story.",
  progress: "You often read the past as a climb from less to more.",
  rupture: "You often favored the clean break: before, after, and a bright line between them.",
  identity: "You often saw memory as something groups use to know who they are.",
  systems: "You often looked for rules, incentives, tools, and arrangements.",
  restraint: "You often left room for what the evidence cannot tell us.",
  performance: "You often noticed the stage on which history becomes legible.",
  skill: "You often saw craft before hierarchy.",
  distance: "You often felt the past as far away before asking how far it really is.",
  "order-from-chaos": "You often looked for civilization arriving to tame disorder.",
  "mythic-violence": "You often recognized violence as the easiest thing for memory to keep.",
  ledger: "You often expected memory to behave like an account book.",
  warning: "You often read disaster as instruction.",
  "fixed-memory": "You often treated memory as if it should remain stable once the facts are known.",
  function: "You often looked for what an image or object was meant to do."
};

const state = {
  view: "opening",
  moduleIndex: 0,
  screen: "evidence",
  selectedChoiceId: null,
  lockedChoices: {},
  holding: false,
  notesOpen: false
};

const app = document.querySelector("#app");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function currentModule() {
  return modules[state.moduleIndex];
}

function currentSelection(module = currentModule()) {
  const selectedId = state.lockedChoices[module.id] || state.selectedChoiceId;
  return module.choices.find((choice) => choice.id === selectedId) || null;
}

function screenLabel() {
  if (state.screen === "evidence") return "Evidence";
  if (state.screen === "choice") return "Choice";
  return "Reveal";
}

function setHash() {
  let hash = "#start";
  if (state.view === "module") {
    hash = `#${currentModule().id}/${state.screen}`;
  }
  if (state.view === "final") {
    hash = "#pattern";
  }

  if (window.location.hash !== hash) {
    history.replaceState(null, "", hash);
  }
}

function readHash() {
  const raw = window.location.hash.replace("#", "");
  if (!raw || raw === "start") return;
  if (raw === "pattern") {
    state.view = "final";
    return;
  }

  const [moduleId, screen] = raw.split("/");
  const moduleIndex = modules.findIndex((module) => module.id === moduleId);
  const allowedScreens = ["evidence", "choice", "reveal"];
  if (moduleIndex >= 0) {
    state.view = "module";
    state.moduleIndex = moduleIndex;
    state.screen = allowedScreens.includes(screen) ? screen : "evidence";
    state.selectedChoiceId = null;
  }
}

function renderTopbar() {
  if (state.view === "opening") return "";

  const completedCount = modules.filter((module) => state.lockedChoices[module.id]).length;
  const activeIndex = state.view === "final" ? modules.length : state.moduleIndex;

  return `
    <header class="topbar">
      <div class="progress" aria-label="Progress through the five rooms">
        <div class="room-label">
          ${state.view === "final" ? "Pattern" : `Room ${state.moduleIndex + 1} of ${modules.length}: ${escapeHtml(currentModule().title)}`}
        </div>
        <div class="track">
          ${modules
            .map((module, index) => {
              const className = [
                "track-step",
                index === activeIndex ? "is-active" : "",
                state.lockedChoices[module.id] ? "is-complete" : ""
              ]
                .filter(Boolean)
                .join(" ");
              return `<button class="${className}" type="button" data-room="${index}" aria-label="Go to ${escapeHtml(module.title)}"></button>`;
            })
            .join("")}
        </div>
      </div>
      <div class="room-label">${completedCount} of ${modules.length} choices locked</div>
    </header>
  `;
}

function renderOpening() {
  return `
    <main class="opening">
      <h1>What Do You See?</h1>
      <p>Five experiments in the stories we inherit.</p>
      <div class="button-row">
        <button class="button primary" type="button" data-action="begin">Begin</button>
      </div>
    </main>
  `;
}

function renderEvidence(module) {
  return `
    <section class="panel">
      <p class="prompt">${escapeHtml(module.prompt)}</p>
      <p class="body-copy">Stay with the image before the explanation arrives.</p>
      <div class="button-row">
        <button class="button primary" type="button" data-action="to-choice">Choose an interpretation</button>
      </div>
    </section>
  `;
}

function renderChoice(module) {
  const selectedId = state.selectedChoiceId || state.lockedChoices[module.id];
  const canLock = Boolean(selectedId) && !state.holding;

  return `
    <section class="panel">
      <p class="prompt">${escapeHtml(module.prompt)}</p>
      <div class="choice-list" role="radiogroup" aria-label="Interpretations">
        ${module.choices
          .map((choice, index) => {
            const selected = selectedId === choice.id;
            return `
              <button
                class="choice ${selected ? "is-selected" : ""}"
                type="button"
                role="radio"
                aria-checked="${selected ? "true" : "false"}"
                data-choice="${escapeHtml(choice.id)}"
              >
                <span class="sr-only">Choice ${index + 1}: </span>${escapeHtml(choice.label)}
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="button-row">
        <button class="button primary" type="button" data-action="lock" ${canLock ? "" : "disabled"}>
          ${state.holding ? "Holding..." : "Lock it in"}
        </button>
      </div>
    </section>
  `;
}

function renderSources(module) {
  if (!state.notesOpen) return "";

  return `
    <aside class="notes" aria-label="Source notes">
      <h2>Notes</h2>
      <ul class="source-list">
        ${module.sources
          .map(
            (source) => `
              <li>
                <a href="${escapeHtml(source.url)}">${escapeHtml(source.title)}</a>
                <span>${escapeHtml(source.note)}</span>
              </li>
            `
          )
          .join("")}
      </ul>
    </aside>
  `;
}

function renderReveal(module) {
  const selected = currentSelection(module);
  const suppliedFrame = selected ? selected.frameSupplied : "an unrecorded frame";
  const isLast = state.moduleIndex === modules.length - 1;

  return `
    <section class="panel">
      <p class="reveal-kicker">You supplied ${escapeHtml(suppliedFrame)}.</p>
      <p class="reveal-frame">The inherited picture in this room is ${escapeHtml(module.inheritedFrame)}.</p>
      <p class="body-copy">${escapeHtml(module.alternativeReading)}</p>
      <p class="anchor">${escapeHtml(module.anchorLine)}</p>
      <div class="button-row">
        <button class="notes-toggle" type="button" data-action="toggle-notes">
          ${state.notesOpen ? "Close notes" : "Notes"}
        </button>
        <button class="button primary" type="button" data-action="${isLast ? "to-final" : "next-room"}">
          ${isLast ? "See your pattern" : "Next room"}
        </button>
      </div>
      ${renderSources(module)}
    </section>
  `;
}

function renderRoom() {
  const module = currentModule();
  const screen = state.screen === "choice"
    ? renderChoice(module)
    : state.screen === "reveal"
      ? renderReveal(module)
      : renderEvidence(module);

  return `
    <main class="room">
      <div class="room-heading">
        <h1>${escapeHtml(module.title)}</h1>
        <div class="screen-name">${screenLabel()}</div>
      </div>
      <div class="room-body">
        <figure class="evidence">
          <img src="${escapeHtml(module.image)}" alt="${escapeHtml(module.imageAlt)}">
          <figcaption class="caption">${escapeHtml(module.imageCredit)}</figcaption>
        </figure>
        ${screen}
      </div>
    </main>
  `;
}

function summarizePattern() {
  const chosen = modules
    .map((module) => {
      const choiceId = state.lockedChoices[module.id];
      const choice = module.choices.find((item) => item.id === choiceId);
      return choice ? { module, choice } : null;
    })
    .filter(Boolean);

  const tagCounts = chosen.reduce((counts, { choice }) => {
    choice.patternTags.forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
    return counts;
  }, {});

  const sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag]) => tag);

  const topDescriptions = sortedTags
    .slice(0, 2)
    .map((tag) => tagDescriptions[tag])
    .filter(Boolean);

  if (!topDescriptions.length) {
    return "Your choices made a pattern, even before they made an argument.";
  }

  return `${topDescriptions.join(" ")} That is not a flaw. It is the picture becoming visible.`;
}

function renderFinal() {
  const complete = modules.every((module) => state.lockedChoices[module.id]);

  if (!complete) {
    return `
      <main class="closing">
        <h1>Not quite yet.</h1>
        <p>The pattern only works after all five rooms have an answer.</p>
        <div class="button-row">
          <button class="button primary" type="button" data-action="resume">Return to the rooms</button>
        </div>
      </main>
    `;
  }

  return `
    <main class="closing">
      <div class="pattern">
        <h2>Your pattern</h2>
        <div class="pattern-grid">
          ${modules
            .map((module) => {
              const choice = module.choices.find((item) => item.id === state.lockedChoices[module.id]);
              return `
                <article class="pattern-item">
                  <strong>${escapeHtml(module.title)}</strong>
                  <p>${escapeHtml(choice.label)}</p>
                </article>
              `;
            })
            .join("")}
        </div>
        <p class="pattern-summary">${escapeHtml(summarizePattern())}</p>
      </div>
      <h1>We inherit pictures, not the past.</h1>
      <p>Sometimes the picture is stronger than the evidence.</p>
      <a class="substack-link" href="#" aria-label="Substack link placeholder">Substack</a>
    </main>
  `;
}

function render() {
  setHash();
  const content = state.view === "opening"
    ? renderOpening()
    : state.view === "final"
      ? renderFinal()
      : renderRoom();

  app.innerHTML = `
    <div class="shell">
      ${renderTopbar()}
      <div class="stage">${content}</div>
    </div>
  `;
}

function begin() {
  state.view = "module";
  state.moduleIndex = 0;
  state.screen = "evidence";
  state.selectedChoiceId = null;
  state.notesOpen = false;
  render();
}

function goToRoom(index) {
  if (index < 0 || index >= modules.length) return;
  state.view = "module";
  state.moduleIndex = index;
  state.screen = state.lockedChoices[modules[index].id] ? "reveal" : "evidence";
  state.selectedChoiceId = null;
  state.notesOpen = false;
  render();
}

function lockChoice() {
  const module = currentModule();
  if (!state.selectedChoiceId || state.holding) return;

  state.holding = true;
  render();

  window.setTimeout(() => {
    state.lockedChoices[module.id] = state.selectedChoiceId;
    state.holding = false;
    state.screen = "reveal";
    state.notesOpen = false;
    render();
  }, 1000);
}

function nextRoom() {
  if (state.moduleIndex >= modules.length - 1) {
    state.view = "final";
  } else {
    state.moduleIndex += 1;
    state.screen = "evidence";
    state.selectedChoiceId = null;
    state.notesOpen = false;
  }
  render();
}

function resume() {
  const firstIncomplete = modules.findIndex((module) => !state.lockedChoices[module.id]);
  goToRoom(firstIncomplete >= 0 ? firstIncomplete : 0);
}

app.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  const choiceTarget = event.target.closest("[data-choice]");
  const roomTarget = event.target.closest("[data-room]");

  if (choiceTarget && !state.holding) {
    state.selectedChoiceId = choiceTarget.dataset.choice;
    render();
    return;
  }

  if (roomTarget) {
    goToRoom(Number(roomTarget.dataset.room));
    return;
  }

  if (!actionTarget) return;

  const action = actionTarget.dataset.action;
  if (action === "begin") begin();
  if (action === "to-choice") {
    state.screen = "choice";
    state.selectedChoiceId = state.lockedChoices[currentModule().id] || null;
    render();
  }
  if (action === "lock") lockChoice();
  if (action === "toggle-notes") {
    state.notesOpen = !state.notesOpen;
    render();
  }
  if (action === "next-room") nextRoom();
  if (action === "to-final") {
    state.view = "final";
    render();
  }
  if (action === "resume") resume();
});

document.addEventListener("keydown", (event) => {
  if (state.view !== "module" || state.screen !== "choice" || state.holding) return;

  const module = currentModule();
  const currentIndex = module.choices.findIndex((choice) => choice.id === state.selectedChoiceId);

  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    event.preventDefault();
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % module.choices.length;
    state.selectedChoiceId = module.choices[nextIndex].id;
    render();
  }

  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    event.preventDefault();
    const nextIndex = currentIndex <= 0 ? module.choices.length - 1 : currentIndex - 1;
    state.selectedChoiceId = module.choices[nextIndex].id;
    render();
  }

  if (event.key === "Enter" && state.selectedChoiceId) {
    event.preventDefault();
    lockChoice();
  }
});

window.addEventListener("hashchange", () => {
  readHash();
  render();
});

readHash();
render();
