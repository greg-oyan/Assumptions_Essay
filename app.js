const fallbackImage = "assets/placeholders/cave-paintings.svg";

const modules = [
  {
    id: "caves",
    title: "Cave Paintings",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Lascaux_painting.jpg",
      fallback: "assets/placeholders/cave-paintings.svg",
      alt: "Large animal figures painted on the wall at Lascaux.",
      title: "Lascaux cave painting",
      credit: "Wikimedia Commons",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lascaux_painting.jpg"
    },
    sections: [
      {
        title: "The picture you carry",
        body:
          "When most of us hear cave painting, we picture cavemen. Not just the painters, but the whole world they lived in. Rough people. Crude people. Humans at the very beginning of becoming what we are now."
      },
      {
        title: "What the record shows",
        body:
          "The people who made these paintings had human brains, human hands, and human skill. They made tools, cooked food, lived in groups, traded materials, buried their dead, and made art that took real practice. That does not prove they were gentle or noble. It just means the cartoon version is doing more work than the evidence."
      },
      {
        title: "What the picture leaves out",
        body:
          "We do not know their inner lives. We do not know what these paintings were for. We do not know whether this was hunting, ritual, teaching, memory, play, family, or something we no longer have categories for. Chesterton's nursery-wall idea matters because it breaks the spell. It does not prove the cave was a nursery. It asks why savage cave felt obvious before human home did."
      }
    ],
    closingLine: "The painting did not change. The people did not change. The picture did.",
    interaction: {
      type: "layers",
      intro:
        "The same evidence can receive more than one frame. None of these layers is presented as the answer.",
      layers: [
        {
          id: "hunters",
          label: "Hunters",
          caption: "A hunting frame turns the wall into practice, memory, pursuit, and animal knowledge.",
          annotations: [
            { x: 19, y: 42, label: "Animal movement" },
            { x: 38, y: 36, label: "Knowledge of bodies" },
            { x: 68, y: 54, label: "Practice before pursuit" }
          ]
        },
        {
          id: "family",
          label: "Family home",
          caption: "A home frame asks what changes if these are not crude marks, but images in a human place.",
          annotations: [
            { x: 27, y: 34, label: "Recognition and teaching" },
            { x: 52, y: 48, label: "A wall people returned to" },
            { x: 82, y: 30, label: "Presence, not distance" }
          ]
        },
        {
          id: "sacred",
          label: "Sacred space",
          caption: "A sacred frame turns the cave into a threshold, where image, animal, place, and ritual meet.",
          annotations: [
            { x: 14, y: 18, label: "A charged place" },
            { x: 56, y: 42, label: "Image as passage" },
            { x: 78, y: 66, label: "Meaning withheld" }
          ]
        }
      ]
    },
    sources: [
      {
        title: "Lascaux image file",
        url: "https://commons.wikimedia.org/wiki/File:Lascaux_painting.jpg",
        note: "Wikimedia Commons file page lists the image as public domain."
      },
      {
        title: "Lascaux dating overview",
        url: "https://archeologie.culture.gouv.fr/lascaux/en/dating-figures-lascaux",
        note: "French Ministry of Culture page on dating the figures at Lascaux."
      },
      {
        title: "Cave art overview",
        url: "https://www.britannica.com/art/cave-art",
        note: "General background on Upper Paleolithic cave art and interpretation."
      }
    ]
  },
  {
    id: "west",
    title: "Wild West",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Deadwood_1876a.jpg",
      fallback: "assets/placeholders/wild-west.svg",
      alt: "Deadwood, Dakota Territory, photographed from a hillside in 1876.",
      title: "Deadwood, Dakota Territory, 1876",
      credit: "Unknown author, Wikimedia Commons",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Deadwood_1876a.jpg"
    },
    sections: [
      {
        title: "The picture you carry",
        body:
          "Most of us picture the Wild West through movies. Dusty streets, saloons, gunfights, sheriffs, outlaws, and a town that could turn violent at any moment. The frontier becomes the place where civilization has not quite arrived yet."
      },
      {
        title: "What the record shows",
        body:
          "Some towns were violent. Some people were dangerous. But much of frontier life was ordinary work. Cattle, farms, freight, weather, debt, court records, local rules, and long stretches of boredom. Many towns had gun restrictions. The famous cattle-drive era was short. Many cowboys were young men doing hard, low-paid work."
      },
      {
        title: "What the picture leaves out",
        body:
          "Violence made the best stories, so violence became the picture. Dime novels, touring shows, advertising, and Hollywood did not invent the frontier, but they taught later generations how to imagine it. Gunfights survive in memory better than cattle prices, town ordinances, and paperwork."
      }
    ],
    closingLine: "The frontier did not change. The picture did.",
    interaction: {
      type: "provenance",
      intro:
        "Tap the image to reveal where this version of the West came from. Tap again to move to the next example.",
      items: [
        {
          id: "buffalo-bill",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Buffalo_Bill%27s_wild_west_and_congress_of_rough_riders_of_the_world_LCCN94513621.jpg",
            fallback: "assets/placeholders/wild-west.svg",
            alt: "A color lithograph poster for Buffalo Bill's Wild West and Congress of Rough Riders of the World.",
            title: "Buffalo Bill's Wild West poster",
            credit: "Library of Congress via Wikimedia Commons",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Buffalo_Bill%27s_wild_west_and_congress_of_rough_riders_of_the_world_LCCN94513621.jpg"
          },
          label: "The performed frontier",
          provenance: [
            "Source: Library of Congress poster for Buffalo Bill's Wild West and Congress of Rough Riders of the World.",
            "Year: 1899.",
            "Original purpose: advertising a touring spectacle that packaged frontier life as popular entertainment."
          ]
        },
        {
          id: "great-train",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/9b/The_Great_Train_Robbery_0017.jpg",
            fallback: "assets/placeholders/wild-west.svg",
            alt: "Screenshot from the 1903 film The Great Train Robbery.",
            title: "The Great Train Robbery",
            credit: "Edwin S. Porter, Wikimedia Commons",
            license: "Public domain in the United States",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Great_Train_Robbery_0017.jpg"
          },
          label: "The cinematic outlaw",
          provenance: [
            "Source: screenshot from The Great Train Robbery.",
            "Year: 1903.",
            "Original purpose: a staged motion-picture drama built around pursuit, crime, and violence."
          ]
        },
        {
          id: "deadwood",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Deadwood_1876a.jpg",
            fallback: "assets/placeholders/wild-west.svg",
            alt: "Deadwood, Dakota Territory, photographed from a hillside in 1876.",
            title: "Deadwood in 1876",
            credit: "Unknown author, Wikimedia Commons",
            license: "Public domain",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Deadwood_1876a.jpg"
          },
          label: "The historical town",
          provenance: [
            "Source: historical photograph of Deadwood, Dakota Territory.",
            "Year: 1876.",
            "Original context: documentary town view, not a later movie set or advertising image."
          ]
        }
      ]
    },
    sources: [
      {
        title: "Deadwood 1876 image file",
        url: "https://commons.wikimedia.org/wiki/File:Deadwood_1876a.jpg",
        note: "Wikimedia Commons file page lists the image as public domain."
      },
      {
        title: "Deadwood in 1876, National Archives record",
        url: "https://docsteach.org/document/deadwood-in-1876-general-view/",
        note: "National Archives DocsTeach record for a Deadwood 1876 town photograph, public domain."
      },
      {
        title: "Buffalo Bill's Wild West poster",
        url: "https://commons.wikimedia.org/wiki/File:Buffalo_Bill%27s_wild_west_and_congress_of_rough_riders_of_the_world_LCCN94513621.jpg",
        note: "Wikimedia Commons file page for an 1899 Library of Congress poster, public domain."
      },
      {
        title: "The Great Train Robbery still",
        url: "https://commons.wikimedia.org/wiki/File:The_Great_Train_Robbery_0017.jpg",
        note: "Wikimedia Commons file page for a screenshot from Edwin S. Porter's 1903 film."
      },
      {
        title: "Gun control in the Old West",
        url: "https://www.smithsonianmag.com/history/gun-control-old-west-180968013/",
        note: "Smithsonian Magazine summary of firearm restrictions in towns such as Tombstone."
      },
      {
        title: "Cowboys and cattle drives",
        url: "https://www.kansashistory.gov/kansapedia/cowboys/15597",
        note: "Kansas Historical Society overview of the 1866 to 1885 cattle-drive period."
      }
    ]
  },
  {
    id: "wwii-memory",
    title: "WWII Contribution",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Stalingrad_aftermath.jpg",
      fallback: "assets/placeholders/wwii-memory.svg",
      alt: "Ruins in Stalingrad after fighting during the Second World War.",
      title: "Stalingrad aftermath",
      credit: "Wikimedia Commons",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Stalingrad_aftermath.jpg"
    },
    sections: [
      {
        title: "The picture you carry",
        body:
          "Ask many Americans today who did the most to defeat Nazi Germany and the answer feels almost automatic. America. Maybe the Allies if they are being careful. The images are D-Day, GIs liberating villages, and the Greatest Generation."
      },
      {
        title: "What the record shows",
        body:
          "More than one story has real evidence behind it. The Soviet Union paid an almost unimaginable human cost and destroyed most of Germany's army on the Eastern Front. The United States supplied enormous industrial power, equipment, soldiers, and helped finish the war. Britain endured, fought, and held the line before America entered. None of these facts cancels the others."
      },
      {
        title: "What the picture leaves out",
        body:
          "Public memory has changed over time. Earlier postwar polling in France gave far more credit to the Soviet Union than people usually do now. Later, the Cold War, movies, textbooks, national memory, and politics changed the picture. The question of who won the war partly depends on what you measure, and partly on the generation and country answering it."
      }
    ],
    closingLine: "The war did not change. The memory did.",
    interaction: {
      type: "timeline",
      intro:
        "This is a French IFOP polling series, not a U.S. series. It is included because it shows how public memory can move while the event stays fixed.",
      note:
        "Sources vary by country and methodology. This chart is meant to show the direction of memory, not produce a perfect apples-to-apples polling series.",
      data: [
        { year: 1945, usa: 20, ussr: 57 },
        { year: 1994, usa: 49, ussr: 25 },
        { year: 2004, usa: 58, ussr: 20 },
        { year: 2014, usa: 49, ussr: 23 },
        { year: 2015, usa: 54, ussr: 23 }
      ]
    },
    sources: [
      {
        title: "Stalingrad aftermath image file",
        url: "https://commons.wikimedia.org/wiki/File:Stalingrad_aftermath.jpg",
        note: "Wikimedia Commons file page lists the image as public domain."
      },
      {
        title: "IFOP 2015 polling report",
        url: "https://www.ifop.com/wp-content/uploads/2018/03/3025-1-study_file.pdf",
        note: "IFOP poll of French respondents asking which nation contributed most to Germany's defeat in 1945."
      },
      {
        title: "Herodote summary of IFOP results",
        url: "https://www.herodote.net/histoire/synthese.php?ID=2566&ID_reac=-1&get_all=1&tout=1",
        note: "Summary reports 1945 and 2015 IFOP figures and discusses memory change."
      }
    ]
  },
  {
    id: "titanic",
    title: "Titanic",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/RMS_Titanic_3.jpg",
      fallback: "assets/placeholders/titanic.svg",
      alt: "RMS Titanic at sea.",
      title: "RMS Titanic",
      credit: "Francis Godolphin Osbourne Stuart via Wikimedia Commons",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:RMS_Titanic_3.jpg"
    },
    sections: [
      {
        title: "The picture you carry",
        body:
          "The Titanic story comes to us as a moral one. The unsinkable ship, brought down by human arrogance. Pride, then ice, then the sea. The disaster becomes a parable about hubris."
      },
      {
        title: "What the record shows",
        body:
          "The ship had too few lifeboats for everyone aboard, but it complied with the regulations of the time. Ice warnings were received, but such warnings were common on the route. The ship was moving fast, but not in a way that was obviously strange for the era. Weather and sea conditions made the iceberg harder to see."
      },
      {
        title: "What the picture leaves out",
        body:
          "The famous line about God not being able to sink the ship became powerful after the disaster, when people needed the event to mean something. The sinking was not only a morality play. It was also a chain of ordinary human decisions, outdated rules, class arrangements, assumptions, and bad luck. The moral story came later because disaster is hard to leave as disaster."
      }
    ],
    closingLine: "The ship did not change. The story did.",
    interaction: {
      type: "comparison",
      intro:
        "The public language around Titanic quickly became grief, shock, blame, and meaning. The inquiry language was colder because it had to be.",
      columns: [
        {
          title: "What people said after",
          kicker: "Newspaper framing",
          body:
            "April 1912 headlines called the loss unparalleled, counted famous names, followed grieving crowds, and pressed for more lifeboats. The story was already becoming an emotional object.",
          sourceTitle: "DALNET Titanic newspaper timeline",
          sourceUrl: "https://www.dalnet.org/titanic/datepages/april16.html"
        },
        {
          title: "What the inquiries found",
          kicker: "Regulation and procedure",
          body:
            "The official inquiries focused on lifeboat capacity, outdated rules, inspection certificates, wireless practice, crew training, speed, and ice warnings. The record was less like a sermon than a system failure.",
          sourceTitle: "Library of Congress law blog on Titanic lifeboat regulations",
          sourceUrl: "https://blogs.loc.gov/law/2012/04/failure-to-update-the-law-a-titanic-mistake/"
        }
      ]
    },
    sources: [
      {
        title: "RMS Titanic image file",
        url: "https://commons.wikimedia.org/wiki/File:RMS_Titanic_3.jpg",
        note: "Wikimedia Commons file page lists the image as public domain."
      },
      {
        title: "U.S. Senate final report page",
        url: "https://www.senate.gov/artandhistory/history/common/image/TitanicHearingReport.htm",
        note: "U.S. Senate Historical Office page for the final report of the Titanic hearings."
      },
      {
        title: "Titanic lifeboat regulations",
        url: "https://blogs.loc.gov/law/2012/04/failure-to-update-the-law-a-titanic-mistake/",
        note: "Library of Congress law blog summarizes the 1912 legal and inquiry record."
      },
      {
        title: "Titanic newspaper timeline",
        url: "https://www.dalnet.org/titanic/datepages/april16.html",
        note: "Detroit Area Library Network list of April 16, 1912 newspaper headlines."
      }
    ]
  },
  {
    id: "renaissance",
    title: "Renaissance",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Laurentius_de_Voltolina_001.jpg",
      fallback: "assets/placeholders/renaissance.svg",
      alt: "Medieval university lecture scene by Laurentius de Voltolina.",
      title: "Liber ethicorum des Henricus de Alemannia",
      credit: "Laurentius de Voltolina via Wikimedia Commons",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Laurentius_de_Voltolina_001.jpg"
    },
    sections: [
      {
        title: "The picture you carry",
        body:
          "The Renaissance is usually told as a clean break. First the Dark Ages, then light. Art, science, humanism, and Europe waking up after a long sleep."
      },
      {
        title: "What the record shows",
        body:
          "Medieval Europe already had universities, theology, trade, art, mathematics, engineering, and contact with classical and Islamic learning. Bologna, Paris, and Oxford were active well before the period most people call the Renaissance. Gothic cathedrals, scholastic philosophy, clocks, eyeglasses, Dante, Aquinas, and translation movements all complicate the darkness story."
      },
      {
        title: "What the picture leaves out",
        body:
          "The Renaissance was real, but it was slower and messier than the story suggests. Money, patrons, cities, trade, printing, recovered texts, and institutions all mattered. The label came later. Darkness, then light is easier to remember than gradual accumulation, so the cleaner picture survived."
      }
    ],
    closingLine: "The era did not change. The label did.",
    interaction: {
      type: "hiddenTimeline",
      intro:
        "The bar begins as a label. Open it and the supposed darkness fills with institutions, buildings, books, tools, and arguments.",
      label: "The Dark Ages",
      events: [
        { year: "1088", title: "University of Bologna", detail: "Conventionally treated as the founding year of the Studium of Bologna." },
        { year: "1096", title: "Oxford teaching", detail: "Teaching existed at Oxford in some form by this date." },
        { year: "around 1150", title: "University of Paris", detail: "Paris emerged from the cathedral school milieu as a major teaching corporation." },
        { year: "1163", title: "Notre-Dame begins", detail: "Construction of Notre-Dame de Paris begins in the twelfth century." },
        { year: "1265 to 1273", title: "Aquinas writes the Summa", detail: "Thomas Aquinas composes the Summa Theologiae." },
        { year: "late 1200s to 1300s", title: "Mechanical clocks", detail: "Mechanical clockmaking develops in Europe across the late medieval period." },
        { year: "around 1290", title: "Eyeglasses", detail: "The first eyeglasses are usually placed in northern or central Italy around this period." },
        { year: "1308 to 1321", title: "Dante writes the Comedy", detail: "Britannica dates Dante's poem to about 1308 to 1321." }
      ]
    },
    sources: [
      {
        title: "Medieval lecture image file",
        url: "https://commons.wikimedia.org/wiki/File:Laurentius_de_Voltolina_001.jpg",
        note: "Wikimedia Commons file page lists the image as public domain."
      },
      {
        title: "University of Bologna history",
        url: "https://www.unibo.it/en/university/who-we-are/our-history",
        note: "Official University of Bologna page describes 1088 as the conventional founding year."
      },
      {
        title: "Oxford history",
        url: "https://www.ox.ac.uk/about/organisation/history?wssl=1",
        note: "Official Oxford page says teaching existed by 1096 and developed rapidly from 1167."
      },
      {
        title: "Notre-Dame history",
        url: "https://notre-dame-de-paris.culture.gouv.fr/fr/le-monument",
        note: "Official Notre-Dame page gives 1163 to 1345 as the main construction span."
      },
      {
        title: "University of Paris context",
        url: "https://www.britannica.com/topic/education/Thomist-philosophy",
        note: "Britannica describes the University of Paris as coming formally into being sometime between 1150 and 1170."
      },
      {
        title: "Summa theologiae date",
        url: "https://www.britannica.com/topic/Summa-theologiae",
        note: "Britannica dates the Summa theologiae to about 1265 to 1273."
      },
      {
        title: "Early mechanical clocks",
        url: "https://www.metmuseum.org/art/collection/search/194107",
        note: "The Metropolitan Museum notes late thirteenth-century records of horologia and fourteenth-century mechanical clock survivals."
      },
      {
        title: "Eyeglasses history",
        url: "https://www.britannica.com/science/eyeglasses",
        note: "General source on the history of eyeglasses."
      },
      {
        title: "The Divine Comedy date",
        url: "https://www.britannica.com/topic/The-Divine-Comedy",
        note: "Britannica dates The Divine Comedy to about 1308 to 1321."
      }
    ]
  }
];

