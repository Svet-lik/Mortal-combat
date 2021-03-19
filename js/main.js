const modal = document.querySelector('.modal');

modal.addEventListener('submit', evt => {
  evt.preventDefault();
  const btnClose = document.querySelector('.fancybox-button.fancybox-close-small');
  btnClose.click();
});

$(document).ready(function () {  
  $('#app').vide({
    mp4: 'video/video.mp4',
    webm: 'video/video.webm',
    ogv: 'video/video.ogv',
    poster: 'img/cover-image.jpg'
  });
});