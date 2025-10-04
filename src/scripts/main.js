const API_BASE = '/api';

const STORAGE_KEYS = {
  app: 'animeverse-app-state-v4',
  session: 'animeverse-session-v4',
  language: 'animeverse-language-v1',
};

const roleHierarchy = [
  'member',
  'junior-moderator',
  'senior-moderator',
  'junior-administrator',
  'senior-administrator',
];

const roleMeta = {
  member: {
    label: 'Member',
    badgeClass: 'bg-slate-800/70 text-slate-100',
    blipClass: 'bg-slate-500',
  },
  'junior-moderator': {
    label: 'Junior Moderator',
    badgeClass: 'bg-blue-500/20 text-blue-200 border border-blue-500/40',
    blipClass: 'bg-blue-400',
  },
  'senior-moderator': {
    label: 'Senior Moderator',
    badgeClass: 'bg-indigo-500/20 text-indigo-200 border border-indigo-500/40',
    blipClass: 'bg-indigo-400',
  },
  'junior-administrator': {
    label: 'Junior Administrator',
    badgeClass: 'bg-amber-500/20 text-amber-200 border border-amber-500/40',
    blipClass: 'bg-amber-400',
  },
  'senior-administrator': {
    label: 'Senior Administrator',
    badgeClass: 'bg-rose-500/20 text-rose-200 border border-rose-500/40',
    blipClass: 'bg-rose-400',
  },
};

const heroData = [
  {
    name: 'Kitsune Blade',
    role: 'Blade Dancer',
    rating: 4,
    specialty: 'Burst Damage',
    image: 'https://i.waifu.pics/~p5W9~k.png',
    accent: 'primary',
  },
  {
    name: 'Nebula Serenade',
    role: 'Cosmic Bard',
    rating: 5,
    specialty: 'Support',
    image: 'https://i.waifu.pics/Jngw47s.png',
    accent: 'secondary',
  },
  {
    name: 'Shadow Reaper',
    role: 'Nightblade',
    rating: 5,
    specialty: 'Stealth',
    image: 'https://i.waifu.pics/HjkIsP1.png',
    accent: 'primary',
  },
  {
    name: 'Celestial Mage',
    role: 'Starcaller',
    rating: 3,
    specialty: 'AoE Control',
    image: 'https://i.waifu.pics/EBLUY7P.png',
    accent: 'secondary',
  },
  {
    name: 'Iron Samurai',
    role: 'Aegis Guardian',
    rating: 4,
    specialty: 'Defense',
    image: 'https://i.waifu.pics/~VVdn7B.png',
    accent: 'primary',
  },
  {
    name: 'Crimson Valkyrie',
    role: 'Sky Sentinel',
    rating: 5,
    specialty: 'Air Superiority',
    image: 'https://i.waifu.pics/Wc5WkuE.png',
    accent: 'secondary',
  },
  {
    name: 'Lunar Oracle',
    role: 'Time Weaver',
    rating: 4,
    specialty: 'Temporal Magic',
    image: 'https://i.waifu.pics/tZifc8D.png',
    accent: 'primary',
  },
  {
    name: 'Synthwave Siren',
    role: 'Cyber Diva',
    rating: 5,
    specialty: 'Crowd Control',
    image: 'https://i.waifu.pics/qPWyHQ0.png',
    accent: 'secondary',
  },
  {
    name: 'Data Prism Renner',
    role: 'Probability Oracle',
    rating: 4,
    specialty: 'Meta Forecasts',
    image: 'https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/AI/Princess_Renner_Machine_Learning_A_Probabilistic_Perspective.png',
    accent: 'primary',
  },
  {
    name: 'Compiler Idol Ai',
    role: 'Rust Guardian',
    rating: 3,
    specialty: 'Reactive Shields',
    image: 'https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Rust/Ai_Mie_Reading_The_Rust_Programming_Language.png',
    accent: 'secondary',
  },
  {
    name: 'Circuit Whisper Lain',
    role: 'Signal Architect',
    rating: 5,
    specialty: 'Network Control',
    image: 'https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Go/Iwakura_Lain_Reading_Introducing_Go.png',
    accent: 'primary',
  },
  {
    name: 'Python Pulse Reina',
    role: 'Serpent Savant',
    rating: 4,
    specialty: 'Algorithmic Support',
    image: 'https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Python/Aharen_Reina_Holding_Python_Programming_Language.png',
    accent: 'secondary',
  },
  {
    name: 'Frieren Flux',
    role: 'Tactical Enchanter',
    rating: 5,
    specialty: 'Adaptive Buffs',
    image: 'https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Go/Frieren_Fern_Hands_On_Software_Engineering_With_Golang.png',
    accent: 'primary',
  },
  {
    name: 'Minako Vector',
    role: 'Learning Strategist',
    rating: 4,
    specialty: 'Battle Analytics',
    image: 'https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/AI/Minako_Aino_ESL_Hastie.png',
    accent: 'secondary',
  },
];