const finalPage = {
  heading: "What did you notice?",
  body: [
    "Five pictures. Five inherited stories. In each one, the familiar version was not stupid. It was just not the only way to arrange the evidence.",
    "The point was never that history is unknowable. The point is that the version of history in your head got there from somewhere. Books. Movies. School. Family. Church. Politics. The country and time you grew up in.",
    "The picture is not the past. It is a frame placed over the past, by people, for reasons.",
    "Once you can see the frame, you can ask where it came from."
  ],
  closingLines: [
    "We inherit pictures, not the past.",
    "Sometimes the picture is stronger than the evidence."
  ]
};

const substackUrl = "https://substack.com/";

const state = {
  activeModuleIndex: 0,
  caveLayer: "hunters",
  provenanceIndex: 0,
  revealedProvenance: {},
  wwiiPosition: 0,
  hiddenTimelineOpen: false
};

let initialHashHandled = false;

const app = document.querySelector("#app");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCover() {
  return `
    <section id="cover" class="cover">
      <div class="cover-inner">
        <p class="eyebrow">Five experiments in the stories we inherit</p>
        <h1>What Do You See?</h1>
        <div class="cover-copy">
          <p>I'm going to show you five pictures from history. For each one, I'll show you what the record says, what it does not settle, and where the picture in your head probably came from.</p>
          <p>The point isn't that you're wrong. The point is that the picture came from somewhere, and it's worth knowing where.</p>
        </div>
        <button class="button primary" type="button" data-action="go-to" data-target="caves">Begin</button>
      </div>
    </section>
  `;
}

