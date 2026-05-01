# What Do You See? App Plan

## Concept

A standalone interactive essay. Five rooms. One mechanic per room: image, choice, reveal. Substack is the doorway, the app is the experience.

Title: `What Do You See?`

Subtitle: `Five experiments in the stories we inherit.`

Spine line: `We inherit pictures, not the past. Sometimes the picture is stronger than the evidence.`

## Locked Modules

- Cave paintings: primitive man / Chesterton reversal
- Wild West: lawless frontier / ordinary working life mythologized
- WWII contribution: fixed event / shifting public memory
- Titanic: maritime disaster / moralized hubris story
- Renaissance: gradual continuity / clean rebirth narrative

## Module Template

Each module has three main beats:

1. Evidence: real image, artifact, chart, or quote. Prompt: `What do you see?`
2. Choice: three or four serious interpretations. The reader must lock in an answer.
3. Reveal with alternative: names the supplied frame and offers a quieter reading that fits the same evidence.

Source notes live in an optional reveal-screen drawer, not in the main flow.

## Cumulative Layer

The final screen shows the reader their pattern across all five rooms. It is not a gotcha. It should feel like recognition: `You chose A, B, C, D, E. Here is what your choices had in common.`

## Data Model

```js
{
  id,
  title,
  image,
  imageAlt,
  imageCredit,
  prompt,
  choices: [
    {
      id,
      label,
      frameSupplied,
      patternTags
    }
  ],
  inheritedFrame,
  alternativeReading,
  anchorLine,
  sources: [{ title, url, note }]
}
```

## Build Order

1. Skeleton: multi-module shell, navigation, progress indicator, reusable module component, opening and closing screens, cumulative-pattern logic.
2. Content data: fill in all five modules with real text, still using placeholder images.
3. Test the flow: click through end to end and cut anything that breaks the rhythm.
4. Real images: source public-domain or properly licensed imagery.
5. Language pass: tighten the writing after real images are in place.
6. Source notes: backfill short credible notes.
7. Polish: transitions, keyboard navigation, mobile layout, shareable module links, metadata, accessibility.
8. Ship: push to GitHub Pages, then write the Substack doorway post.

## Scope Discipline

- Five modules only.
- First version is image, text, choice, reveal.
- No launch branding beyond the artifact itself.

## Definition of Done

A reader who has never heard of the author can land on the page, walk through five rooms in 8-12 minutes, and leave with the quiet recognition that the evidence did not change, but the inherited picture did.