const featureData = [
  {
    title: 'Clan Nexus',
    description:
      'Coordinate with players worldwide, unlock shared tech trees, and climb seasonal alliance rankings together.',
    icon: 'users',
    tone: 'primary',
  },
  {
    title: 'Aurora Arena',
    description:
      'Engage in real-time PvP with rotating rule-sets, unique map hazards, and cinematic finishing moves.',
    icon: 'aperture',
    tone: 'secondary',
  },
  {
    title: 'Mythic Archives',
    description:
      'Collect, ascend, and customize anime legends with talent synergies and pixel-perfect skins.',
    icon: 'star',
    tone: 'primary',
  },
  {
    title: 'Arcade Chronicles',
    description:
      'Story-driven raids feature animated cut-ins, branching dialogue, and unlockable character duets.',
    icon: 'film',
    tone: 'secondary',
  },
  {
    title: 'Idol Live Ops',
    description:
      'Stream arena takeovers with rhythm mini-games, holographic DJs, and seasonal voice packs.',
    icon: 'music',
    tone: 'primary',
  },
  {
    title: 'Starlight Workshop',
    description:
      'Craft cosmetics with shader remixing, chroma variants, and community-submitted outfit drops.',
    icon: 'framer',
    tone: 'secondary',
  },
];

const translations = {
  en: {
    'nav.story': 'Story',
    'nav.features': 'Features',
    'nav.heroes': 'Heroes',
    'nav.suggestions': 'Suggestions',
    'nav.moderation': 'Moderation',
    'nav.staff': 'Staff Paths',
    'nav.chat': 'Forum Chat',
    'nav.rules': 'Rules',
    'nav.news': 'News',
    'nav.register': 'Register',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    'nav.loggedAs': 'Logged in as',
    'chat.title': 'Forum Lobby',
    'chat.subtitle': 'Discuss strategies, share art, and coordinate raid rosters.',
    'chat.formLabel': 'Message',
    'chat.submit': 'Send Message',
    'chat.placeholder': 'Keep it respectful and spoiler tagged when needed...',
  },
  ru: {
    'nav.story': 'Сюжет',
    'nav.features': 'Особенности',
    'nav.heroes': 'Героини',
    'nav.suggestions': 'Предложения',
    'nav.moderation': 'Модерация',
    'nav.staff': 'Команда',
    'nav.chat': 'Чат форума',
    'nav.rules': 'Правила',
    'nav.news': 'Новости',
    'nav.register': 'Регистрация',
    'nav.login': 'Вход',
    'nav.logout': 'Выход',
    'nav.loggedAs': 'Вы вошли как',
    'chat.title': 'Форумный холл',
    'chat.subtitle': 'Обсуждайте стратегии, делитесь артом и собирайте рейдовые отряды.',
    'chat.formLabel': 'Сообщение',
    'chat.submit': 'Отправить',
    'chat.placeholder': 'Соблюдайте уважение и помечайте спойлеры...',
  },
};