function renderTopbar() {
  return `
    <header class="topbar" aria-label="Essay progress">
      <a class="topbar-title" href="#cover" data-action="go-to" data-target="cover">What Do You See?</a>
      <div class="progress" aria-label="Progress through essay sections">
        <div class="progress-label" data-progress-label>Section 1 of ${modules.length}: ${escapeHtml(modules[0].title)}</div>
        <div class="track" aria-label="Jump to a section">
          ${modules.map((module, index) => `
            <button
              class="track-step ${index === 0 ? "is-active" : ""}"
              type="button"
              data-action="go-to"
              data-target="${escapeHtml(module.id)}"
              data-progress-index="${index}"
              aria-label="Go to ${escapeHtml(module.title)}"
            ></button>
          `).join("")}
        </div>
      </div>
    </header>
  `;
}

function renderImage(image, className = "hero-figure") {
  return `
    <figure class="${className}">
      <img
        src="${escapeHtml(image.url)}"
        data-fallback="${escapeHtml(image.fallback || fallbackImage)}"
        alt="${escapeHtml(image.alt)}"
        loading="lazy"
      >
      <figcaption>
        <a href="${escapeHtml(image.sourceUrl)}">${escapeHtml(image.title)}</a>.
        ${escapeHtml(image.credit)}.
        ${escapeHtml(image.license)}.
      </figcaption>
    </figure>
  `;
}

