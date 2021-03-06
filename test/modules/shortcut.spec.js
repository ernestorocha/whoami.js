describe('shortcut', () => {

  function simulateKeyEvent(el, method, char, modifiers) {
    const ev = document.createEvent('Events');
    const keyCode = char.charCodeAt(0);

    ev.initEvent(method, true, true);
    ev.keyCode = keyCode;
    ev.which = keyCode;
    (modifiers || []).map(m => { ev[`${m}Key`] = true; });

    el.dispatchEvent(ev);
  }

  it('init', () => {
    let isExecuted;

    new whoami({
      shortcut: true,
      filters: []
    }, () => { isExecuted = true; });

    simulateKeyEvent(document, 'keydown', '0', ['ctrl']);

    expect(!!isExecuted).to.be.true;
  });

});
