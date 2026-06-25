const GAME_LANGS = {
  hy: {
    level_word: 'Մaրդում',
    move:       'շարժ',
    jump:       'ցատկ',
    restart:    'ռեստառտ',
    menuBack:   '← մենյու',
    easy:       'hեշտ',
    normal:     'նորմալ',
    hard:       'djvar',
    vhard:      'shat djvar',
    extreme:    'ԷՔՍՏՐԻՄ',
    chooseLevel:'wntrіr makardak',
  },
  ru: {
    level_word: 'Уровень',
    move:       'движение',
    jump:       'прыжок',
    restart:    'рестарт',
    menuBack:   '← Меню',
    easy:       'легко',
    normal:     'нормально',
    hard:       'сложно',
    vhard:      'оч. сложно',
    extreme:    'ЭКСТРИМ',
    chooseLevel:'Выбери уровень',
  },
  en: {
    level_word: 'Level',
    move:       'move',
    jump:       'jump',
    restart:    'restart',
    menuBack:   '← Menu',
    easy:       'easy',
    normal:     'normal',
    hard:       'hard',
    vhard:      'very hard',
    extreme:    'EXTREME',
    chooseLevel:'Choose a level',
  },
};

(function () {
  // Armenian values with pure Armenian Unicode
  GAME_LANGS.hy.level_word = 'Մարդում';  // Մardum
  GAME_LANGS.hy.move       = 'շարժ';                    // շarж
  GAME_LANGS.hy.jump       = 'ցատկ';                    // ćatk
  GAME_LANGS.hy.restart    = 'րեստարտ';  // restart
  GAME_LANGS.hy.menuBack   = '← Մենյու'; // ← Menyu
  GAME_LANGS.hy.easy       = 'հեշտ';                    // heшt
  GAME_LANGS.hy.normal     = 'նորմալ';        // normal
  GAME_LANGS.hy.hard       = 'դժվար';              // djvar
  GAME_LANGS.hy.vhard      = 'շատ դժվար'; // shat djvar
  GAME_LANGS.hy.chooseLevel= 'ընտրիր մակարդակ'; // entrir makardak

  const code = localStorage.getItem('lang') || 'hy';
  const t = GAME_LANGS[code] || GAME_LANGS.hy;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  // Fill in level subtitle: "Mardum 3 — hard"
  document.querySelectorAll('.sub[data-level]').forEach(el => {
    const n    = el.dataset.level;
    const diff = el.dataset.diff;
    el.textContent = t.level_word + ' ' + n + ' — ' + (t[diff] || diff);
  });
})();
