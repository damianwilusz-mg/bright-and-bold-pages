---
slug: release-qa-checklist
lang: pl
title: Checklista QA wydań, z której naprawdę się korzysta
date: 2026-04-18
excerpt: Krótka, nudna lista, którą przechodzę przed każdym wydaniem — i dlaczego nudna to zaleta.
tags: [QA wydań, Proces]
---

Większość checklist wydaniowych umiera, bo są za długie. Moja mieści się na
jednym ekranie i tylko dlatego przeżywa zderzenie z piątkowym deployem.

## Co jest na liście

- **Najpierw ścieżki, które robią pieniądze.** Logowanie, provisioning, billing.
  Jeśli któraś z nich nie działa, reszta listy nie ma znaczenia.
- **Przegląd migracji.** Każda zmiana schematu jest czytana na głos, zanim
  uruchomi się na danych produkcyjnych.
- **Regresja na czystym środowisku.** Nie na tym, na którym powstawała funkcja —
  za każdym razem świeży kontener.
- **Retest trzech ostatnich hotfixów.** Regresje uwielbiają miejsca, w których
  ktoś się śpieszył.

## Czego świadomie tam nie ma

Wszystkiego, co pokrywa automatyzacja. Checklista powielająca CI to checklista,
którą ludzie zaczynają pomijać — a po jednym pominiętym punkcie pomijają wszystkie.

## Zasada, do której wracam

Jeśli punkt przez pół roku nie złapał żadnego błędu, wylatuje. Lista jest
narzędziem, nie pomnikiem.
