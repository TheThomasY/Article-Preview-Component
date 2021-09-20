document
  .getElementById('show-share-panel')
  .addEventListener('click', function () {
    if (mediaWidth.matches) {
      document.getElementById('share-panel-mobile').classList.add('show');
    } else {
      if (
        document
          .getElementById('share-panel-desktop')
          .classList.contains('show')
      ) {
        document.getElementById('share-panel-desktop').classList.remove('show');
      } else
        document.getElementById('share-panel-desktop').classList.add('show');
    }
  });

document
  .getElementById('hide-share-panel')
  .addEventListener('click', function () {
    document.getElementById('share-panel-mobile').classList.remove('show');
  });

let mediaWidth = window.matchMedia('(max-width: 879px)');
