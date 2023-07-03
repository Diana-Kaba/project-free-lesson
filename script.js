const slides = [
  "img/slides-code.jpg",
  "img/slides-art.png",
  "img/slides-site.jpg",
  "img/slides-hand.jpg",
  "img/slides-code.jpg",
  "img/slides-art.png",
  "img/slides-site.jpg",
  "img/slides-hand.jpg",
];

$(function () {
  $.each(slides, function (index, src) {
    let item = `<div  class="item" style="background: url(${src});"></div>`;
    $(".owl-carousel.owl-theme").append(item);
  });
});
