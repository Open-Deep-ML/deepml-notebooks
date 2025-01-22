window.addEventListener('hashchange', () => {
    window.parent.postMessage({
      type: 'hashChange',
      hash: window.location.hash
    }, '*');
  });