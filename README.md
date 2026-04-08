<p align="center">
  <img src="./src/assets/logo/logoCLIA.jpg" alt="Centrale Lyon IA" width="120" />
</p>

<h1 align="center">Centrale Lyon IA — Site de l'asso</h1>

<p align="center">
  Site vitrine moderne du Club Intelligence Artificielle de l’École Centrale de Lyon : hackathon, projets, équipe et contact.<br/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React_Router-6-CA4245?logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Zod-3-3E67B3?logo=zod&logoColor=white" alt="Zod" />
</p>

---

## Fonctionnalités

- **Page d’accueil** en one-page : navigation par ancres, défilement fluide et fond visuel réactif au scroll (`AnimatedBackground`)
- **Section hackathon** — mise en avant d’**Unboxed** (édition mars 2025) avec liens vers plus d’infos et galerie (URLs à compléter dans le code)
- **Partenaires** — logos et liens (GE HealthCare, Mistral AI, PulseHeberg, Lovable, Centrale Lyon Conseil)
- **À propos, projets, équipe** — contenu éditorial structuré en sections
- **Formulaire de contact** — envoi vers une ou plusieurs adresses internes via **Resend** (API Node dédiée)
- **Page Espace étudiant** (`/espace-etudiant`) — placeholder pour de futurs outils réservés aux étudiants (authentification prévue)
- **Interface** — composants [shadcn/ui](https://ui.shadcn.com) (Radix), notifications [Sonner](https://sonner.emilkowal.ski/), formulaires compatibles **React Hook Form** + **Zod**

> **Note :** un composant `NewsletterSection` existe dans le dépôt mais n’est pas monté sur la page d’accueil ; l’inscription newsletter n’est pas encore branchée à une API.

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Build & dev | [Vite 5](https://vitejs.dev) |
| UI | [React 18](https://react.dev) |
| Langage | TypeScript 5 |
| Routage | [React Router 6](https://reactrouter.com) |
| Style | [Tailwind CSS 3](https://tailwindcss.com) + tokens / utilitaires du thème |
| Composants | [Radix UI](https://www.radix-ui.com), [shadcn/ui](https://ui.shadcn.com), [Lucide React](https://lucide.dev) |
| Données client | [TanStack Query](https://tanstack.com/query) |
| Validation | [Zod](https://zod.dev), [React Hook Form](https://react-hook-form.com) |
| API contact | Node.js (`http`) + [Resend](https://resend.com) |
| Tests | [Vitest](https://vitest.dev), [Playwright](https://playwright.dev) (dev) |

---

## Prérequis

- **Node.js** ≥ 18 (recommandé : LTS actuelle)
- Pour le formulaire de contact en local ou en prod : compte **Resend**, clé API et domaine / adresse d’expéditeur conformes à votre configuration Resend

---

## Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/<org>/CLIA.git
cd CLIA
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d’environnement

Le serveur Node charge un fichier **`.env`** à la racine du projet (voir `server/index.mjs`).

```bash
cp .env.example .env
```

Remplir `.env` :

```env
# Resend — formulaire de contact (/api/contact)
RESEND_API_KEY=re_xxxxxxxx
CONTACT_FROM_EMAIL=contact@votredomaine.fr    # expéditeur vérifié dans Resend
CONTACT_NOTIFY_EMAILS=alice@example.com,bob@example.com   # destinataires internes (séparés par des virgules)

# Optionnel — production (serveur statique + API)
# PORT=3000
```

Sans ces variables, l’API répond `503` avec `contact_not_configured` et le front affiche un message explicite.

### 4. Lancer le site en développement

Le front Vite tourne sur le port **8080** et proxifie `/api` vers l’API sur **8787**. Les deux processus sont lancés ensemble :

```bash
npm run dev:full
```

- Application : [http://localhost:8080](http://localhost:8080)  
- API seule (si besoin) : `npm run dev:api` → [http://127.0.0.1:8787](http://127.0.0.1:8787)

### 5. Build et exécution en production

```bash
npm run build
npm start
```

Par défaut, le serveur écoute sur le port **3000** (ou la valeur de `PORT`) et sert le dossier `dist/` en **SPA** (fallback vers `index.html`) tout en exposant `POST /api/contact`.

---

## Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Vite seul (port 8080) — sans API contact sauf si vous lancez `dev:api` à part |
| `npm run dev:api` | API Node seule sur le port 8787 |
| `npm run dev:full` | Vite + API (recommandé en local) |
| `npm run build` | Build de production dans `dist/` |
| `npm start` | Sert `dist/` + `/api/contact` (Node) |
| `npm run preview` | Prévisualisation du build Vite (sans l’API Node) |
| `npm run lint` | ESLint |
| `npm test` | Vitest (une fois) |
| `npm run test:watch` | Vitest en mode watch |

---

## Structure du projet

```
├── server/
│   └── index.mjs          # Serveur HTTP : fichiers statiques (dist/) + POST /api/contact (Resend)
├── src/
│   ├── App.tsx            # Routes (/, /espace-etudiant, 404)
│   ├── main.tsx           # Point d’entrée React
│   ├── assets/            # Images, logos partenaires, etc.
│   ├── components/        # Sections (Hero, Hackathon, Contact…) + ui/ (shadcn)
│   ├── hooks/             # Hooks réutilisables (nav, logo accueil, etc.)
│   ├── lib/               # Utilitaires (ex. smoothScroll)
│   └── pages/             # Index, Espace étudiant, NotFound
├── index.html
├── vite.config.ts         # Alias @, proxy /api → 127.0.0.1:8787
└── .env.example
```

---

## API Contact

- **Endpoint :** `POST /api/contact`
- **Corps JSON :** `{ "name": string, "email": string, "message": string }`
- **Comportement :** envoi d’un e-mail texte aux adresses `CONTACT_NOTIFY_EMAILS`, avec `reply_to` sur l’e-mail du visiteur.

En développement, le navigateur appelle `/api/contact` sur l’origine Vite ; le proxy Vite transmet vers l’API sur 8787.

---

## Crédits

Projet porté par le **[Club Intelligence Artificielle de Centrale Lyon](https://www.linkedin.com/company/centrale-lyon-ia/)**.

Partenaires mis en avant sur le site : **Centrale Lyon Conseil** · **GE HealthCare** · **Mistral AI** · **Lovable** · **PulseHeberg**
