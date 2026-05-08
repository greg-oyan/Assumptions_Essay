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
        title: "What comes to mind when you think of Cavemen?",
        body: [
          "We picture barbarians, slow and crude, somewhere far back on the road to becoming what we are now. Modern culture has reinforced the idea that cavemen were brutes, cave paintings were the peak of their artistic capacity, and they grunted around campfires between mammoth hunts. That picture is so familiar it must be a reflection of good scientific evidence, but is it?",
          "Take cave paintings. We see artistic depictions of animals drawn by people who watched them closely and worked carefully. Pigments, planning, technique, and imagination liven cave walls. None of that proves the painters were gentle, or noble, or anything like us, but it is also not like the cartoons we remember from childhood.",
          "G.K. Chesterton, a Christian writer from the early 20th century, made the point better than almost anyone. He said the atmosphere of the cave could just as easily feel like a nursery as a savage hunting lodge. Not because he knew it was a nursery, but because the nursery image exposes the assumption. Why do we imagine brutes before we imagine parents, children, sophistication, play, or home? The cave does not force the barbarian picture instead, we inherited that picture, and once you see that an assumption as foundational as barbaric cavemen comes naturally to you, you may start to wonder what other assumptions you hold that are not necessarily based on good evidence."
        ]
      }
    ],
    closingLine: "The Cave did not change. The frame did.",
    interaction: {
      type: "layers",
      intro:
        "The same wall can be interpreted in more than one way.",
      layers: [
        {
          id: "hunters",
          label: "Hunters",
          caption: "A hunting frame turns the wall into practice, memory, pursuit, and animal knowledge.",
          overlayImage: "assets/cave-overlays/hunters.png",
          overlayAlt: "Hunters standing in the cave foreground, studying the painted wall."
        },
        {
          id: "family",
          label: "Family home",
          caption: "A family-home frame turns the wall into teaching, affection, memory, play, and the ordinary life of human beings.",
          overlayImage: "assets/cave-overlays/family.png",
          overlayAlt: "A family group in the cave foreground, adults and children together."
        },
        {
          id: "sacred",
          label: "Sacred space",
          caption: "A sacred-space frame turns the wall into reverence, ritual, memory, and meanings we may no longer know how to read.",
          overlayImage: "assets/cave-overlays/sacred.png",
          overlayAlt: "Two figures in the cave foreground, still and apart, facing the wall."
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
        title: "What comes to mind when you think of the Wild West?",
        body: [
          "Most of us picture the Wild West through movies. We think of dusty streets, saloons, gunfights, sheriffs, outlaws, and a town that could turn violent at any moment. The frontier is the place where civilization has not quite arrived yet.",
          "There were violent towns and violent people, but much of frontier life was what we might describe as ordinary. Typical Western life included cattle, farms, freight, weather, debt, court records, local rules, and long stretches of boredom. Many towns had gun restrictions, and famous cattle-drive era was short-lived. Most cowboys were young men doing hard, low-paying work.",
          "Violence made the best stories, so violence became the picture presented to us. Dime novels, touring shows, advertising, and Hollywood did not invent the frontier, but they taught later generations how to imagine it. Gunfights survive in memory better than cattle prices, town ordinances, and dusty boredom."
        ]
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
          label: "The pretend frontier",
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
        title: "What comes to mind when you think of World War II?",
        body: [
          "Ask many Americans today who did the most to defeat Nazi Germany and the answer feels almost automatic. America. Maybe someone would say \"the Allies\" if they are being careful. People picture images of D-Day, GIs liberating villages, Iwo Jima, and the Greatest Generation.",
          "There is good evidence that multiple perspectives are valid when thinking about which country contributed the most toward defeating the Axis powers, and no single answer is 'right'. The Soviet Union paid an almost unimaginable human cost and destroyed most of Germany's army on the Eastern Front. The United States supplied enormous industrial power, equipment, soldiers, and helped finish the war. Britain endured, fought, and held the line before America entered.",
          "Public memory has changed over time. Earlier postwar polling in France gave far more credit to the Soviet Union than people usually do today. Later, the Cold War, movies, textbooks, and politics changed the picture. The question of who won the war partly depends on what you measure, and partly on the generation and country answering it."
        ]
      }
    ],
    closingLine: "The war did not change. The memory did.",
    interaction: {
      type: "timeline",
      intro:
        "This is a French IFOP polling series, not a U.S. series. It is included because it shows how public perception can change over time.",
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
    headlineCards: [
      {
        era: "April 16, 1912",
        source: "The New York Times, morning edition",
        headline: "Titanic Sinks Four Hours After Hitting Iceberg; 866 Rescued by Carpathia, Probably 1,250 Perish",
        dek: "The first wire reports focus on numbers, the iceberg, the wireless calls, and which ships responded."
      },
      {
        era: "1912–1920s",
        source: "Inquiry reports and popular press",
        headline: "Lifeboats for Half: Senate and Board of Trade Find Regulation Lagged Behind the Ships",
        dek: "Both inquiries point at lifeboat rules written for smaller vessels, ice warnings the bridge received, and the Californian's silent wireless. The story is a regulatory failure."
      },
      {
        era: "1955",
        source: "Walter Lord, A Night to Remember",
        headline: "The Last Hours of a Great Ship: Heroism, Order, and the Band That Played On",
        dek: "Lord's reconstruction, drawn from survivor interviews, foregrounds individual conduct. The picture becomes one of dignity under disaster."
      },
      {
        era: "1997",
        source: "James Cameron's Titanic enters wide release",
        headline: "A Love Across the Decks: Romance, Class, and the Ship as Tragedy's Stage",
        dek: "The film fuses a love story with a class allegory. For a generation, the Titanic becomes about who was let into the lifeboats and who wasn't."
      },
      {
        era: "2010s onward",
        source: "Revisionist scholarship and centennial coverage",
        headline: "Not Hubris, but a System: Coal Fires, Speed, Ice Warnings, and the Limits of \"Unsinkable\"",
        dek: "Recent work re-centers the event as the convergence of commercial pressure, design assumptions, weather, and a word — \"unsinkable\" — that did most of its work after the sinking, not before."
      }
    ],
    sections: [
      {
        title: "What comes to mind when you think of Titanic?",
        body: [
          "The modern Titanic story is often presented to us as a tale of class-based moral failings and the unsinkable ship brought down by human arrogance. Although the ship had too few lifeboats for everyone aboard, it complied with the regulations of the time. Ice warnings were received by the crew, but similar warnings were common on the route. The ship was moving fast, but not in a way that was unusual or reckless compared to other ships of the era. Calm sea conditions made the iceberg hard to see.",
          "It can be hard for people to accept that freak disasters may be morally neutral. We look for meaning, negligence, arrogance, or moral failure when it may not be present. The famous line, that God himself couldn't sink the ship, wasn't widely repeated before the incident. The line became famous when people went looking for hubris to explain what happened.",
          "A fairer reading is that the collision itself was accidental, and the scale of the tragedy was worsened by outdated lifeboat rules, calm sea conditions, class arrangements, poor decisions, and a nearby ship whose wireless operator was off duty and asleep."
        ]
      }
    ],
    closingLine: "The ship did not change. The story did.",
    interaction: {
      type: "headlineScroller",
      intro:
        "The public language around Titanic kept changing as each era found a different story in the same wreck.",
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
        title: "What comes to mind when you think of the Renaissance?",
        body: [
          "The Renaissance is usually thought of as a period of human creativity and flourishing beyond the norm. The Dark Ages stifled art, science, and civilizational progress. Then, with the Renaissance, light: Europe seemingly woke up after a long sleep.",
          "Yet, Medieval Europe already had universities, theology, trade, art, mathematics, engineering, and contact with classical and Islamic learning. Bologna, Paris, and Oxford were active well before the Renaissance. Gothic cathedrals, scholastic philosophy, clocks, eyeglasses, Dante, Aquinas, and academic breakthroughs all complicate the light from darkness story.",
          "The Renaissance was real, but it was slower and messier than the common understanding suggests. Darkness, then light is easier to remember than gradual progress, so the binary interpretation has survived. This doesn't mean that the Renaissance wasn't special or distinctive, but merely that it did not appear out of nowhere."
        ]
      }
    ],
    closingLine: "The era did not change. The label did.",
    interaction: {
      type: "hiddenTimeline",
      intro:
        "The Renaissance story depends on the darkness before it. Click the banner and see how the Dark Ages were more active, creative, and continuous than the label suggests.",
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
    "Five pictures. Five inherited stories. In each one, the familiar version was not the only way to arrange the evidence.",
    "The point was never that history is unknowable, but that the version of history in your head got there somehow. Books, movies, school, family, church, and the time and place you grew up in have influenced your idea of what the past was like.",
    "What you picture is not the past, but a frame placed over the past, by people, for reasons.",
    "Once you can see the frame, you can ask where it came from."
  ],
  closingLines: [
    "We inherit pictures, not the past, and sometimes the picture is stronger than the evidence."
  ]
};