const defaultAppState = () => ({
  suggestions: [
    {
      id: 's-latenight',
      title: 'Midnight Idol Showdown',
      category: 'Events',
      detail:
        'Weekly roguelite co-op gauntlet with rhythm sync QTEs and duet finishers. Rewards include neon trail cosmetics and exclusive soundtrack unlocks.',
      authorId: 'seed-aster',
      authorName: 'AsterBlade',
      role: 'senior-moderator',
      status: 'under-review',
      createdAt: '2025-02-02T20:22:00.000Z',
      votes: 128,
      voters: ['seed-aster', 'seed-nova', 'seed-luma'],
    },
    {
      id: 's-housing',
      title: 'Guild Sanctuary Housing',
      category: 'Social',
      detail:
        'Instanced hideouts with manga panels on the walls, customizable soundtrack jukeboxes, and clan trophy capsules.',
      authorId: 'seed-nova',
      authorName: 'NovaCaster',
      role: 'senior-administrator',
      status: 'accepted',
      createdAt: '2025-01-14T11:10:00.000Z',
      votes: 214,
      voters: ['seed-nova', 'seed-aster'],
    },
  ],
  applications: [
    {
      id: 'a-luma',
      userId: 'seed-luma',
      role: 'senior-moderator',
      status: 'pending',
      pitch:
        'I coordinate timezone-spanning raids and run weekly moderation reports. Ready to scale mentorship to the entire mod cohort.',
      createdAt: '2025-03-18T18:00:00.000Z',
    },
  ],
  chat: [
    {
      id: 'm-welcome',
      userId: 'seed-nova',
      author: 'NovaCaster',
      role: 'senior-administrator',
      message:
        'Welcome to the AnimeVerse forum lobby! Keep it cozy and report anything spicy. ✨',
      createdAt: '2025-01-05T14:30:00.000Z',
      status: 'published',
      pinned: true,
      avatar: 'https://i.waifu.pics/Jngw47s.png',
    },
    {
      id: 'm-community',
      userId: 'seed-aster',
      author: 'AsterBlade',
      role: 'senior-moderator',
      message: 'Share your best Stormy Rimuru builds and cursed memes in the gallery thread!',
      createdAt: '2025-01-07T17:12:00.000Z',
      status: 'published',
      pinned: false,
      avatar:
        'https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Rust/Astolfo_Learning_rust.png',
    },
  ],
  moderation: {
    warnings: {},
    mutes: {},
  },
});

let appState = loadAppState();
let sessionUser = loadSession();
let currentLanguage = loadLanguage();

function loadAppState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.app);
    if (!stored) return defaultAppState();
    const parsed = JSON.parse(stored);
    return {
      ...defaultAppState(),
      ...parsed,
      moderation: parsed.moderation || { warnings: {}, mutes: {} },
    };
  } catch (error) {
    console.warn('Failed to load stored state', error);
    return defaultAppState();
  }
}

function saveAppState() {
  try {
    localStorage.setItem(STORAGE_KEYS.app, JSON.stringify(appState));
  } catch (error) {
    console.warn('Unable to persist app state', error);
  }
}

function loadSession() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.session);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn('Unable to parse stored session', error);
    return null;
  }
}

function saveSession(user) {
  try {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.session);
    }
  } catch (error) {
    console.warn('Unable to update stored session', error);
  }
}

function loadLanguage() {
  return localStorage.getItem(STORAGE_KEYS.language) || 'en';
}

function saveLanguage(lang) {
  localStorage.setItem(STORAGE_KEYS.language, lang);
}

function randomAvatar() {
  const hero = heroData[Math.floor(Math.random() * heroData.length)];
  return hero?.image || 'https://i.waifu.pics/Wc5WkuE.png';
}

function roleRank(role) {
  return roleHierarchy.indexOf(role);
}

function hasModeratorPowers(role) {
  return roleRank(role) >= roleRank('junior-moderator');
}

function hasAdminPowers(role) {
  return roleRank(role) >= roleRank('junior-administrator');
}

function roleBadge(role) {
  const meta = roleMeta[role] || roleMeta.member;
  return `<span class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${meta.badgeClass}"><span class="h-2 w-2 rounded-full ${meta.blipClass}"></span>${meta.label}</span>`;
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (error) {
    return 'Just now';
  }
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (key && dict[key]) {
      node.textContent = dict[key];
    }
  });
  const currentLangNode = document.querySelector('[data-current-lang]');
  if (currentLangNode) currentLangNode.textContent = lang.toUpperCase();
  document.documentElement.lang = lang;
}

function setLanguage(lang) {
  currentLanguage = lang;
  saveLanguage(lang);
  applyLanguage(lang);
}

function toggleLanguageMenu(show) {
  const menu = document.querySelector('[data-lang-menu]');
  if (!menu) return;
  const shouldShow = typeof show === 'boolean' ? show : menu.classList.contains('hidden');
  menu.classList.toggle('hidden', !shouldShow);
}

function setSession(user) {
  sessionUser = user;
  if (user && !user.avatar) {
    sessionUser.avatar = randomAvatar();
  }
  saveSession(sessionUser);
  updateAuthUI();
}

