---
slug: api-tests-that-hold
lang: pl
title: Testy API, które przejdą także za kwartał
date: 2026-02-02
excerpt: Asercje na kontrakcie, brak współdzielonych fixture'ów i traktowanie flaków jak zgłoszenia błędu.
tags: [Testy API, Postman, Playwright]
---

Zestaw testów API wymagający cotygodniowego niańczenia jest gorszy niż jego brak
— uczy zespół ignorowania czerwonych buildów.

## Sprawdzaj kontrakt, nie całą odpowiedź

Kody statusu, wymagane pola, typy. Bez snapshotów całego body: pierwsze
niegroźne dodane pole zapali dwadzieścia testów na czerwono i nikt nie przeczyta
diffa.

## Każdy test buduje własne dane

Współdzielone fixture'y tworzą zależności od kolejności, które wychodzą dopiero
przy równoległym uruchomieniu o drugiej w nocy. Test tworzy to, czego potrzebuje,
i po sobie sprząta.

## Flaky znaczy zepsute

Test padający raz na dziesięć uruchomień coś zgłasza — zwykle wyścig w aplikacji,
nie w teście. Zakładam zgłoszenie, zanim ruszę liczbę retry.

## Postman zostaje do eksploracji

W Postmanie rozgrzebuję nowy endpoint. Kiedy zachowanie jest już zrozumiane,
asercja trafia do automatów i chodzi przy każdym commicie.
