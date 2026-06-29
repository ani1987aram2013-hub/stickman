(function () {
  if (localStorage.getItem('player_device') !== 'phone') return;

  const style = document.createElement('style');
  style.textContent = `
    #touch-controls {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 18px 22px 22px;
      z-index: 100;
      pointer-events: none;
    }
    .touch-group { display: flex; gap: 12px; pointer-events: none; }
    .tbtn {
      width: 72px; height: 72px;
      background: rgba(255,255,255,0.88);
      border: 2px solid #B0A898;
      border-radius: 14px;
      box-shadow: 0 4px 0 #B0A898;
      font-size: 1.9rem;
      display: flex; align-items: center; justify-content: center;
      pointer-events: all;
      user-select: none;
      -webkit-user-select: none;
      touch-action: none;
      transition: background .08s, transform .06s;
      cursor: pointer;
    }
    .tbtn.pressed {
      background: rgba(29,63,191,0.18);
      transform: scale(0.91) translateY(2px);
      box-shadow: 0 2px 0 #B0A898;
    }
  `;
  document.head.appendChild(style);

  const div = document.createElement('div');
  div.id = 'touch-controls';
  div.innerHTML = `
    <div class="touch-group">
      <button class="tbtn" id="tb-left">◀</button>
      <button class="tbtn" id="tb-right">▶</button>
    </div>
    <div class="touch-group">
      <button class="tbtn" id="tb-jump">▲</button>
    </div>
  `;
  document.body.appendChild(div);

  function fire(code, down) {
    window.dispatchEvent(new KeyboardEvent(
      down ? 'keydown' : 'keyup',
      { code, key: code, bubbles: true, cancelable: true }
    ));
  }

  function bind(id, code) {
    const btn = document.getElementById(id);

    btn.addEventListener('touchstart', e => {
      e.preventDefault();
      btn.classList.add('pressed');
      fire(code, true);
    }, { passive: false });

    btn.addEventListener('touchend', e => {
      e.preventDefault();
      btn.classList.remove('pressed');
      fire(code, false);
    }, { passive: false });

    btn.addEventListener('touchcancel', e => {
      e.preventDefault();
      btn.classList.remove('pressed');
      fire(code, false);
    }, { passive: false });

    // mouse fallback for desktop testing
    btn.addEventListener('mousedown',  () => { btn.classList.add('pressed');    fire(code, true);  });
    btn.addEventListener('mouseup',    () => { btn.classList.remove('pressed'); fire(code, false); });
    btn.addEventListener('mouseleave', () => { btn.classList.remove('pressed'); fire(code, false); });
  }

  bind('tb-left',  'ArrowLeft');
  bind('tb-right', 'ArrowRight');
  bind('tb-jump',  'ArrowUp');
})();