function appendUserRecord(user) {
  if (!user) return;
  // Keep lightweight cache for nav badges
  appState.registeredUsers = appState.registeredUsers || [];
  const existing = appState.registeredUsers.find((entry) => entry.email === user.email);
  if (!existing) {
    appState.registeredUsers.push({ id: user.id, username: user.username, role: user.role });
    saveAppState();
  }
}

function updateAuthUI() {
  const guestBlocks = document.querySelectorAll('[data-auth-guest]');
  const profileShells = document.querySelectorAll('[data-profile-shell]');
  const profileButtons = document.querySelectorAll('[data-profile-trigger]');
  const profileMenus = document.querySelectorAll('[data-profile-menu]');
  const profileNames = document.querySelectorAll('[data-profile-name]');
  const profileAvatars = document.querySelectorAll('[data-profile-avatar]');
  const mobileAuthBlocks = document.querySelectorAll('[data-mobile-auth]');
  const mobileProfiles = document.querySelectorAll('[data-mobile-profile]');
  const loggedAsLabels = document.querySelectorAll('[data-i18n="nav.loggedAs"]');

  guestBlocks.forEach((node) => node.classList.toggle('hidden', Boolean(sessionUser)));
  profileShells.forEach((shell) => shell.classList.toggle('hidden', !sessionUser));
  profileButtons.forEach((button) => button.classList.toggle('hidden', !sessionUser));
  profileMenus.forEach((menu) => menu.classList.add('hidden'));
  mobileAuthBlocks.forEach((node) => node.classList.toggle('hidden', Boolean(sessionUser)));
  mobileProfiles.forEach((node) => node.classList.toggle('hidden', !sessionUser));

  profileNames.forEach((node) => {
    node.textContent = sessionUser?.username || 'Agent';
  });
  profileAvatars.forEach((img) => {
    img.src = sessionUser?.avatar || randomAvatar();
    img.alt = sessionUser ? `${sessionUser.username} avatar` : 'Profile avatar';
  });
  loggedAsLabels.forEach((label) => {
    label.textContent = translations[currentLanguage]?.['nav.loggedAs'] || translations.en['nav.loggedAs'];
  });
}

function renderHeroGrid() {
  const container = document.querySelector('[data-hero-grid]');
  if (!container) return;
  const cards = heroData.map((hero) => {
    const highlight = hero.accent === 'primary' ? 'bg-primary' : 'bg-secondary text-dark';
    return `
      <article class="glass-panel hero-card rounded-2xl p-4">
        <figure class="relative overflow-hidden rounded-xl">
          <img src="${hero.image}" alt="${hero.name}" loading="lazy" decoding="async" class="h-56 w-full object-cover" />
          <span class="badge ${highlight} absolute left-3 top-3">${hero.specialty}</span>
        </figure>
        <div class="mt-5 space-y-2">
          <h3 class="text-xl font-semibold text-white">${hero.name}</h3>
          <p class="text-sm text-slate-300">${hero.role}</p>
          <div class="flex items-center justify-between text-xs text-slate-400">
            <span>Power Index</span>
            <span class="flex gap-1">${renderStars(hero.rating)}</span>
          </div>
        </div>
      </article>`;
  });
  container.innerHTML = cards.join('');
}

function renderFeatureGrid() {
  const container = document.querySelector('[data-feature-grid]');
  if (!container) return;
  container.innerHTML = featureData
    .map(
      (feature) => `
        <article class="glass-panel rounded-2xl p-6">
          <span class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${
            feature.tone === 'primary' ? 'from-primary/20 to-transparent' : 'from-secondary/20 to-transparent'
          }">
            <i data-feather="${feature.icon}" class="${feature.tone === 'primary' ? 'text-primary' : 'text-secondary'} h-6 w-6"></i>
          </span>
          <h3 class="mt-4 text-xl font-semibold text-white">${feature.title}</h3>
          <p class="mt-2 text-sm text-slate-300">${feature.description}</p>
        </article>`
    )
    .join('');
}

