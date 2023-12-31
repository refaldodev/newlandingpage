// Set aspect ratio of box
var aspect_ratio = 1;
// Store the jQuery object for future reference
var $box = jQuery(".figure-gigs");
var $box2 = jQuery(".figure-creator");
var $box3 = jQuery(".figure-video");

// Initial resize of .box
jQuery(document).ready(function ($) {
  $box.height($box.width() * aspect_ratio);
  $box2.height($box2.width() * aspect_ratio);
  $box3.height($box3.width() * aspect_ratio);
});
// Resize .box on browser resize
jQuery(window).resize(function () {
  $box.height($box.width() * aspect_ratio);
  $box2.height($box2.width() * aspect_ratio);
  $box3.height($box3.width() * aspect_ratio);
});

/* // navbar add efek shadow
const nav = document.querySelector("nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("nav-outline");
  } else {
    nav.classList.remove("nav-outline");
  }
} */

// card jquery event click to location
$(".card-hero").on("click", function (e) {
  var tujuan = $(this).attr("href");
  console.log(tujuan);
  var elemenTujuan = $(tujuan);
  $("html,body").animate({
    scrollTop: elemenTujuan.offset().top - 55,
  });
  e.preventDefault();
});

// to top navbar animate
/* $(".logoNav").on("click", function (e) {
  $("html,body").animate({
    scrollTop: $(this).scrollTop(),
  });
  e.preventDefault();
});
 */
$(".logoNav").on("click", function (e) {
  e.preventDefault();

  // Ganti "#target" dengan selector yang sesuai dengan elemen yang ingin Anda gulir
  var targetElement = $("body");

  if (targetElement.length) {
    $("html, body").animate(
      {
        scrollTop: targetElement.offset().top,
      },
      10
    ); // Ubah 1000 menjadi durasi animasi yang Anda inginkan (dalam milidetik)
  }
});

// carousel
$(".carousel1").carousel({
  interval: 1000,
  pause: false,
});
$(".carousel2").carousel({
  interval: 1200,
  pause: false,
});
$(".carousel3").carousel({
  pause: false,
});

$(".carousel3").on("slide.bs.carousel", function (e) {
  var id = e.relatedTarget.id;
  // console.log(e.to);
  switch (id) {
    case "1":
      if ($(".videoCarousel2").prop("muted", true))
        if ($(".videoCarousel3").prop("muted", true))
          if ($(".videoCarousel4").prop("muted", true))
            if ($(".videoCarousel3").prop("muted", true)) break;

    case "2":
      if ($(".videoCarousel1").prop("muted", true))
        if ($(".videoCarousel4").prop("muted", true))
          if ($(".videoCarousel3").prop("muted", true)) break;
    case "3":
      if ($(".videoCarousel2").prop("muted", true))
        if ($(".videoCarousel1").prop("muted", true))
          if ($(".videoCarousel4").prop("muted", true)) break;
    case "4":
      if ($(".videoCarousel2").prop("muted", true))
        if ($(".videoCarousel3").prop("muted", true))
          if ($(".videoCarousel1").prop("muted", true)) break;
    default:
  }
});
$(".carousel-btn").click(function () {
  // var vid = document.querySelectorAll("videoCarousel");
  $(".figure-video").each(function (i, obj) {
    obj.currentTime = 0;
    obj.play();
  });
});

// $(".carouselVideo").each(function (i, e) {
//   console.log(e);
// });
// // Entering fullscreen mode
// $("video").bind(
//   "webkitfullscreenchange mozfullscreenchange fullscreenchange",
//   function (e) {
//     var state =
//       document.fullScreen ||
//       document.mozFullScreen ||
//       document.webkitIsFullScreen;
//     var event = state ? "FullscreenOn" : "FullscreenOff";

//     if (event == "FullscreenOn") {
//       // $(".carouselVideo").each(function (i, obj) {
//       //   console.log(obj);

//       // });
//       $(".carousel3").carousel({
//         pause: false,
//         interval: false,
//       });

//       $(".videoCarousel").css("border-radius", "26px");
//     }
//     if (event == "FullscreenOff") {
//       // $(this).css("objectFit", "");
//       // $("#carouselExampleControls").addClass(
//       //   "carousel carousel3 h-100 slide carousel-fade"
//       // );
//       $(".figure-video").css("border-radius", "26px");
//     }
//   }
// );

