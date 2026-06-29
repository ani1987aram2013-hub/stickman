const GAME_LANGS = {
  hy: {
    // game titles
    gameTitle1:   'Ձողամارد ①',
    gameTitle2:   'Ձողամارد ②',
    g3TitleInf:   'Ձողամارد ③ — ∞',
    g3TitleEasy:  'Ձողամارد ③ — ★ հешт ∞',
    g3Title2pInf: 'Ձողամارد ③ — 2P ∞',
    g3Title2pH:   'Ձողամارد ③ — 2P ❤',
    g3TitleAI:    'Ձողամارд ③ — vs AI ❤',
    g0Title:      'Ձողամارд',
    g0Subtitle:   '2 հоğatol — araĵiny 3 klor наğtoly',
    // nav / ui
    level_word:   'Марdum',
    move:         'шarж',
    jump:         'ćatk',
    restart:      'ρestart',
    menuBack:     '← Мenyu',
    easy:         'heшт',
    normal:       'normal',
    hard:         'dżwar',
    vhard:        'шat dżwar',
    extreme:      'ĒKSTRIM',
    chooseLevel:  'yntrir makardak',
    // win screen (stickman ①②)
    winTitle:     'Наğtecir! 🏆',
    winCoins:     'Мetağadram: {0} / {1}',
    winRestart:   'R — norits',
    // stickman ③ canvas
    starBanner:   '★  Brir asteğy!  ★',
    gameOver:     'GAME OVER',
    newRecord:    'ՆՈՐ ՌEKORD!',
    restartHint:  '[R]  ρestart',
    // multiplayer
    playerWin:    'P{0} ❤ НАĞTEC!',
    youWin:       'ԴՈՒ НАĞTECIR!',
    aiWin:        'AI НАĞTECEC!',
    youLabel:     'ԴՈՒ',
    aiPlays:      'AI — кhаğum e inkwyuro-pec',
    // stickman_2p match
    roundWin:     '{0} Наğthec! ⭐',
    matchWin:     '{0} Наğthec! 🏆',
    newMatch:     'R — нор match',
    // index.html card data
    title:        'Ձołamard',
    subtitle:     'yntrir makardak',
    level1: 'Мardum 1', level2: 'Мardum 2', level3: 'Мardum 3',
    level4: 'Мardum 4', level5: 'Мardum 5',
    g3_1p:   '1 Нogi',    g3_1p_d:  'ćatk ↑',
    g3_2p:   '2 Нogi',    g3_2p_d:  'кoop ↑',
    g3_2ph:  '2 Нogi ❤', g3_2ph_d: 'srtikner ↑',
    g3_ai:   'vs AI ❤',  g3_ai_d:  'AI ćradatzor ↑',
    footer:  '← / → шarж  ·  ↑ / Space ćatk  ·  R ρestart',
    cardTitle1:   'Ձołamard ①',
    cardTitle2:   'Ձołamard ②',
    cardTitle3:   'Ձołamard ③ ↑',
  },
  ru: {
    gameTitle1:   'Палочник ①',
    gameTitle2:   'Палочник ②',
    g3TitleInf:   'Палочник ③ — ∞',
    g3TitleEasy:  'Палочник ③ — ★ Легко ∞',
    g3Title2pInf: 'Палочник ③ — 2P ∞',
    g3Title2pH:   'Палочник ③ — 2P ❤',
    g3TitleAI:    'Палочник ③ — vs ИИ ❤',
    g0Title:      'Палочник',
    g0Subtitle:   '2 Игрока — первый до 3 раундов побеждает',
    level_word:   'Уровень',
    move:         'движение',
    jump:         'прыжок',
    restart:      'рестарт',
    menuBack:     '← Меню',
    easy:         'легко',
    normal:       'нормально',
    hard:         'сложно',
    vhard:        'оч. сложно',
    extreme:      'ЭКСТРИМ',
    chooseLevel:  'Выбери уровень',
    winTitle:     'Победа! 🏆',
    winCoins:     'Монеты: {0} / {1}',
    winRestart:   'R — заново',
    starBanner:   '★  Схвати звезду!  ★',
    gameOver:     'ИГРА ОКОНЧЕНА',
    newRecord:    'НОВЫЙ РЕКОРД!',
    restartHint:  '[R]  рестарт',
    playerWin:    'P{0} ❤ ПОБЕДА!',
    youWin:       'ТЫ ПОБЕДИЛ! 🏆',
    aiWin:        'ИИ ПОБЕДИЛ!',
    youLabel:     'ТЫ',
    aiPlays:      'ИИ — играет сам',
    roundWin:     '{0} Победил! ⭐',
    matchWin:     '{0} Победил! 🏆',
    newMatch:     'R — новый матч',
    title:        'Палочник',
    subtitle:     'Выбери уровень',
    level1: 'Уровень 1', level2: 'Уровень 2', level3: 'Уровень 3',
    level4: 'Уровень 4', level5: 'Уровень 5',
    g3_1p:   '1 Игрок',    g3_1p_d:  'прыжок ↑',
    g3_2p:   '2 Игрока',   g3_2p_d:  'коопер. ↑',
    g3_2ph:  '2 Игрока ❤', g3_2ph_d: 'сердечки ↑',
    g3_ai:   'vs ИИ ❤',   g3_ai_d:  'vs ИИ ↑',
    footer:  '← / → движение  ·  ↑ / Space прыжок  ·  R рестарт',
    cardTitle1:   'Палочник ①',
    cardTitle2:   'Палочник ②',
    cardTitle3:   'Палочник ③ ↑',
  },
  en: {
    gameTitle1:   'Stickman ①',
    gameTitle2:   'Stickman ②',
    g3TitleInf:   'Stickman ③ — ∞',
    g3TitleEasy:  'Stickman ③ — ★ Easy ∞',
    g3Title2pInf: 'Stickman ③ — 2P ∞',
    g3Title2pH:   'Stickman ③ — 2P ❤',
    g3TitleAI:    'Stickman ③ — vs AI ❤',
    g0Title:      'Stickman',
    g0Subtitle:   '2 Players — first to 3 rounds wins',
    level_word:   'Level',
    move:         'move',
    jump:         'jump',
    restart:      'restart',
    menuBack:     '← Menu',
    easy:         'easy',
    normal:       'normal',
    hard:         'hard',
    vhard:        'very hard',
    extreme:      'EXTREME',
    chooseLevel:  'Choose a level',
    winTitle:     'You Win! 🏆',
    winCoins:     'Coins: {0} / {1}',
    winRestart:   'R — play again',
    starBanner:   '★  Grab the star!  ★',
    gameOver:     'GAME OVER',
    newRecord:    'NEW RECORD!',
    restartHint:  '[R]  restart',
    playerWin:    'P{0} ❤ WINS!',
    youWin:       'YOU WIN! 🏆',
    aiWin:        'AI WINS!',
    youLabel:     'YOU',
    aiPlays:      'AI — plays itself',
    roundWin:     '{0} Wins! ⭐',
    matchWin:     '{0} Wins! 🏆',
    newMatch:     'R — new match',
    title:        'Stickman',
    subtitle:     'Choose a level',
    level1: 'Level 1', level2: 'Level 2', level3: 'Level 3',
    level4: 'Level 4', level5: 'Level 5',
    g3_1p:   '1 Player',    g3_1p_d:  'jump ↑',
    g3_2p:   '2 Players',   g3_2p_d:  'co-op ↑',
    g3_2ph:  '2 Players ❤', g3_2ph_d: 'hearts ↑',
    g3_ai:   'vs AI ❤',    g3_ai_d:  'AI battle ↑',
    footer:  '← / → move  ·  ↑ / Space jump  ·  R restart',
    cardTitle1:   'Stickman ①',
    cardTitle2:   'Stickman ②',
    cardTitle3:   'Stickman ③ ↑',
  },
};

// ── helpers ───────────────────────────────────────────────────────────────────

function _lang() {
  return GAME_LANGS[localStorage.getItem('lang')] || GAME_LANGS.hy;
}

function T(key) {
  const t = _lang();
  let s = (t[key] !== undefined) ? t[key] : key;
  for (let i = 1; i < arguments.length; i++) {
    s = s.replace('{' + (i - 1) + '}', arguments[i]);
  }
  return s;
}

function applyLang() {
  const code = localStorage.getItem('lang') || 'hy';
  const t = GAME_LANGS[code] || GAME_LANGS.hy;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll('.sub[data-level]').forEach(el => {
    const n    = el.dataset.level;
    const diff = el.dataset.diff;
    el.textContent = t.level_word + ' ' + n + ' — ' + (t[diff] || diff);
  });

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('btn-' + code);
  if (btn) btn.classList.add('active');
  document.documentElement.lang = code;
}

function setLang(code) {
  localStorage.setItem('lang', code);
  applyLang();
}

// auto-apply on load
(function () { applyLang(); })();