const substackUrl = "https://substack.com/";

const state = {
  activeModuleIndex: 0,
  caveLayer: "hunters",
  provenanceIndex: 0,
  revealedProvenance: {},
  wwiiPosition: 0,
  titanicComparisonIndex: 0,
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
        <h1>What Do You See?</h1>
        <button class="button primary" type="button" data-action="go-to" data-target="caves">Begin</button>
      </div>
      <div class="scroll-cue" aria-hidden="true">
        <span>scroll</span>
        <span class="scroll-chevron"></span>
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
          ${Array.isArray(section.body)
            ? section.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")
            : `<p>${escapeHtml(section.body)}</p>`}
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
        <div class="cave-image-container">
          <img
            class="cave-painting"
            src="${escapeHtml(module.image.url)}"
            data-fallback="${escapeHtml(module.image.fallback)}"
            alt="${escapeHtml(module.image.alt)}"
            loading="lazy"
          >
          ${module.interaction.layers.map((layer) => `
            <img
              data-cave-overlay
              data-layer="${escapeHtml(layer.id)}"
              class="cave-overlay ${layer.id === state.caveLayer ? "is-active" : ""}"
              src="${escapeHtml(layer.overlayImage)}"
              alt="${escapeHtml(layer.overlayAlt)}"
            >
          `).join("")}
        </div>
        <figcaption data-layer-caption></figcaption>
      </figure>
    </section>
  `;
}

function renderProvenanceStage(module) {
  const item = module.interaction.items[state.provenanceIndex];
  const isRevealed = Boolean(state.revealedProvenance[item.id]);
  const position = `${state.provenanceIndex + 1} of ${module.interaction.items.length}`;
  return `
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
  `;
}

function renderProvenanceInteraction(module) {
  return `
    <section class="interaction provenance-interaction reveal-on-scroll" aria-labelledby="${escapeHtml(module.id)}-interaction-title">
      <div class="interaction-intro">
        <h3 id="${escapeHtml(module.id)}-interaction-title">Where the Picture Came From</h3>
        <p>${escapeHtml(module.interaction.intro)}</p>
      </div>
      ${renderProvenanceStage(module)}
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
        step="1"
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

function renderComparisonPanel(module) {
  const columns = module.interaction.columns;
  const index = Math.max(0, Math.min(columns.length - 1, state.titanicComparisonIndex));
  const column = columns[index];

  return `
    <article
      class="comparison-panel"
      id="${escapeHtml(module.id)}-comparison-panel"
      data-comparison-panel
      aria-live="polite"
    >
      <p class="comparison-kicker">${escapeHtml(column.kicker)}</p>
      <h4>${escapeHtml(column.title)}</h4>
      <p>${escapeHtml(column.body)}</p>
      <a href="${escapeHtml(column.sourceUrl)}">${escapeHtml(column.sourceTitle)}</a>
    </article>
  `;
}

function renderComparisonInteraction(module) {
  return `
    <section class="interaction comparison-interaction reveal-on-scroll" aria-labelledby="${escapeHtml(module.id)}-interaction-title">
      <div class="interaction-intro">
        <h3 id="${escapeHtml(module.id)}-interaction-title">Two kinds of language</h3>
        <p>${escapeHtml(module.interaction.intro)}</p>
      </div>
      <div class="comparison-controls" role="tablist" aria-label="Titanic language comparison">
        ${module.interaction.columns.map((column, index) => `
          <button
            class="comparison-button ${index === state.titanicComparisonIndex ? "is-active" : ""}"
            type="button"
            role="tab"
            aria-selected="${index === state.titanicComparisonIndex ? "true" : "false"}"
            aria-controls="${escapeHtml(module.id)}-comparison-panel"
            data-action="set-comparison-view"
            data-comparison-index="${index}"
          >${escapeHtml(column.title)}</button>
        `).join("")}
      </div>
      ${renderComparisonPanel(module)}
    </section>
  `;
}

function renderHeadlineScrollerInteraction(module) {
  return `
    <section class="interaction headline-interaction reveal-on-scroll" aria-labelledby="${escapeHtml(module.id)}-interaction-title">
      <div class="interaction-intro">
        <h3 id="${escapeHtml(module.id)}-interaction-title">Headlines through time</h3>
        <p>${escapeHtml(module.interaction.intro)}</p>
      </div>
      <div class="headline-scroller" tabindex="0" aria-label="Titanic headlines through time">
        ${module.headlineCards.map((card) => `
          <article class="headline-card">
            <p class="headline-card__era">${escapeHtml(card.era)}</p>
            <p class="headline-card__source">${escapeHtml(card.source)}</p>
            <h4 class="headline-card__headline">${escapeHtml(card.headline)}</h4>
            <p class="headline-card__dek">${escapeHtml(card.dek)}</p>
          </article>
        `).join("")}
      </div>
      <p class="headline-instruction">Scroll through the cards before choosing.</p>
    </section>
  `;
}

function renderHiddenTimelineInteraction(module) {
  return `
    <section class="interaction hidden-timeline-interaction reveal-on-scroll" aria-labelledby="${escapeHtml(module.id)}-interaction-title">
      <div class="interaction-intro">
        <h3 id="${escapeHtml(module.id)}-interaction-title">Click the banner</h3>
        <p>${escapeHtml(module.interaction.intro)}</p>
        ${module.interaction.instruction ? `<p>${escapeHtml(module.interaction.instruction)}</p>` : ""}
      </div>
      <button
        class="dark-age-bar ${state.hiddenTimelineOpen ? "is-open" : ""}"
        type="button"
        data-action="toggle-hidden-timeline"
        data-hidden-timeline-bar
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
  if (module.interaction.type === "headlineScroller") return renderHeadlineScrollerInteraction(module);
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
        ${module.closingLine ? `<p class="closing-line reveal-on-scroll">${escapeHtml(module.closingLine)}</p>` : ""}
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
  const overlays = app.querySelectorAll("[data-cave-overlay]");
  const caption = app.querySelector("[data-layer-caption]");

  app.querySelectorAll('[data-action="set-layer"]').forEach((button) => {
    const isActive = button.dataset.layer === layerId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  overlays.forEach((overlay) => {
    overlay.classList.toggle("is-active", overlay.dataset.layer === layerId);
  });

  if (caption) {
    caption.textContent = layer.caption;
  }
}

function advanceProvenance() {
  const west = modules.find((module) => module.id === "west");
  const item = west.interaction.items[state.provenanceIndex];
  const stage = app.querySelector("[data-provenance-stage]");
  const scrollLeft = window.scrollX;
  const scrollTop = window.scrollY;

  if (!state.revealedProvenance[item.id]) {
    state.revealedProvenance[item.id] = true;
  } else {
    state.provenanceIndex = (state.provenanceIndex + 1) % west.interaction.items.length;
  }

  if (stage) {
    stage.outerHTML = renderProvenanceStage(west);
    initializeImageFallbacks();
    window.scrollTo(scrollLeft, scrollTop);
  }
}

function getTimelinePoint(position) {
  const points = getWwiiModule().interaction.data;
  const index = Math.max(0, Math.min(points.length - 1, Math.round(Number(position))));
  const point = points[index];

  return {
    ...point,
    index,
    progress: (index / (points.length - 1)) * 100
  };
}

function updateWwiiTimeline(position) {
  const values = getTimelinePoint(position);
  state.wwiiPosition = values.index;
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

function setComparisonView(index) {
  const titanic = modules.find((module) => module.id === "titanic");
  const columns = titanic.interaction.columns;
  const scrollLeft = window.scrollX;
  const scrollTop = window.scrollY;
  state.titanicComparisonIndex = Math.max(0, Math.min(columns.length - 1, Number(index)));
  const panel = app.querySelector("[data-comparison-panel]");

  app.querySelectorAll("[data-comparison-index]").forEach((button) => {
    const isActive = Number(button.dataset.comparisonIndex) === state.titanicComparisonIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (panel) {
    panel.outerHTML = renderComparisonPanel(titanic);
    window.scrollTo(scrollLeft, scrollTop);
  }
}

function setHiddenTimeline(open) {
  state.hiddenTimelineOpen = open;
  const bar = app.querySelector("[data-hidden-timeline-bar]");
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
  if (action === "set-comparison-view") {
    setComparisonView(actionTarget.dataset.comparisonIndex);
  }
  if (action === "toggle-hidden-timeline") {
    setHiddenTimeline(true);
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