/* 
$(".carousel-influencer").flickity({
  // options
  cellAlign: "left",
  contain: true,
  adaptiveHeight: true,
  autoPlay: 1500,
  autoPlayInterval: 1,
  prevNextButtons: false,
  pageDots: false,
  imagesLoaded: true,
  wrapAround: true, //
});

document.addEventListener("DOMContentLoaded", function () {
  var flkty = new Flickity(".carousel-influencer", {
    cellAlign: "left",
    contain: true,
    adaptiveHeight: true,
    autoPlay: 1500,
    // autoPlayInterval: 1,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false,
    // imagesLoaded: true,
    wrapAround: true, //
    draggable: true,
  });

  // Tangkap peristiwa ketika slider mencapai slide terakhir
  flkty.on("select", function () {
    if (flkty.selectedIndex == flkty.slides.length - 1) {
      // Jika slider berada di slide terakhir
      setTimeout(function () {
        flkty.select(0); // Kembalikan slider ke slide pertama setelah beberapa saat
      }, 2000); // Ubah nilai ini sesuai kebutuhan Anda (1000 = 1 detik)
    }
  });
  // Event listener untuk mengaktifkan autoplay kembali saat slider di-drag
  flkty.on("dragStart", function () {
    flkty.playPlayer(); // Mengaktifkan autoplay kembali saat slider di-drag
  });
});

// 2
$(".carousel-influencer2").flickity({
  // options
  cellAlign: "left",
  contain: true,
  adaptiveHeight: true,
  autoPlay: 1800,
  autoPlayInterval: 1,
  prevNextButtons: false,
  pageDots: false,
  imagesLoaded: true,
  wrapAround: true, //
});

document.addEventListener("DOMContentLoaded", function () {
  var flkty = new Flickity(".carousel-influencer2", {
    cellAlign: "left",
    contain: true,
    adaptiveHeight: true,
    autoPlay: 1800,
    // autoPlayInterval: 1,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false,
    // imagesLoaded: true,
    wrapAround: true, //
    draggable: true,
  });

  // Tangkap peristiwa ketika slider mencapai slide terakhir
  flkty.on("select", function () {
    if (flkty.selectedIndex == flkty.slides.length - 1) {
      // Jika slider berada di slide terakhir
      setTimeout(function () {
        flkty.select(0); // Kembalikan slider ke slide pertama setelah beberapa saat
      }, 2000); // Ubah nilai ini sesuai kebutuhan Anda (1000 = 1 detik)
    }
  });
  // Event listener untuk mengaktifkan autoplay kembali saat slider di-drag
  flkty.on("dragStart", function () {
    flkty.playPlayer(); // Mengaktifkan autoplay kembali saat slider di-drag
  });
});

// 3
$(".carousel-influencer3").flickity({
  // options
  cellAlign: "left",
  contain: true,
  adaptiveHeight: true,
  autoPlay: 1400,
  autoPlayInterval: 1,
  prevNextButtons: false,
  pageDots: false,
  imagesLoaded: true,
  wrapAround: true, //
});

document.addEventListener("DOMContentLoaded", function () {
  var flkty = new Flickity(".carousel-influencer3", {
    cellAlign: "left",
    contain: true,
    adaptiveHeight: true,
    autoPlay: 1400,
    // autoPlayInterval: 1,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false,
    // imagesLoaded: true,
    wrapAround: true, //
    draggable: true,
  });

  // Tangkap peristiwa ketika slider mencapai slide terakhir
  flkty.on("select", function () {
    if (flkty.selectedIndex == flkty.slides.length - 1) {
      // Jika slider berada di slide terakhir
      setTimeout(function () {
        flkty.select(0); // Kembalikan slider ke slide pertama setelah beberapa saat
      }, 1400); // Ubah nilai ini sesuai kebutuhan Anda (1000 = 1 detik)
    }
  });
  // Event listener untuk mengaktifkan autoplay kembali saat slider di-drag
  flkty.on("dragStart", function () {
    flkty.playPlayer(); // Mengaktifkan autoplay kembali saat slider di-drag
  });
}); */