function renderSuggestions() {
  const container = document.querySelector('[data-suggestion-list]');
  if (!container) return;
  const sorted = [...appState.suggestions].sort((a, b) => b.votes - a.votes);
  const user = sessionUser;

  container.innerHTML = sorted
    .map((suggestion) => {
      const hasVoted = user ? suggestion.voters?.includes(user.id) : false;
      const statusTone =
        suggestion.status === 'accepted'
          ? 'text-emerald-300'
          : suggestion.status === 'rejected'
          ? 'text-rose-300'
          : 'text-amber-300';
      const canModerate = user && hasModeratorPowers(user.role);

      return `
        <article class="glass-panel rounded-3xl border border-white/5 p-6 shadow-lg">
          <header class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex flex-col gap-1">
              <h3 class="text-lg font-semibold text-white">${suggestion.title}</h3>
              <div class="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span class="rounded-full bg-slate-800/70 px-3 py-1">${suggestion.category}</span>
                ${roleBadge(suggestion.role)}
                <span>${suggestion.authorName}</span>
                <span>${formatDate(suggestion.createdAt)}</span>
              </div>
            </div>
            <div class="flex flex-col items-end text-right">
              <span class="text-3xl font-bold text-primary">${suggestion.votes}</span>
              <span class="text-xs text-slate-400">Supporters</span>
            </div>
          </header>
          <p class="mt-4 text-sm leading-relaxed text-slate-200">${suggestion.detail}</p>
          <footer class="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span class="font-semibold ${statusTone} uppercase tracking-wide">${suggestion.status.replace('-', ' ')}</span>
            ${
              user
                ? `<button class="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary/30 disabled:opacity-60" data-suggestion-action="vote" data-suggestion-id="${suggestion.id}" ${hasVoted ? 'disabled' : ''}>
                    <i data-feather="thumbs-up" class="h-4 w-4"></i>
                    ${hasVoted ? 'Voted' : 'Support'}
                  </button>`
                : ''
            }
            ${
              canModerate
                ? `<div class="inline-flex gap-2">
                    <button class="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200 hover:bg-emerald-500/30" data-suggestion-action="set-status" data-suggestion-status="accepted" data-suggestion-id="${suggestion.id}">Approve</button>
                    <button class="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-200 hover:bg-amber-500/30" data-suggestion-action="set-status" data-suggestion-status="under-review" data-suggestion-id="${suggestion.id}">Escalate</button>
                    <button class="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-200 hover:bg-rose-500/30" data-suggestion-action="set-status" data-suggestion-status="rejected" data-suggestion-id="${suggestion.id}">Reject</button>
                  </div>`
                : ''
            }
          </footer>
        </article>`;
    })
    .join('');

  if (!sorted.length) {
    container.innerHTML =
      '<p class="rounded-3xl border border-dashed border-white/10 bg-slate-900/70 p-6 text-center text-sm text-slate-400">No suggestions yet. Submit the first idea to shape the next season!</p>';
  }

  if (window.feather) {
    window.feather.replace();
  }
}

function handleSuggestionSubmit(event) {
  event.preventDefault();
  const user = sessionUser;
  const form = event.target;
  const feedback = form.querySelector('[data-form-feedback]');
  if (feedback) feedback.textContent = '';

  if (!user) {
    if (feedback) feedback.textContent = 'Log in to share your idea.';
    return;
  }

  const title = form.elements.title?.value?.trim();
  const detail = form.elements.detail?.value?.trim();
  const category = form.elements.category?.value?.trim() || 'General';

  if (!title || !detail) {
    if (feedback) feedback.textContent = 'Include a title and details.';
    return;
  }

  appState.suggestions.push({
    id: `s-${Math.random().toString(36).slice(2, 9)}`,
    title,
    detail,
    category,
    authorId: user.id,
    authorName: user.username,
    role: user.role || 'member',
    status: 'under-review',
    createdAt: new Date().toISOString(),
    votes: 1,
    voters: [user.id],
  });

  saveAppState();
  renderSuggestions();
  renderModerationQueues();
  form.reset();
  if (feedback) feedback.textContent = 'Suggestion submitted!';
}

function handleSuggestionAction(event) {
  const target = event.target.closest('[data-suggestion-action]');
  if (!target) return;
  const user = sessionUser;
  if (!user) return;

  const id = target.getAttribute('data-suggestion-id');
  const action = target.getAttribute('data-suggestion-action');
  const entry = appState.suggestions.find((item) => item.id === id);
  if (!entry) return;

  if (action === 'vote') {
    if (!entry.voters.includes(user.id)) {
      entry.votes += 1;
      entry.voters.push(user.id);
    }
  } else if (action === 'set-status' && hasModeratorPowers(user.role)) {
    entry.status = target.getAttribute('data-suggestion-status') || entry.status;
  }

  saveAppState();
  renderSuggestions();
  renderModerationQueues();
}

