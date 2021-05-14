const swiper = new Swiper('.swiper-container', {
  loop: true,

  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [43.57597775, 39.72587285],
            zoom: 15
        });
    }