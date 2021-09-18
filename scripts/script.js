document
  .getElementById('show-share-panel')
  .addEventListener('click', function () {
    if (mediaWidth.matches) {
      document.getElementById('share-panel-mobile').classList.add('show');
    } else console.log('ELSE:', mediaWidth);
  });

document
  .getElementById('hide-share-panel')
  .addEventListener('click', function () {
    document.getElementById('share-panel-mobile').classList.remove('show');
  });

let mediaWidth = window.matchMedia('(max-width: 879px)');