function isMobileOrTablet() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobileOrTablet()) {
  function carousel1() {
    let tickerSpeed = 0.8;

    let flickity = null;
    let isPaused = false;
    let isTouching = false; // Menyimpan status sentuhan
    let isScrolling = false;

    const slideshowEl = document.querySelector(".carousel-influencer1");

    //
    //   Functions
    //
    //////////////////////////////////////////////////////////////////////

    const update = () => {
      if (isPaused) return;
      if (flickity.slides) {
        flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
        flickity.selectedIndex = flickity.dragEndRestingSelect();
        flickity.updateSelectedSlide();
        flickity.settle(flickity.x);
      }
      window.requestAnimationFrame(update);
    };

    const pause = () => {
      isPaused = true;
    };

    const play = () => {
      if (isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
      }
    };

    //
    //   Create Flickity
    //
    //////////////////////////////////////////////////////////////////////

    flickity = new Flickity(slideshowEl, {
      autoPlay: false,
      prevNextButtons: true,
      pageDots: false,
      draggable: true,
      wrapAround: true,
      selectedAttraction: 0.015,
      friction: 0.25,
      prevNextButtons: false,
      pageDots: false,
      imagesLoaded: true,
      resize: false,
      // freeScroll: true,
      // contain: true,
      percentPosition: true,
      setGallerySize: true,
    });
    flickity.x = 0;

    //
    //   Add Event Listeners
    //
    //////////////////////////////////////////////////////////////////////

    slideshowEl.addEventListener("mouseenter", play, false);
    slideshowEl.addEventListener("focusin", play, false);
    slideshowEl.addEventListener("mouseleave", play, false);
    slideshowEl.addEventListener("focusout", play, false);
    // Tambahkan event listener untuk menyentuh (touch) pada elemen carousel
    slideshowEl.addEventListener("touchstart", () => {
      isTouching = true;
      // Hentikan autoplay saat pengguna mulai menyentuh
      flickity.stopPlayer();
    });

    slideshowEl.addEventListener("touchend", () => {
      isTouching = false;
      // Lanjutkan autoplay saat pengguna selesai menyentuh
      play();
    });

    // ...

    // Update autoplay jika tidak ada scrolling atau sentuhan
    const updateAutoplay = () => {
      if (!isScrolling && !isTouching && isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
      }
    };
    // Add event listeners for scroll and touch
    slideshowEl.addEventListener("scroll", function () {
      if (!isScrolling) {
        isScrolling = true;
        // Hentikan autoplay saat pengguna mulai menggulir
        flickity.stopPlayer();
      }

      clearTimeout(scrollTimeout);
      var scrollTimeout = setTimeout(function () {
        isScrolling = false;
        // Lanjutkan autoplay saat pengguna selesai menggulir
        updateAutoplay();
      }, 250); // Sesuaikan timeout sesuai kebutuhan.
    });

    flickity.on("dragStart", () => {
      isPaused = true;
    });

    //
    //   Start Ticker
    //
    //////////////////////////////////////////////////////////////////////

    update();
  }
  carousel1();

  function carousel2() {
    let tickerSpeed = 0.4;

    let flickity = null;
    let isPaused = false;
    let isTouching = false; // Menyimpan status sentuhan
    let isScrolling = false;

    const slideshowEl = document.querySelector(".carousel-influencer2");

    //
    //   Functions
    //
    //////////////////////////////////////////////////////////////////////

    const update = () => {
      if (isPaused) return;
      if (flickity.slides) {
        flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
        flickity.selectedIndex = flickity.dragEndRestingSelect();
        flickity.updateSelectedSlide();
        flickity.settle(flickity.x);
      }
      window.requestAnimationFrame(update);
    };

    const pause = () => {
      isPaused = true;
    };

    const play = () => {
      if (isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
      }
    };

    //
    //   Create Flickity
    //
    //////////////////////////////////////////////////////////////////////

    flickity = new Flickity(slideshowEl, {
      autoPlay: false,
      prevNextButtons: true,
      pageDots: false,
      draggable: true,
      wrapAround: true,
      selectedAttraction: 0.015,
      friction: 0.25,
      prevNextButtons: false,
      pageDots: false,
      imagesLoaded: true,
      resize: false,
      // freeScroll: true,
      // contain: true,
      percentPosition: true,
      setGallerySize: true,
    });
    flickity.x = 0;

    //
    //   Add Event Listeners
    //
    //////////////////////////////////////////////////////////////////////

    slideshowEl.addEventListener("mouseenter", play, false);
    slideshowEl.addEventListener("focusin", play, false);
    slideshowEl.addEventListener("mouseleave", play, false);
    slideshowEl.addEventListener("focusout", play, false);
    // Tambahkan event listener untuk menyentuh (touch) pada elemen carousel
    slideshowEl.addEventListener("touchstart", () => {
      isTouching = true;
      // Hentikan autoplay saat pengguna mulai menyentuh
      /* flickity.stopPlayer(); */
      play();
    });

    slideshowEl.addEventListener("touchend", () => {
      isTouching = false;
      // Lanjutkan autoplay saat pengguna selesai menyentuh
      play();
    });

    // ...

    // Update autoplay jika tidak ada scrolling atau sentuhan
    const updateAutoplay = () => {
      if (!isScrolling && !isTouching && isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
      }
    };
    // Add event listeners for scroll and touch
    slideshowEl.addEventListener("scroll", function () {
      if (!isScrolling) {
        isScrolling = true;
        // Hentikan autoplay saat pengguna mulai menggulir
        /* flickity.stopPlayer(); */
        play();
      }

      clearTimeout(scrollTimeout);
      var scrollTimeout = setTimeout(function () {
        isScrolling = false;
        // Lanjutkan autoplay saat pengguna selesai menggulir
        updateAutoplay();
      }, 0); // Sesuaikan timeout sesuai kebutuhan.
    });

    flickity.on("dragStart", () => {
      isPaused = true;
    });

    //
    //   Start Ticker
    //
    //////////////////////////////////////////////////////////////////////

    update();
  }
  carousel2();

  function carousel3() {
    let tickerSpeed = 0.5;

    let flickity = null;
    let isPaused = false;
    let isTouching = false; // Menyimpan status sentuhan
    let isScrolling = false;

    const slideshowEl = document.querySelector(".carousel-influencer3");

    //
    //   Functions
    //
    //////////////////////////////////////////////////////////////////////

    const update = () => {
      if (isPaused) return;
      if (flickity.slides) {
        flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
        flickity.selectedIndex = flickity.dragEndRestingSelect();
        flickity.updateSelectedSlide();
        flickity.settle(flickity.x);
      }
      window.requestAnimationFrame(update);
    };

    const pause = () => {
      isPaused = true;
    };

    const play = () => {
      if (isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
      }
    };

    //
    //   Create Flickity
    //
    //////////////////////////////////////////////////////////////////////

    flickity = new Flickity(slideshowEl, {
      autoPlay: false,
      prevNextButtons: true,
      pageDots: false,
      draggable: true,
      wrapAround: true,
      selectedAttraction: 0.015,
      friction: 0.25,
      prevNextButtons: false,
      pageDots: false,
      resize: false,
      imagesLoaded: true,
      // freeScroll: true,
      // contain: true,
      percentPosition: true,
      setGallerySize: true,
    });
    flickity.x = 0;

    //
    //   Add Event Listeners
    //
    //////////////////////////////////////////////////////////////////////

    slideshowEl.addEventListener("mouseenter", play, false);
    slideshowEl.addEventListener("focusin", play, false);
    slideshowEl.addEventListener("mouseleave", play, false);
    slideshowEl.addEventListener("focusout", play, false);
    // Tambahkan event listener untuk menyentuh (touch) pada elemen carousel
    slideshowEl.addEventListener("touchstart", () => {
      isTouching = true;
      // Hentikan autoplay saat pengguna mulai menyentuh
      flickity.stopPlayer();
    });

    slideshowEl.addEventListener("touchend", () => {
      isTouching = false;
      // Lanjutkan autoplay saat pengguna selesai menyentuh
      play();
    });

    // ...

    // Update autoplay jika tidak ada scrolling atau sentuhan
    const updateAutoplay = () => {
      if (!isScrolling && !isTouching && isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
      }
    };
    // Add event listeners for scroll and touch
    slideshowEl.addEventListener("scroll", function () {
      if (!isScrolling) {
        isScrolling = true;
        // Hentikan autoplay saat pengguna mulai menggulir
        flickity.stopPlayer();
      }

      clearTimeout(scrollTimeout);
      var scrollTimeout = setTimeout(function () {
        isScrolling = false;
        // Lanjutkan autoplay saat pengguna selesai menggulir
        updateAutoplay();
      }, 250); // Sesuaikan timeout sesuai kebutuhan.
    });

    flickity.on("dragStart", () => {
      isPaused = true;
    });

    //
    //   Start Ticker
    //
    //////////////////////////////////////////////////////////////////////

    update();
  }
  carousel3();
  window.addEventListener("orientationchange", () => {
    location.reload();
  });
}

