export type Lang = "en" | "pl";

export const content = {
  en: {
    nav: { about: "About", experience: "Experience", stack: "Stack", contact: "Contact" },
    hero: {
      status: "Open to new opportunities",
      title: "Damian Wilusz",
      role: "Software Tester",
      lead: "I break software so users don't have to. Manual and automated testing, API validation and release QA — with a developer's mindset in TypeScript, Node.js and PHP (Laravel).",
      location: "Rzeszów, Podkarpackie, Poland",
      cta: "Get in touch",
      ctaSecondary: "See experience",
    },
    about: {
      title: "About",
      body: [
        "Software tester with 4+ years of experience in hosting platforms and SaaS products. I focus on manual testing, test automation and customer issue analysis — making sure every release is stable, reliable and predictable.",
        "Beyond QA, I write code: TypeScript and Node.js for automation and tooling, PHP (Laravel) for backend work. That lets me debug deeper, deliver occasional fixes and speak the same language as developers.",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Software Tester",
          company: "PanelAlpha",
          type: "Full-time",
          period: "Apr 2023 — Present",
          duration: "3 yrs 5 mos",
          location: "Rzeszów, Poland",
          summary:
            "My responsibilities focus on manual testing, automated test development and customer issue analysis, ensuring the quality, reliability and stability of the product.",
          points: [
            "Performed manual testing of bug fixes, improvements and new features to validate stability and usability.",
            "Designed, implemented and maintained Cypress/Playwright automation tests for UI flows and API endpoints.",
            "Created and maintained Bash scripts for automated installation testing on clean environments.",
            "Tested API endpoints using Postman, performing request/response validation.",
            "Investigated and reproduced customer-reported issues from support tickets, preparing detailed reports for developers.",
            "Worked with MySQL for data analysis and test scenarios, supporting debugging and ensuring database reliability.",
            "Owned the release QA process, ensuring each release meets product standards and preventing regressions.",
            "Performed root cause analysis of recurring bugs to reduce defect leakage and improve overall stability.",
            "Participated in sprint-based planning (Agile/Scrum) aligned with frequent product releases.",
            "Analyzed and debugged customer-reported issues related to Docker environments.",
          ],
          tags: ["Test Automation", "API Testing", "Cypress", "Playwright", "Docker", "MySQL"],
        },
        {
          role: "Manual Software Tester",
          company: "ModulesGarden",
          type: "Full-time",
          period: "Apr 2022 — Present",
          duration: "4 yrs 5 mos",
          location: "Rzeszów, Poland",
          summary:
            "I work on improving the quality and reliability of software by testing features, finding bugs and helping the team build better products — mainly hosting platforms like WHMCS, cPanel and Plesk.",
          points: [
            "Performed functional testing on WHMCS, cPanel and Plesk to find and report bugs in modules and system features.",
            "Worked closely with developers and project managers to decide which issues were most important to fix first.",
            "Suggested improvements to make the software easier and more enjoyable to use.",
            "Helped test bug fixes and updates before each new release to make sure they didn't cause new problems.",
            "Wrote clear bug reports and gave helpful feedback during development.",
            "Managed testing across several projects at the same time while meeting deadlines.",
          ],
          tags: ["Manual Testing", "Functional Testing", "WHMCS", "cPanel", "Plesk"],
        },
      ],
    },
    stack: {
      title: "Stack",
      subtitle: "Tools and technologies I use every day.",
      groups: [
        { label: "Testing", items: ["Cypress", "Playwright", "Postman", "Manual QA", "Release QA"] },
        { label: "Code", items: ["TypeScript", "Node.js", "PHP", "Laravel", "Bash"] },
        { label: "Infra & Data", items: ["Docker", "MySQL", "Linux", "Git", "Agile / Scrum"] },
      ],
    },
    contact: {
      title: "Let's talk",
      body: "Have a product that needs a second pair of eyes — or a QA process that needs structure? Drop me a line.",
      cta: "Send an email",
    },
    footer: "Built in Rzeszów, Poland.",
    theme: { light: "Light", dark: "Dark" },
  },
  pl: {
    nav: { about: "O mnie", experience: "Doświadczenie", stack: "Technologie", contact: "Kontakt" },
    hero: {
      status: "Otwarty na nowe możliwości",
      title: "Damian Wilusz",
      role: "Tester oprogramowania",
      lead: "Psuję oprogramowanie, żeby użytkownicy nie musieli. Testy manualne i automatyczne, walidacja API oraz QA wydań — z podejściem developera: TypeScript, Node.js i PHP (Laravel).",
      location: "Rzeszów, woj. podkarpackie, Polska",
      cta: "Napisz do mnie",
      ctaSecondary: "Zobacz doświadczenie",
    },
    about: {
      title: "O mnie",
      body: [
        "Tester oprogramowania z ponad 4-letnim doświadczeniem w platformach hostingowych i produktach SaaS. Skupiam się na testach manualnych, automatyzacji testów i analizie zgłoszeń klientów — tak, aby każde wydanie było stabilne i przewidywalne.",
        "Poza QA piszę kod: TypeScript i Node.js do automatyzacji i narzędzi, PHP (Laravel) po stronie backendu. Dzięki temu debuguję głębiej, dostarczam poprawki i mówię tym samym językiem co programiści.",
      ],
    },
    experience: {
      title: "Doświadczenie",
      items: [
        {
          role: "Tester oprogramowania",
          company: "PanelAlpha",
          type: "Pełny etat",
          period: "kwi 2023 — obecnie",
          duration: "3 lata 5 mies.",
          location: "Rzeszów, Polska",
          summary:
            "Moje obowiązki koncentrują się na testach manualnych, tworzeniu testów automatycznych oraz analizie zgłoszeń klientów, zapewniając jakość, niezawodność i stabilność produktu.",
          points: [
            "Testy manualne poprawek, usprawnień i nowych funkcji w celu weryfikacji stabilności i użyteczności.",
            "Projektowanie, wdrażanie i utrzymywanie testów automatycznych Cypress/Playwright dla UI oraz endpointów API.",
            "Tworzenie i utrzymywanie skryptów Bash do automatycznych testów instalacji na czystych środowiskach.",
            "Testowanie endpointów API w Postmanie wraz z walidacją request/response.",
            "Analiza i odtwarzanie zgłoszeń klientów ze zgłoszeń supportu oraz przygotowywanie szczegółowych raportów dla developerów.",
            "Praca z MySQL przy analizie danych i scenariuszach testowych, wsparcie debugowania i niezawodności bazy.",
            "Odpowiedzialność za proces QA wydań i zapobieganie regresjom.",
            "Analiza przyczyn źródłowych powtarzających się błędów w celu ograniczenia ich wycieku na produkcję.",
            "Udział w planowaniu sprintów (Agile/Scrum) przy częstych wydaniach produktu.",
            "Analiza i debugowanie zgłoszeń klientów związanych ze środowiskami Docker.",
          ],
          tags: ["Automatyzacja testów", "Testy API", "Cypress", "Playwright", "Docker", "MySQL"],
        },
        {
          role: "Manualny tester oprogramowania",
          company: "ModulesGarden",
          type: "Pełny etat",
          period: "kwi 2022 — obecnie",
          duration: "4 lata 5 mies.",
          location: "Rzeszów, Polska",
          summary:
            "Pracuję nad poprawą jakości i niezawodności oprogramowania: testuję funkcje, znajduję błędy i pomagam zespołowi budować lepsze produkty — głównie platformy hostingowe jak WHMCS, cPanel i Plesk.",
          points: [
            "Testy funkcjonalne WHMCS, cPanel i Plesk — wyszukiwanie i raportowanie błędów w modułach i funkcjach systemu.",
            "Ścisła współpraca z developerami i project managerem przy priorytetyzacji błędów.",
            "Propozycje usprawnień poprawiających wygodę korzystania z oprogramowania.",
            "Testy poprawek i aktualizacji przed każdym wydaniem, aby uniknąć nowych problemów.",
            "Pisanie czytelnych raportów błędów i przekazywanie wartościowego feedbacku w trakcie developmentu.",
            "Prowadzenie testów w kilku projektach jednocześnie z dotrzymywaniem terminów.",
          ],
          tags: ["Testy manualne", "Testy funkcjonalne", "WHMCS", "cPanel", "Plesk"],
        },
      ],
    },
    stack: {
      title: "Technologie",
      subtitle: "Narzędzia, których używam na co dzień.",
      groups: [
        { label: "Testowanie", items: ["Cypress", "Playwright", "Postman", "Testy manualne", "QA wydań"] },
        { label: "Kod", items: ["TypeScript", "Node.js", "PHP", "Laravel", "Bash"] },
        { label: "Infra i dane", items: ["Docker", "MySQL", "Linux", "Git", "Agile / Scrum"] },
      ],
    },
    contact: {
      title: "Porozmawiajmy",
      body: "Masz produkt, który potrzebuje drugiej pary oczu — albo proces QA, który wymaga uporządkowania? Napisz.",
      cta: "Wyślij e-mail",
    },
    footer: "Tworzone w Rzeszowie, Polska.",
    theme: { light: "Jasny", dark: "Ciemny" },
  },
} as const;

export const EMAIL = "damian.wilusz@example.com";
