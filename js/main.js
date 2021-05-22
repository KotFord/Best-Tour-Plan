$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
    loop: true,
  
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: "coverflow",
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  const reviewsSlider = new Swiper('.reviews-slider', {
    loop: true,
  
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
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
  
  var menuButton = document.querySelector(".menu-button");
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var scrollOff = $("body");
  closeModalButton.on("click", closeModal);
  modalButton.on("click", openModal);

  menuButton.addEventListener("click", function () {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
    document.querySelector("body").classList.toggle("scroll--navbar--off");
  });
  

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    scrollOff.addClass("scroll--modal--off");
  };
 
  function closeModal(e) {
    e.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    scrollOff.removeClass("scroll--modal--off");
  };

  $(document).keydown(function(e){
    console.log(e);
    if (e.code === "Escape") {
      closeModal(e);
    }
  })

});