function renderApplications() {
  const user = sessionUser;
  const myContainer = document.querySelector('[data-application-status]');
  const reviewContainer = document.querySelector('[data-application-review]');

  if (myContainer) {
    if (!user) {
      myContainer.innerHTML =
        '<p class="rounded-3xl border border-dashed border-white/10 bg-slate-900/70 p-6 text-sm text-slate-400">Sign in to view your progression applications.</p>';
    } else {
      const mine = appState.applications.filter((app) => app.userId === user.id);
      myContainer.innerHTML = mine
        .map(
          (app) => `
            <article class="glass-panel rounded-3xl border border-white/5 p-5">
              <header class="flex flex-wrap items-center justify-between gap-2">
                <h4 class="text-base font-semibold text-white">${roleMeta[app.role]?.label || app.role}</h4>
                <span class="text-xs font-semibold uppercase tracking-wide ${
                  app.status === 'approved'
                    ? 'text-emerald-300'
                    : app.status === 'rejected'
                    ? 'text-rose-300'
                    : 'text-amber-300'
                }">${app.status}</span>
              </header>
              <p class="mt-3 text-sm leading-relaxed text-slate-200">${app.pitch}</p>
              <p class="mt-2 text-xs text-slate-400">Submitted ${formatDate(app.createdAt)}</p>
            </article>`
        )
        .join('');

      if (!mine.length) {
        myContainer.innerHTML =
          '<p class="rounded-3xl border border-dashed border-white/10 bg-slate-900/70 p-6 text-sm text-slate-400">No applications yet. Choose a track and send us your pitch!</p>';
      }
    }
  }

  if (reviewContainer) {
    const reviewer = user && hasAdminPowers(user.role);
    if (!reviewer) {
      reviewContainer.innerHTML =
        '<p class="rounded-3xl border border-dashed border-white/10 bg-slate-900/70 p-6 text-sm text-slate-400">Administrator access required to review applications.</p>';
    } else {
      const pending = appState.applications.filter((app) => app.status === 'pending');
      reviewContainer.innerHTML = pending
        .map(
          (app) => `
            <article class="glass-panel rounded-3xl border border-white/5 p-5">
              <header class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex flex-col">
                  <h4 class="text-base font-semibold text-white">${roleMeta[app.role]?.label || app.role}</h4>
                  <span class="text-xs text-slate-400">${formatDate(app.createdAt)}</span>
                </div>
                <span class="text-xs font-semibold uppercase text-amber-300">Pending</span>
              </header>
              <p class="mt-3 text-sm leading-relaxed text-slate-200">${app.pitch}</p>
              <footer class="mt-4 flex flex-wrap gap-2 text-xs">
                <button class="rounded-full bg-emerald-500/20 px-3 py-1 font-semibold text-emerald-200 hover:bg-emerald-500/30" data-application-action="set-status" data-application-status="approved" data-application-id="${app.id}">Approve</button>
                <button class="rounded-full bg-amber-500/20 px-3 py-1 font-semibold text-amber-200 hover:bg-amber-500/30" data-application-action="set-status" data-application-status="pending" data-application-id="${app.id}">Hold</button>
                <button class="rounded-full bg-rose-500/20 px-3 py-1 font-semibold text-rose-200 hover:bg-rose-500/30" data-application-action="set-status" data-application-status="rejected" data-application-id="${app.id}">Reject</button>
              </footer>
            </article>`
        )
        .join('');

      if (!pending.length) {
        reviewContainer.innerHTML =
          '<p class="rounded-3xl border border-dashed border-white/10 bg-slate-900/70 p-6 text-sm text-slate-400">No pending applications. Keep inspiring the squads!</p>';
      }
    }
  }
}

function handleApplicationSubmit(event) {
  event.preventDefault();
  const user = sessionUser;
  const form = event.target;
  const feedback = form.querySelector('[data-form-feedback]');
  if (feedback) feedback.textContent = '';
  const role = form.getAttribute('data-role');

  if (!user) {
    if (feedback) feedback.textContent = 'Log in to submit applications.';
    return;
  }

  const pitch = form.elements.pitch?.value?.trim();
  if (!pitch) {
    if (feedback) feedback.textContent = 'Tell us why you\'re a fit.';
    return;
  }

  appState.applications.push({
    id: `app-${Math.random().toString(36).slice(2, 9)}`,
    userId: user.id,
    role,
    pitch,
    status: 'pending',
    createdAt: new Date().toISOString(),
  });

  saveAppState();
  renderApplications();
  renderModerationQueues();
  form.reset();
  if (feedback) feedback.textContent = 'Application received!';
}

