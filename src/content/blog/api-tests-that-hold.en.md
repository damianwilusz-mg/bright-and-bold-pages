---
slug: api-tests-that-hold
lang: en
title: Writing API tests that still pass next quarter
date: 2026-02-02
excerpt: Contract-first assertions, no shared fixtures, and treating flakiness as a bug report.
tags: [API Testing, Postman, Playwright]
---

An API suite that needs weekly babysitting is worse than no suite at all — it
teaches the team to ignore red builds.

## Assert the contract, not the payload

Check status codes, required fields, and types. Do not snapshot the whole
response body: the first harmless field addition will turn twenty tests red and
nobody will read the diff.

## Every test builds its own data

Shared fixtures create ordering dependencies you only discover when the suite
runs in parallel at 2 a.m. Each test creates what it needs and cleans up after
itself.

## Flaky means broken

A test that fails one run in ten is reporting something real — usually a race
condition in the application, not in the test. I log it as a bug before I touch
the retry count.

## Keep Postman for exploration

Postman is where I poke at a new endpoint. Once the behaviour is understood, the
assertion moves into the automated suite so it runs on every commit.
