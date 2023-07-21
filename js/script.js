const slides = [
  "img/slides-code.jpg",
  "img/slides-art.png",
  "img/slides-site.jpg",
  "img/slides-hand.jpg",
  "../img/slides-code-2.jpg",
  "../img/slides-hand-3.jpg",
  "../img/slides-language.png",
];

$(function () {
  $.each(slides, function (index, src) {
    let item = `<div  class="item" style="background: url(${src});"></div>`;
    $(".owl-carousel.owl-theme").append(item);
  });

  $(window).scroll(function () {
    // якщо відбувається скролінг
    $(".slideanim").each(function () {
      // для кожного блоку з класом slideanim
      let pos = $(this).offset().top; // считываем его координату по оси Y в окне браузера
      if (pos < $(window).scrollTop() + 400) {
        //якщо до верху сторінки залишається 400px,
        $(this).addClass("slide"); //додаємо до блоку клас slide з анімацією
      }
    });

    if ($(window).scrollTop() > 200) {
      $("#totop").css("opacity", "0.8"); // непрозорість відновлюється
      $(".navbar").css("opacity", "0.6");
    } else {
      $("#totop").css("opacity", "0"); // елемент прозорий
      $(".navbar").css("opacity", "1");
    }

    $(".mov_slideInRight").each(function () {
      // для кожного блоку с класом mov_slideInRight
      var pos = $(this).offset().top; // зчитуємо його координату по осі Y у вікні браузера
      if (pos < $(window).scrollTop() + 600) {
        //якщо до верху сторінки залишається 600px,
        $(this).addClass("animate__animated animate__slideInRight"); // додаємо до блоку клас з анімацією slideInRight
      }
    });
  });

  $(".phone").mask("+38 (999)-999-9999", {
    autoсlear: false,
  });

  const formModal = document.forms["submit-to-google-sheet-modal"];
  sendDataToGoogleSheet(formModal);
  const form = document.forms["submit-to-google-sheet"];
  sendDataToGoogleSheet(form);

  function sendDataToGoogleSheet(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(form.action, { method: "POST", body: new FormData(form) })
        .then((response) => {
          $("#registration-modal").modal("hide");
          $("#confirm-modal").modal("show");
          form.reset();
        })
        .catch((error) => {
          $("#registration-modal").modal("hide");
          $("#error-modal").modal("show");
          form.reset();
        });
    });
  }
});