function handleApplicationAction(event) {
  const button = event.target.closest('[data-application-action]');
  if (!button) return;
  const user = sessionUser;
  if (!user || !hasAdminPowers(user.role)) return;

  const id = button.getAttribute('data-application-id');
  const status = button.getAttribute('data-application-status');
  const entry = appState.applications.find((app) => app.id === id);
  if (!entry) return;

  entry.status = status;
  saveAppState();
  renderApplications();
  renderModerationQueues();
}

function renderModerationQueues() {
  const user = sessionUser;
  const chatContainer = document.querySelector('[data-moderation-chat]');
  const suggestionContainer = document.querySelector('[data-moderation-suggestions]');
  const dashboardMetrics = document.querySelector('[data-moderation-metrics]');

  if (chatContainer) {
    if (!user || !hasModeratorPowers(user.role)) {
      chatContainer.innerHTML =
        '<p class="rounded-2xl border border-dashed border-white/10 bg-slate-900/70 p-5 text-sm text-slate-400">Moderation access needed.</p>';
    } else {
      const flagged = appState.chat.filter((msg) => msg.status === 'flagged');
      chatContainer.innerHTML = flagged
        .map(
          (msg) => `
            <article class="glass-panel rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4">
              <header class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="font-semibold text-white">${msg.author}</span>
                  ${roleBadge(msg.role)}
                </div>
                <span class="text-xs text-rose-200">${formatDate(msg.createdAt)}</span>
              </header>
              <p class="mt-2 text-sm text-rose-100">${msg.message}</p>
              <p class="mt-2 text-xs text-rose-200/80">${msg.reason || 'Flagged by community'}</p>
              <footer class="mt-4 flex gap-2 text-xs">
                <button class="rounded-full bg-emerald-500/20 px-3 py-1 font-semibold text-emerald-200 hover:bg-emerald-500/30" data-chat-action="resolve" data-chat-id="${msg.id}">Approve</button>
                <button class="rounded-full bg-rose-500/20 px-3 py-1 font-semibold text-rose-200 hover:bg-rose-500/30" data-chat-action="remove" data-chat-id="${msg.id}">Remove</button>
              </footer>
            </article>`
        )
        .join('');

      if (!flagged.length) {
        chatContainer.innerHTML =
          '<p class="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-5 text-sm text-emerald-200">No chat reports pending. Great job keeping things cozy!</p>';
      }
    }
  }

  if (suggestionContainer) {
    const canModerate = user && hasModeratorPowers(user.role);
    if (!canModerate) {
      suggestionContainer.innerHTML =
        '<p class="rounded-2xl border border-dashed border-white/10 bg-slate-900/70 p-5 text-sm text-slate-400">Moderator access needed for suggestion triage.</p>';
    } else {
      const backlog = appState.suggestions.filter((item) => item.status === 'under-review');
      suggestionContainer.innerHTML = backlog
        .map(
          (item) => `
            <article class="glass-panel rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4">
              <header class="flex flex-wrap items-center justify-between gap-2">
                <span class="font-semibold text-white">${item.title}</span>
                <span class="text-xs text-amber-200">${item.category}</span>
              </header>
              <p class="mt-2 text-sm text-amber-100">${item.detail}</p>
              <footer class="mt-4 text-xs text-amber-200">Votes: ${item.votes}</footer>
            </article>`
        )
        .join('');

      if (!backlog.length) {
        suggestionContainer.innerHTML =
          '<p class="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-5 text-sm text-emerald-200">No suggestions awaiting review.</p>';
      }
    }
  }

  if (dashboardMetrics) {
    const totalUsers = (appState.registeredUsers?.length || 0) + 3; // include seed accounts
    const totalSuggestions = appState.suggestions.length;
    const approved = appState.suggestions.filter((item) => item.status === 'accepted').length;
    const pendingApps = appState.applications.filter((item) => item.status === 'pending').length;
    const flaggedChats = appState.chat.filter((item) => item.status === 'flagged').length;

    dashboardMetrics.innerHTML = `
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="stat-pill">
          <span class="stat-label">Registered Agents</span>
          <span class="stat-value">${totalUsers}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Ideas Submitted</span>
          <span class="stat-value">${totalSuggestions}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Ideas Approved</span>
          <span class="stat-value">${approved}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Pending Apps</span>
          <span class="stat-value">${pendingApps}
