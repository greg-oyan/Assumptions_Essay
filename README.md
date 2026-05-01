# Assumptions_Essay

A public writing workspace and standalone interactive essay called `What Do You See?`

The core idea: we inherit pictures of the past, then mistake the picture for the evidence.

## Purpose

This repository is set up to support the full essay process, from early notes through polished drafts. It keeps raw thinking, source material, outlines, and finished writing in separate places so the work can evolve without becoming hard to follow.

## Project Structure

- `outline/` - argument maps, section plans, and structural experiments.
- `drafts/` - working drafts of the essay.
- `notes/` - loose ideas, observations, fragments, and revision notes.
- `research/` - source notes, reading logs, and evidence summaries.
- `references/` - bibliography files and citation material.
- `assets/` - images, diagrams, or other supporting media.
- `archive/` - retired drafts and older material kept for reference.
- `license/` - licensing notes for the writing and any future supporting code.
- `docs/` - build plans, product notes, and decisions for the interactive artifact.
- `index.html`, `styles.css`, `app.js` - the static interactive essay shell.

## App

Open `index.html` in a browser to run the current essay.

The app is intentionally static and data-driven so it can ship cleanly on GitHub Pages. Each section is powered by module data in `app.js`, with source notes and image metadata kept near the content they support.

Current structure:

- Cover
- Cave Paintings
- Wild West
- WWII Contribution
- Titanic
- Renaissance
- Closing screen

## Working Method

1. Capture raw ideas in `notes/`.
2. Move stronger threads into `outline/`.
3. Track readings and evidence in `research/`.
4. Build essay versions in `drafts/`.
5. Move replaced drafts into `archive/` when they are no longer active.

## Status

Full structural pass built. Remaining work is mostly Greg's voice pass, final source polish, and the real Substack URL.