function renderTextSections(module) {
  return `
    <div class="module-text">
      ${module.sections.map((section) => `
        <section class="essay-block reveal-on-scroll">
          <h3>${escapeHtml(section.title)}</h3>
          <p>${escapeHtml(section.body)}</p>
        </section>
      `).join("")}
    </div>
  `;
}

function renderLayerInteraction(module) {
  const layers = module.interaction.layers;

  return `
    <section class="interaction layered-interaction reveal-on-scroll" aria-labelledby="${escapeHtml(module.id)}-interaction-title">
      <div class="interaction-intro">
        <h3 id="${escapeHtml(module.id)}-interaction-title">One image, three frames</h3>
        <p>${escapeHtml(module.interaction.intro)}</p>
      </div>
      <div class="layer-controls" role="toolbar" aria-label="Interpretive layers">
        ${layers.map((layer) => `
          <button
            class="layer-button ${layer.id === state.caveLayer ? "is-active" : ""}"
            type="button"
            data-action="set-layer"
            data-layer="${escapeHtml(layer.id)}"
            aria-pressed="${layer.id === state.caveLayer ? "true" : "false"}"
          >${escapeHtml(layer.label)}</button>
        `).join("")}
      </div>
      <figure class="layered-figure">
        <img
          src="${escapeHtml(module.image.url)}"
          data-fallback="${escapeHtml(module.image.fallback)}"
          alt="${escapeHtml(module.image.alt)}"
          loading="lazy"
        >
        <div class="annotation-layer" aria-live="polite" data-annotation-layer></div>
        <figcaption data-layer-caption></figcaption>
      </figure>
    </section>
  `;
}

