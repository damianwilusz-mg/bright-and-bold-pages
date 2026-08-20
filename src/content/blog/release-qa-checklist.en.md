---
slug: release-qa-checklist
lang: en
title: A release QA checklist that actually gets used
date: 2026-04-18
excerpt: The short, boring list I run before every release — and why boring is exactly the point.
tags: [Release QA, Process]
---

Most release checklists die because they are too long. Mine fits on one screen,
and that is the only reason it survives contact with a Friday deploy.

## What goes on the list

- **Smoke the money paths first.** Login, provisioning, billing. If one of those
  is broken, nothing else on the list matters.
- **Diff the migrations.** Every schema change gets read out loud before it runs
  on production data.
- **Re-run the regression suite on a clean environment.** Not the one where the
  feature was developed — a fresh container, every time.
- **Re-test the last three hotfixes.** Regressions love to hide where somebody
  was in a hurry.

## What deliberately stays off it

Anything the automated suite already covers. A checklist that repeats CI is a
checklist people start skipping, and once they skip one item they skip all of
them.

## The rule I keep coming back to

If an item has never caught a bug in six months, it gets deleted. The list is a
tool, not a monument.
