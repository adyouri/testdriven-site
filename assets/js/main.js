$(function() {

  var currentLocation = window.location.href;
  setActivePart(currentLocation);

});

/*
  helpers
 */

function setActivePart(url) {
  var active = url.split('-')[1];
  if (active) {
    if (active === 'one') {
      $('ul[data-part="1"]').removeClass('collapse');
    }
    if (active === 'two') {
      $('ul[data-part="2"]').removeClass('collapse');
    }
    if (active === 'three') {
      $('ul[data-part="3"]').removeClass('collapse');
    }
  }
}