function renderProvenanceInteraction(module) {
  const item = module.interaction.items[state.provenanceIndex];
  const isRevealed = Boolean(state.revealedProvenance[item.id]);
  const position = `${state.provenanceIndex + 1} of ${module.interaction.items.length}`;

  return `
    <section class="interaction provenance-interaction reveal-on-scroll" aria-labelledby="${escapeHtml(module.id)}-interaction-title">
      <div class="interaction-intro">
        <h3 id="${escapeHtml(module.id)}-interaction-title">Image provenance</h3>
        <p>${escapeHtml(module.interaction.intro)}</p>
      </div>
      <div class="provenance-stage" data-provenance-stage>
        <p class="provenance-count">${escapeHtml(position)}</p>
        <button
          class="provenance-image-button"
          type="button"
          data-action="advance-provenance"
          aria-label="${isRevealed ? "Show next provenance image" : "Reveal provenance for this image"}"
        >
          <img
            src="${escapeHtml(item.image.url)}"
            data-fallback="${escapeHtml(item.image.fallback)}"
            alt="${escapeHtml(item.image.alt)}"
            loading="lazy"
          >
        </button>
        <div class="provenance-copy">
          <h4>${escapeHtml(item.label)}</h4>
          ${isRevealed ? `
            <ul>
              ${item.provenance.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
            </ul>
            <p><a href="${escapeHtml(item.image.sourceUrl)}">${escapeHtml(item.image.title)}</a>. ${escapeHtml(item.image.license)}.</p>
            <p class="quiet-note">Tap the image again for the next example.</p>
          ` : `
            <p class="quiet-note">Tap the image to reveal its source, year, and original context.</p>
          `}
        </div>
      </div>
    </section>
  `;
}

function renderTimelineInteraction(module) {
  const points = module.interaction.data;

  return `
    <section class="interaction timeline-interaction reveal-on-scroll" aria-labelledby="${escapeHtml(module.id)}-interaction-title">
      <div class="interaction-intro">
        <h3 id="${escapeHtml(module.id)}-interaction-title">Move the memory</h3>
        <p>${escapeHtml(module.interaction.intro)}</p>
      </div>
      <div class="timeline-readout" aria-live="polite">
        <div>
          <span class="timeline-year" data-wwii-year>${points[0].year}</span>
          <span class="timeline-label">poll year</span>
        </div>
        <div>
          <span class="stat-number" data-wwii-usa>${points[0].usa}%</span>
          <span class="timeline-label">crediting USA</span>
        </div>
        <div>
          <span class="stat-number" data-wwii-ussr>${points[0].ussr}%</span>
          <span class="timeline-label">crediting USSR or Russia</span>
        </div>
      </div>
      <label class="sr-only" for="wwii-slider">Choose a year in the IFOP WWII memory polling series</label>
      <input
        id="wwii-slider"
        class="timeline-slider"
        type="range"
        min="0"
        max="${points.length - 1}"
        step="0.01"
        value="${state.wwiiPosition}"
        data-action="wwii-slider"
      >
      <div class="timeline-years" aria-hidden="true">
        ${points.map((point) => `<span>${point.year}</span>`).join("")}
      </div>
      <p class="source-inline">${escapeHtml(module.interaction.note)}</p>
    </section>
  `;
}

function renderComparisonInteraction(module) {
  return `
    <section class="interaction comparison-interaction reveal-on-scroll" aria-labelledby="${escapeHtml(module.id)}-interaction-title">
      <div class="interaction-intro">
        <h3 id="${escapeHtml(module.id)}-interaction-title">Two kinds of language</h3>
        <p>${escapeHtml(module.interaction.intro)}</p>
      </div>
      <div class="comparison-grid">
        ${module.interaction.columns.map((column) => `
          <article class="comparison-column">
            <p class="comparison-kicker">${escapeHtml(column.kicker)}</p>
            <h4>${escapeHtml(column.title)}</h4>
            <p>${escapeHtml(column.body)}</p>
            <a href="${escapeHtml(column.sourceUrl)}">${escapeHtml(column.sourceTitle)}</a>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderHiddenTimelineInteraction(module) {
  return `
    <section class="interaction hidden-timeline-interaction reveal-on-scroll" aria-labelledby="${escapeHtml(module.id)}-interaction-title">
      <div class="interaction-intro">
        <h3 id="${escapeHtml(module.id)}-interaction-title">Open the label</h3>
        <p>${escapeHtml(module.interaction.intro)}</p>
      </div>
      <button
        class="dark-age-bar ${state.hiddenTimelineOpen ? "is-open" : ""}"
        type="button"
        data-action="toggle-hidden-timeline"
        data-timeline-trigger
        aria-expanded="${state.hiddenTimelineOpen ? "true" : "false"}"
      >
        <span>${escapeHtml(module.interaction.label)}</span>
      </button>
      <div class="hidden-events ${state.hiddenTimelineOpen ? "is-open" : ""}" data-hidden-events>
        ${module.interaction.events.map((event) => `
          <article>
            <span>${escapeHtml(event.year)}</span>
            <h4>${escapeHtml(event.title)}</h4>
            <p>${escapeHtml(event.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderInteraction(module) {
  if (!module.interaction) return "";
  if (module.interaction.type === "layers") return renderLayerInteraction(module);
  if (module.interaction.type === "provenance") return renderProvenanceInteraction(module);
  if (module.interaction.type === "timeline") return renderTimelineInteraction(module);
  if (module.interaction.type === "comparison") return renderComparisonInteraction(module);
  if (module.interaction.type === "hiddenTimeline") return renderHiddenTimelineInteraction(module);
  return "";
}

function renderSources(module) {
  return `
    <details class="sources reveal-on-scroll">
      <summary>Sources and image notes</summary>
      <ul>
        ${module.sources.map((source) => `
          <li>
            <a href="${escapeHtml(source.url)}">${escapeHtml(source.title)}</a>
            <span>${escapeHtml(source.note)}</span>
          </li>
        `).join("")}
      </ul>
    </details>
  `;
}

function renderModule(module, index) {
  return `
    <section
      id="${escapeHtml(module.id)}"
      class="module-section"
      data-observed-section
      data-module-index="${index}"
      aria-labelledby="${escapeHtml(module.id)}-title"
    >
      <div class="module-inner">
        <p class="eyebrow">Section ${index + 1}</p>
        <h2 id="${escapeHtml(module.id)}-title">${escapeHtml(module.title)}</h2>
        ${renderImage(module.image)}
        ${renderTextSections(module)}
        ${renderInteraction(module)}
        <p class="closing-line reveal-on-scroll">${escapeHtml(module.closingLine)}</p>
        ${renderSources(module)}
      </div>
    </section>
  `;
}

function renderFinal() {
  return `
    <section id="final" class="final-section" data-observed-section data-module-index="${modules.length}">
      <div class="final-inner reveal-on-scroll">
        <h2>${escapeHtml(finalPage.heading)}</h2>
        <div class="final-copy">
          ${finalPage.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
        <div class="spine-lines">
          ${finalPage.closingLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
        </div>
        <a class="substack-link" href="${escapeHtml(substackUrl)}" aria-label="Read more on Substack">Read more on Substack</a>
      </div>
    </section>
  `;
}

function render() {
  app.innerHTML = `
    <div class="essay-shell">
      ${renderCover()}
      ${renderTopbar()}
      <main>
        ${modules.map(renderModule).join("")}
        ${renderFinal()}
      </main>
    </div>
  `;

  updateCaveLayer(state.caveLayer);
  updateWwiiTimeline(state.wwiiPosition);
  updateProgress(state.activeModuleIndex);
  initializeImageFallbacks();
  initializeObservers();
  if (!initialHashHandled) {
    initialHashHandled = true;
    requestAnimationFrame(scrollToInitialHash);
  }
}

function getCaveModule() {
  return modules.find((module) => module.id === "caves");
}

function getWwiiModule() {
  return modules.find((module) => module.id === "wwii-memory");
}

function getRenaissanceModule() {
  return modules.find((module) => module.id === "renaissance");
}

function getLayerById(layerId) {
  const layers = getCaveModule().interaction.layers;
  return layers.find((layer) => layer.id === layerId) || layers[0];
}

function updateCaveLayer(layerId) {
  state.caveLayer = layerId;
  const layer = getLayerById(layerId);
  const annotationLayer = app.querySelector("[data-annotation-layer]");
  const caption = app.querySelector("[data-layer-caption]");

  app.querySelectorAll("[data-layer]").forEach((button) => {
    const isActive = button.dataset.layer === layerId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (annotationLayer) {
    annotationLayer.innerHTML = layer.annotations.map((annotation) => `
      <span class="annotation" style="left: ${annotation.x}%; top: ${annotation.y}%;">
        <span class="annotation-dot"></span>
        <span class="annotation-label">${escapeHtml(annotation.label)}</span>
      </span>
    `).join("");
  }

  if (caption) {
    caption.textContent = layer.caption;
  }
}

function advanceProvenance() {
  const west = modules.find((module) => module.id === "west");
  const item = west.interaction.items[state.provenanceIndex];

  if (!state.revealedProvenance[item.id]) {
    state.revealedProvenance[item.id] = true;
  } else {
    state.provenanceIndex = (state.provenanceIndex + 1) % west.interaction.items.length;
  }

  render();
}

function interpolateTimeline(position) {
  const points = getWwiiModule().interaction.data;
  const clamped = Math.max(0, Math.min(points.length - 1, Number(position)));
  const lowerIndex = Math.floor(clamped);
  const upperIndex = Math.min(points.length - 1, Math.ceil(clamped));
  const lower = points[lowerIndex];
  const upper = points[upperIndex];
  const ratio = upperIndex === lowerIndex ? 0 : clamped - lowerIndex;

  return {
    year: Math.round(lower.year + (upper.year - lower.year) * ratio),
    usa: Math.round(lower.usa + (upper.usa - lower.usa) * ratio),
    ussr: Math.round(lower.ussr + (upper.ussr - lower.ussr) * ratio),
    progress: (clamped / (points.length - 1)) * 100
  };
}

function updateWwiiTimeline(position) {
  state.wwiiPosition = Number(position);
  const values = interpolateTimeline(position);
  const slider = app.querySelector("[data-action='wwii-slider']");
  const year = app.querySelector("[data-wwii-year]");
  const usa = app.querySelector("[data-wwii-usa]");
  const ussr = app.querySelector("[data-wwii-ussr]");

  if (slider) {
    slider.value = state.wwiiPosition;
    slider.style.setProperty("--slider-progress", `${values.progress}%`);
  }
  if (year) year.textContent = values.year;
  if (usa) usa.textContent = `${values.usa}%`;
  if (ussr) ussr.textContent = `${values.ussr}%`;
}

function setHiddenTimeline(open) {
  state.hiddenTimelineOpen = open;
  const bar = app.querySelector("[data-timeline-trigger]");
  const events = app.querySelector("[data-hidden-events]");

  if (bar) {
    bar.classList.toggle("is-open", open);
    bar.setAttribute("aria-expanded", String(open));
  }
  if (events) {
    events.classList.toggle("is-open", open);
  }
}

function goTo(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  history.pushState(null, "", `#${targetId}`);
  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start"
  });
}

function scrollToInitialHash() {
  const targetId = window.location.hash.replace("#", "");
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (target) target.scrollIntoView({ block: "start" });
}

function updateProgress(index) {
  const normalizedIndex = Math.max(0, Math.min(modules.length, Number(index)));
  state.activeModuleIndex = normalizedIndex;
  const label = app.querySelector("[data-progress-label]");
  const activeModule = modules[normalizedIndex];

  if (label) {
    label.textContent = activeModule
      ? `Section ${normalizedIndex + 1} of ${modules.length}: ${activeModule.title}`
      : "Closing";
  }

  app.querySelectorAll("[data-progress-index]").forEach((step) => {
    const stepIndex = Number(step.dataset.progressIndex);
    step.classList.toggle("is-active", stepIndex === normalizedIndex);
    step.classList.toggle("is-past", stepIndex < normalizedIndex);
  });
}

function initializeImageFallbacks() {
  app.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener("error", () => {
      if (image.dataset.failedFallback === "true") return;
      image.dataset.failedFallback = "true";
      image.src = image.dataset.fallback || fallbackImage;
    });
  });
}

function initializeObservers() {
  const animatedItems = app.querySelectorAll(".reveal-on-scroll");
  const sections = app.querySelectorAll("[data-observed-section]");
  const timelineTrigger = app.querySelector("[data-timeline-trigger]");

  if (typeof window.IntersectionObserver !== "function") {
    animatedItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const animationObserver = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          animationObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
  );

  animatedItems.forEach((item) => animationObserver.observe(item));

  const sectionObserver = new window.IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        updateProgress(Number(visible.target.dataset.moduleIndex));
      }
    },
    { rootMargin: "-28% 0px -52% 0px", threshold: [0.12, 0.3, 0.6] }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  if (timelineTrigger) {
    const hiddenTimelineObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHiddenTimeline(true);
            hiddenTimelineObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -34% 0px", threshold: 0.5 }
    );

    hiddenTimelineObserver.observe(timelineTrigger);
  }
}