function isMobileOrTabletDekstop() {
  return window.innerWidth <= 768 && window.innerHeight <= 1024;
}

function detectDeviceType() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isSmartTV = /(smarttv|smart tv|linux armv)/i.test(userAgent);
  const isDesktop =
    !/mobile|tablet|android|iphone|ipad|opera mini|iemobile/i.test(userAgent) &&
    !isSmartTV;

  if (isSmartTV || isDesktop) {
    function carousel1() {
      let tickerSpeed = 0.8;

      let flickity = null;
      let isPaused = false;
      let isTouching = false; // Menyimpan status sentuhan
      let isScrolling = false;

      const slideshowEl = document.querySelector(".carousel-influencer1");

      //
      //   Functions
      //
      //////////////////////////////////////////////////////////////////////

      const update = () => {
        if (isPaused) return;
        if (flickity.slides) {
          flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
          flickity.selectedIndex = flickity.dragEndRestingSelect();
          flickity.updateSelectedSlide();
          flickity.settle(flickity.x);
        }
        window.requestAnimationFrame(update);
      };

      const pause = () => {
        isPaused = true;
      };

      const play = () => {
        if (isPaused) {
          isPaused = false;
          window.requestAnimationFrame(update);
        }
      };

      //
      //   Create Flickity
      //
      //////////////////////////////////////////////////////////////////////

      flickity = new Flickity(slideshowEl, {
        autoPlay: false,
        prevNextButtons: true,
        pageDots: false,
        draggable: true,
        wrapAround: true,
        selectedAttraction: 0.015,
        friction: 0.25,
        prevNextButtons: false,
        pageDots: false,
        imagesLoaded: true,
        resize: true,
        // freeScroll: true,
        // contain: true,
        percentPosition: true,
        setGallerySize: true,
      });
      flickity.x = 0;

      //
      //   Add Event Listeners
      //
      //////////////////////////////////////////////////////////////////////

      slideshowEl.addEventListener("mouseenter", play, false);
      slideshowEl.addEventListener("focusin", play, false);
      slideshowEl.addEventListener("mouseleave", play, false);
      slideshowEl.addEventListener("focusout", play, false);
      // Tambahkan event listener untuk menyentuh (touch) pada elemen carousel
      slideshowEl.addEventListener("touchstart", () => {
        isTouching = true;
        // Hentikan autoplay saat pengguna mulai menyentuh
        flickity.stopPlayer();
      });

      slideshowEl.addEventListener("touchend", () => {
        isTouching = false;
        // Lanjutkan autoplay saat pengguna selesai menyentuh
        play();
      });

      // ...

      // Update autoplay jika tidak ada scrolling atau sentuhan
      const updateAutoplay = () => {
        if (!isScrolling && !isTouching && isPaused) {
          isPaused = false;
          window.requestAnimationFrame(update);
        }
      };
      // Add event listeners for scroll and touch
      slideshowEl.addEventListener("scroll", function () {
        if (!isScrolling) {
          isScrolling = true;
          // Hentikan autoplay saat pengguna mulai menggulir
          flickity.stopPlayer();
        }

        clearTimeout(scrollTimeout);
        var scrollTimeout = setTimeout(function () {
          isScrolling = false;
          // Lanjutkan autoplay saat pengguna selesai menggulir
          updateAutoplay();
        }, 250); // Sesuaikan timeout sesuai kebutuhan.
      });

      flickity.on("dragStart", () => {
        isPaused = true;
      });

      //
      //   Start Ticker
      //
      //////////////////////////////////////////////////////////////////////

      update();
    }
    carousel1();

    function carousel2() {
      let tickerSpeed = 0.4;

      let flickity = null;
      let isPaused = false;
      let isTouching = false; // Menyimpan status sentuhan
      let isScrolling = false;

      const slideshowEl = document.querySelector(".carousel-influencer2");

      //
      //   Functions
      //
      //////////////////////////////////////////////////////////////////////

      const update = () => {
        if (isPaused) return;
        if (flickity.slides) {
          flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
          flickity.selectedIndex = flickity.dragEndRestingSelect();
          flickity.updateSelectedSlide();
          flickity.settle(flickity.x);
        }
        window.requestAnimationFrame(update);
      };

      const pause = () => {
        isPaused = true;
      };

      const play = () => {
        if (isPaused) {
          isPaused = false;
          window.requestAnimationFrame(update);
        }
      };

      //
      //   Create Flickity
      //
      //////////////////////////////////////////////////////////////////////

      flickity = new Flickity(slideshowEl, {
        autoPlay: false,
        prevNextButtons: true,
        pageDots: false,
        draggable: true,
        wrapAround: true,
        selectedAttraction: 0.015,
        friction: 0.25,
        prevNextButtons: false,
        pageDots: false,
        imagesLoaded: true,
        resize: true,
        // freeScroll: true,
        // contain: true,
        percentPosition: true,
        setGallerySize: true,
      });
      flickity.x = 0;

      //
      //   Add Event Listeners
      //
      //////////////////////////////////////////////////////////////////////

      slideshowEl.addEventListener("mouseenter", play, false);
      slideshowEl.addEventListener("focusin", play, false);
      slideshowEl.addEventListener("mouseleave", play, false);
      slideshowEl.addEventListener("focusout", play, false);
      // Tambahkan event listener untuk menyentuh (touch) pada elemen carousel
      slideshowEl.addEventListener("touchstart", () => {
        isTouching = true;
        // Hentikan autoplay saat pengguna mulai menyentuh
        /* flickity.stopPlayer(); */
        play();
      });

      slideshowEl.addEventListener("touchend", () => {
        isTouching = false;
        // Lanjutkan autoplay saat pengguna selesai menyentuh
        play();
      });

      // ...

      // Update autoplay jika tidak ada scrolling atau sentuhan
      const updateAutoplay = () => {
        if (!isScrolling && !isTouching && isPaused) {
          isPaused = false;
          window.requestAnimationFrame(update);
        }
      };
      // Add event listeners for scroll and touch
      slideshowEl.addEventListener("scroll", function () {
        if (!isScrolling) {
          isScrolling = true;
          // Hentikan autoplay saat pengguna mulai menggulir
          /* flickity.stopPlayer(); */
          play();
        }

        clearTimeout(scrollTimeout);
        var scrollTimeout = setTimeout(function () {
          isScrolling = false;
          // Lanjutkan autoplay saat pengguna selesai menggulir
          updateAutoplay();
        }, 0); // Sesuaikan timeout sesuai kebutuhan.
      });

      flickity.on("dragStart", () => {
        isPaused = true;
      });

      //
      //   Start Ticker
      //
      //////////////////////////////////////////////////////////////////////

      update();
    }
    carousel2();

    function carousel3() {
      let tickerSpeed = 0.5;

      let flickity = null;
      let isPaused = false;
      let isTouching = false; // Menyimpan status sentuhan
      let isScrolling = false;

      const slideshowEl = document.querySelector(".carousel-influencer3");

      //
      //   Functions
      //
      //////////////////////////////////////////////////////////////////////

      const update = () => {
        if (isPaused) return;
        if (flickity.slides) {
          flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
          flickity.selectedIndex = flickity.dragEndRestingSelect();
          flickity.updateSelectedSlide();
          flickity.settle(flickity.x);
        }
        window.requestAnimationFrame(update);
      };

      const pause = () => {
        isPaused = true;
      };

      const play = () => {
        if (isPaused) {
          isPaused = false;
          window.requestAnimationFrame(update);
        }
      };

      //
      //   Create Flickity
      //
      //////////////////////////////////////////////////////////////////////

      flickity = new Flickity(slideshowEl, {
        autoPlay: false,
        prevNextButtons: true,
        pageDots: false,
        draggable: true,
        wrapAround: true,
        selectedAttraction: 0.015,
        friction: 0.25,
        prevNextButtons: false,
        pageDots: false,
        resize: true,
        imagesLoaded: true,
        // freeScroll: true,
        // contain: true,
        percentPosition: true,
        setGallerySize: true,
      });
      flickity.x = 0;

      //
      //   Add Event Listeners
      //
      //////////////////////////////////////////////////////////////////////

      slideshowEl.addEventListener("mouseenter", play, false);
      slideshowEl.addEventListener("focusin", play, false);
      slideshowEl.addEventListener("mouseleave", play, false);
      slideshowEl.addEventListener("focusout", play, false);
      // Tambahkan event listener untuk menyentuh (touch) pada elemen carousel
      slideshowEl.addEventListener("touchstart", () => {
        isTouching = true;
        // Hentikan autoplay saat pengguna mulai menyentuh
        flickity.stopPlayer();
      });

      slideshowEl.addEventListener("touchend", () => {
        isTouching = false;
        // Lanjutkan autoplay saat pengguna selesai menyentuh
        play();
      });

      // ...

      // Update autoplay jika tidak ada scrolling atau sentuhan
      const updateAutoplay = () => {
        if (!isScrolling && !isTouching && isPaused) {
          isPaused = false;
          window.requestAnimationFrame(update);
        }
      };
      // Add event listeners for scroll and touch
      slideshowEl.addEventListener("scroll", function () {
        if (!isScrolling) {
          isScrolling = true;
          // Hentikan autoplay saat pengguna mulai menggulir
          flickity.stopPlayer();
        }

        clearTimeout(scrollTimeout);
        var scrollTimeout = setTimeout(function () {
          isScrolling = false;
          // Lanjutkan autoplay saat pengguna selesai menggulir
          updateAutoplay();
        }, 250); // Sesuaikan timeout sesuai kebutuhan.
      });

      flickity.on("dragStart", () => {
        isPaused = true;
      });

      //
      //   Start Ticker
      //
      //////////////////////////////////////////////////////////////////////

      update();
    }
    carousel3();
  }
}

