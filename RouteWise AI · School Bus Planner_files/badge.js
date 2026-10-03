(function () {
  function mount() {
    if (document.getElementById('hb-badge') || !document.body) return;
    document.body.insertAdjacentHTML('beforeend', "\u003Ca id=\u0022hb-badge\u0022 href=\u0022https://hatchable.com/?utm_source=badge&amp;utm_medium=app&amp;utm_content=ai-school-bus-route\u0022 target=\u0022_blank\u0022 rel=\u0022noopener\u0022 style=\u0022position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom, 0px));z-index:2147483000;display:inline-flex;align-items:center;gap:6px;font:600 12px/1 -apple-system,BlinkMacSystemFont,\u0027Segoe UI\u0027,sans-serif;color:#f5efe2;background:#1f1b14;padding:7px 11px 7px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.14);text-decoration:none;box-shadow:0 2px 8px rgba(0,0,0,.25);\u0022\u003E\u003Csvg width=\u002214\u0022 height=\u002214\u0022 viewBox=\u002251 70 410 410\u0022 aria-hidden=\u0022true\u0022 style=\u0022display:block;flex:none\u0022\u003E\u003Cpath d=\u0022M 256 80 C 160 80, 110 220, 110 320 C 110 420, 180 470, 256 470 C 332 470, 402 420, 402 320 C 402 220, 352 80, 256 80 Z\u0022 fill=\u0022#f5b840\u0022/\u003E\u003Cpath d=\u0022M 115 280 L 180 320 L 240 260 L 290 310 L 340 250 L 398 305\u0022 fill=\u0022none\u0022 stroke=\u0022#1f1b14\u0022 stroke-width=\u002240\u0022 stroke-linejoin=\u0022round\u0022 stroke-linecap=\u0022round\u0022/\u003E\u003C/svg\u003EBuilt on Hatchable\u003C/a\u003E");
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();