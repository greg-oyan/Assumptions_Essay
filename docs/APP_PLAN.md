# What Do You See? App Plan

## Concept

A standalone scrollable interactive essay. Five historical pictures. The app is not a quiz, a trivia piece, or a myth-busting exercise. It shows how a familiar picture can become stronger than the evidence.

Title: `What Do You See?`

Spine line: `We inherit pictures, not the past. Sometimes the picture is stronger than the evidence.`

## Structure

The artifact is a single-page longform essay:

1. Cover
2. Cave Paintings
3. Wild West
4. WWII Contribution
5. Titanic
6. Renaissance
7. Closing screen

Each module uses this shape:

1. Title
2. Full-width hero image
3. `The picture you carry`
4. `What the record shows`
5. `What the picture leaves out`
6. Interaction
7. Large closing line
8. Expandable source notes

There are no lock-ins, answer mechanics, user pattern summaries, or personality interpretations.

## Modules

- Cave Paintings: layered image interpretation.
- Wild West: image provenance reveal.
- WWII Contribution: IFOP memory timeline slider.
- Titanic: side-by-side comparison of public language and inquiry language.
- Renaissance: hidden timeline that opens the label.

## Data Model

```js
{
  id,
  title,
  image: {
    url,
    fallback,
    alt,
    title,
    credit,
    license,
    sourceUrl
  },
  sections: [
    { title, body }
  ],
  closingLine,
  interaction,
  sources: [
    { title, url, note }
  ]
}
```

## Source Standard

No exact statistic, quote, provenance claim, date, or image credit should be presented without a source note. If a claim cannot be checked quickly, mark it clearly in code and use source-needed language in the UI.

## Definition of Done

A reader can land on the cover, click Begin, and scroll through five complete modules with real images, working interactions, readable prose, and source notes. The experience should feel like a quiet longform essay, not an app dashboard.