detectDeviceType();

$(document).ready(function () {
  // Inisialisasi Flickity
  var $carousel = $(".carousel-influencer1").flickity();

  // Fungsi untuk menambah elemen tambahan
  function addAdditionalItems() {
    // Gantilah bagian ini dengan logika Anda untuk menambah elemen tambahan
    var additionalItems = `  <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-bangladesh.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/bangladesh.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-thailand.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/024-thailand.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-indonesia.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/028-indonesia.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-philippines.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/040-philippines.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-nigeria.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/nigeria.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-brazil.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/011-brazil.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-spain.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/003-spain.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-singapore.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/041-singapore.png" alt="" class="flag">
      </div>
    </div>
   
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-mexico.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/005-mexico.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-poland.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/037-poland.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-australia.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/006-australia.png" alt="" class="flag">
      </div>
    </div>

    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-new-zealand.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/023-new-zealand.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-costa-rica.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/006-costa-rica.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-bolivia.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/001-bolivia.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-bangladesh.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/bangladesh.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-thailand.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/024-thailand.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-indonesia.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/028-indonesia.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-philippines.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/040-philippines.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-nigeria.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/nigeria.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-brazil.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/011-brazil.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-spain.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/003-spain.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-singapore.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/041-singapore.png" alt="" class="flag">
      </div>
    </div>
   
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-mexico.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/005-mexico.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-poland.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/037-poland.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-australia.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/006-australia.png" alt="" class="flag">
      </div>
    </div>

    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-new-zealand.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/023-new-zealand.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-costa-rica.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/006-costa-rica.png" alt="" class="flag">
      </div>
    </div>
    <div class="carousel-cell carousel-cell1 size-carousel">
      <div>
        <img src="./img/influencer/content-creator-platform-bolivia.webp" alt="" class="img-influencer">
        
        <img src="./img/flags/001-bolivia.png" alt="" class="flag">
      </div>
    </div>
   `;

    // Gunakan API Flickity untuk menambahkan elemen baru
    $carousel.flickity("append", $(additionalItems));
  }

  // Periksa lebar viewport saat halaman dimuat dan diubah ukuran
  function checkViewportWidth() {
    var viewportWidth = $(window).width();

    // Jika lebar viewport mencapai atau melebihi 1500px, tambahkan elemen tambahan
    if (viewportWidth > 1500) {
      addAdditionalItems();
    }
  }

  // Panggil fungsi saat halaman dimuat dan diubah ukuran
  checkViewportWidth();
  $(window).resize(checkViewportWidth);

  // caousel 2
  // Inisialisasi Flickity
  var $carousel2 = $(".carousel-influencer2").flickity();

  // Fungsi untuk menambah elemen tambahan
  function addAdditionalItems2() {
    // Gantilah bagian ini dengan logika Anda untuk menambah elemen tambahan
    var additionalItems2 = ` <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-china.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/013-china.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-united-kingdom.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/united-kingdom.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-japan.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/017-japan.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-south-korea.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/007-south-korea.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-india.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/004-india.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-hong-kong.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/hong-kong.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-united-states.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/001-united-states.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-netherlands.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/020-netherlands.png" alt="" class="flag">
     </div>
   </div>

   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-italy.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/019-italy.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-france.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/002-france.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-egypt.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/026-egypt.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-turkiye.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/034-turkey.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-sweden.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/002-sweden.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
     <div>
       <img src="./img/influencer/content-creator-platform-czech-republic.webp" alt="" class="img-influencer">
       
       <img src="./img/flags/004-czech-republic.png" alt="" class="flag">
     </div>
   </div>
   <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-china.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/013-china.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-united-kingdom.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/united-kingdom.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-japan.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/017-japan.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-south-korea.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/007-south-korea.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-india.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/004-india.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-hong-kong.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/hong-kong.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-united-states.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/001-united-states.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-netherlands.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/020-netherlands.png" alt="" class="flag">
   </div>
 </div>

 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-italy.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/019-italy.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-france.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/002-france.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-egypt.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/026-egypt.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-turkiye.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/034-turkey.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-sweden.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/002-sweden.png" alt="" class="flag">
   </div>
 </div>
 <div class="carousel-cell size-carousel">
   <div>
     <img src="./img/influencer/content-creator-platform-czech-republic.webp" alt="" class="img-influencer">
     
     <img src="./img/flags/004-czech-republic.png" alt="" class="flag">
   </div>
 </div>
    `;

    // Gunakan API Flickity untuk menambahkan elemen baru
    $carousel2.flickity("append", $(additionalItems2));
  }

  // Periksa lebar viewport saat halaman dimuat dan diubah ukuran
  function checkViewportWidth2() {
    var viewportWidth = $(window).width();

    // Jika lebar viewport mencapai atau melebihi 1500px, tambahkan elemen tambahan
    if (viewportWidth > 1500) {
      addAdditionalItems2();
    }
  }

  // Panggil fungsi saat halaman dimuat dan diubah ukuran
  checkViewportWidth2();
  $(window).resize(checkViewportWidth2);

  // caousel 3
  // Inisialisasi Flickity
  var $carousel3 = $(".carousel-influencer3").flickity();

  // Fungsi untuk menambah elemen tambahan
  function addAdditionalItems3() {
    // Gantilah bagian ini dengan logika Anda untuk menambah elemen tambahan
    var additionalItems3 = `<div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-colombia.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/018-colombia.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-taiwan.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/taiwan.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-south-africa.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/south-africa.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-malaysia.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/malasya.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-canada.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/015-canada.png" alt="" class="flag">
    </div>
  </div>
   <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-germany.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/012-germany.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-vietnam.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/022-vietnam.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-ecuador.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/019-ecuador.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-peru.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/peru.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-pakistan.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/pakistan.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-chile.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/014-chile.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-argentina.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/008-argentina.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-portugal.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/003-portugal.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-switzerland.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/005-switzerland.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-colombia.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/018-colombia.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-taiwan.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/taiwan.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-south-africa.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/south-africa.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-malaysia.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/malasya.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-canada.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/015-canada.png" alt="" class="flag">
    </div>
  </div>
   <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-germany.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/012-germany.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-vietnam.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/022-vietnam.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-ecuador.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/019-ecuador.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-peru.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/peru.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-pakistan.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/pakistan.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-chile.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/014-chile.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-argentina.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/008-argentina.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-portugal.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/003-portugal.png" alt="" class="flag">
    </div>
  </div>
  <div class="carousel-cell size-carousel">
    <div>
      <img src="./img/influencer/content-creator-platform-switzerland.webp" alt="" class="img-influencer">
      
      <img src="./img/flags/005-switzerland.png" alt="" class="flag">
    </div>
  </div>
    `;

    // Gunakan API Flickity untuk menambahkan elemen baru
    $carousel3.flickity("append", $(additionalItems3));
  }

  // Periksa lebar viewport saat halaman dimuat dan diubah ukuran
  function checkViewportWidth3() {
    var viewportWidth = $(window).width();

    // Jika lebar viewport mencapai atau melebihi 1500px, tambahkan elemen tambahan
    if (viewportWidth > 1500) {
      addAdditionalItems3();
    }
  }

  // Panggil fungsi saat halaman dimuat dan diubah ukuran
  checkViewportWidth3();
  $(window).resize(checkViewportWidth3);
});
