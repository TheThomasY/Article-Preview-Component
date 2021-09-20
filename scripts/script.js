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
        document
          .getElementById('show-share-panel')
          .classList.remove('share-selected');
        document
          .getElementById('card-share-icon')
          .classList.remove('share-icon-filter');
      } else {
        document.getElementById('share-panel-desktop').classList.add('show');
        document
          .getElementById('show-share-panel')
          .classList.add('share-selected');
        document
          .getElementById('card-share-icon')
          .classList.add('share-icon-filter');
      }
    }
  });

document
  .getElementById('hide-share-panel')
  .addEventListener('click', function () {
    document.getElementById('share-panel-mobile').classList.remove('show');
  });

let mediaWidth = window.matchMedia('(max-width: 879px)');