app.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const action = actionTarget.dataset.action;
  if (action === "go-to") {
    event.preventDefault();
    goTo(actionTarget.dataset.target);
  }
  if (action === "set-layer") {
    updateCaveLayer(actionTarget.dataset.layer);
  }
  if (action === "advance-provenance") {
    advanceProvenance();
  }
  if (action === "toggle-hidden-timeline") {
    setHiddenTimeline(!state.hiddenTimelineOpen);
  }
});

app.addEventListener("input", (event) => {
  const slider = event.target.closest("[data-action='wwii-slider']");
  if (slider) updateWwiiTimeline(slider.value);
});

document.addEventListener("keydown", (event) => {
  const layerControls = event.target.closest(".layer-controls");
  if (!layerControls) return;

  const buttons = [...layerControls.querySelectorAll("[data-layer]")];
  const currentIndex = buttons.findIndex((button) => button.dataset.layer === state.caveLayer);
  let nextIndex = currentIndex;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    nextIndex = (currentIndex + 1) % buttons.length;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    nextIndex = currentIndex <= 0 ? buttons.length - 1 : currentIndex - 1;
  } else {
    return;
  }

  event.preventDefault();
  buttons[nextIndex].focus();
  updateCaveLayer(buttons[nextIndex].dataset.layer);
});

window.addEventListener("hashchange", () => {
  const targetId = window.location.hash.replace("#", "");
  const index = modules.findIndex((module) => module.id === targetId);
  if (index >= 0) updateProgress(index);
  if (targetId === "final") updateProgress(modules.length);
});

render();
