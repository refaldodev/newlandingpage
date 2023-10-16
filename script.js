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

// function carousel1() {
//   let tickerSpeed = 0.8;

//   let flickity = null;
//   let isPaused = false;
//   let isTouching = false; // Menyimpan status sentuhan
//   let isScrolling = false;

//   const slideshowEl = document.querySelector(".carousel-influencer1");

//   //
//   //   Functions
//   //
//   //////////////////////////////////////////////////////////////////////

//   const update = () => {
//     if (isPaused) return;
//     if (flickity.slides) {
//       flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
//       flickity.selectedIndex = flickity.dragEndRestingSelect();
//       flickity.updateSelectedSlide();
//       flickity.settle(flickity.x);
//     }
//     window.requestAnimationFrame(update);
//   };

//   const pause = () => {
//     isPaused = true;
//   };

//   const play = () => {
//     if (isPaused) {
//       isPaused = false;
//       window.requestAnimationFrame(update);
//     }
//   };

//   //
//   //   Create Flickity
//   //
//   //////////////////////////////////////////////////////////////////////

//   flickity = new Flickity(slideshowEl, {
//     autoPlay: false,
//     prevNextButtons: true,
//     pageDots: false,
//     draggable: true,
//     wrapAround: true,
//     selectedAttraction: 0.015,
//     friction: 0.25,
//     prevNextButtons: false,
//     pageDots: false,
//     imagesLoaded: true,
//     resize: false,
//     // freeScroll: true,
//     // contain: true,
//     percentPosition: true,
//     setGallerySize: true,
//   });
//   flickity.x = 0;

//   window.addEventListener("resize", function () {
//     // Mengaktifkan resize

//     flickity.resize();

//     // Menunggu 500ms sebelum mematikan resize kembali
//     clearTimeout(resizeTimeout);
//     var resizeTimeout = setTimeout(function () {
//       flickity.resize(false);
//     }, 100);
//   });
//   //
//   //   Add Event Listeners
//   //
//   //////////////////////////////////////////////////////////////////////

//   slideshowEl.addEventListener("mouseenter", play, false);
//   slideshowEl.addEventListener("focusin", play, false);
//   slideshowEl.addEventListener("mouseleave", play, false);
//   slideshowEl.addEventListener("focusout", play, false);
//   // Tambahkan event listener untuk menyentuh (touch) pada elemen carousel
//   slideshowEl.addEventListener("touchstart", () => {
//     isTouching = true;
//     // Hentikan autoplay saat pengguna mulai menyentuh
//     flickity.stopPlayer();
//   });

//   slideshowEl.addEventListener("touchend", () => {
//     isTouching = false;
//     // Lanjutkan autoplay saat pengguna selesai menyentuh
//     play();
//   });

//   // ...

//   // Update autoplay jika tidak ada scrolling atau sentuhan
//   const updateAutoplay = () => {
//     if (!isScrolling && !isTouching && isPaused) {
//       isPaused = false;
//       window.requestAnimationFrame(update);
//     }
//   };
//   // Add event listeners for scroll and touch
//   slideshowEl.addEventListener("scroll", function () {
//     if (!isScrolling) {
//       isScrolling = true;
//       // Hentikan autoplay saat pengguna mulai menggulir
//       flickity.stopPlayer();
//     }

//     clearTimeout(scrollTimeout);
//     var scrollTimeout = setTimeout(function () {
//       isScrolling = false;
//       // Lanjutkan autoplay saat pengguna selesai menggulir
//       updateAutoplay();
//     }, 250); // Sesuaikan timeout sesuai kebutuhan.
//   });

//   flickity.on("dragStart", () => {
//     isPaused = true;
//   });

//   //
//   //   Start Ticker
//   //
//   //////////////////////////////////////////////////////////////////////

//   update();
// }
// carousel1();

// function carousel2() {
//   let tickerSpeed = 0.4;

//   let flickity = null;
//   let isPaused = false;
//   let isTouching = false; // Menyimpan status sentuhan
//   let isScrolling = false;

//   const slideshowEl = document.querySelector(".carousel-influencer2");

//   //
//   //   Functions
//   //
//   //////////////////////////////////////////////////////////////////////

//   const update = () => {
//     if (isPaused) return;
//     if (flickity.slides) {
//       flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
//       flickity.selectedIndex = flickity.dragEndRestingSelect();
//       flickity.updateSelectedSlide();
//       flickity.settle(flickity.x);
//     }
//     window.requestAnimationFrame(update);
//   };

//   const pause = () => {
//     isPaused = true;
//   };

//   const play = () => {
//     if (isPaused) {
//       isPaused = false;
//       window.requestAnimationFrame(update);
//     }
//   };

//   //
//   //   Create Flickity
//   //
//   //////////////////////////////////////////////////////////////////////

//   flickity = new Flickity(slideshowEl, {
//     autoPlay: false,
//     prevNextButtons: true,
//     pageDots: false,
//     draggable: true,
//     wrapAround: true,
//     selectedAttraction: 0.015,
//     friction: 0.25,
//     prevNextButtons: false,
//     pageDots: false,
//     imagesLoaded: true,
//     resize: false,
//     // freeScroll: true,
//     // contain: true,
//     percentPosition: true,
//     setGallerySize: true,
//   });
//   flickity.x = 0;

//   window.addEventListener("resize", function () {
//     // Mengaktifkan resize

//     flickity.resize();

//     // Menunggu 500ms sebelum mematikan resize kembali
//     clearTimeout(resizeTimeout);
//     var resizeTimeout = setTimeout(function () {
//       flickity.resize(false);
//     }, 100);
//   });
//   //
//   //   Add Event Listeners
//   //
//   //////////////////////////////////////////////////////////////////////

//   slideshowEl.addEventListener("mouseenter", play, false);
//   slideshowEl.addEventListener("focusin", play, false);
//   slideshowEl.addEventListener("mouseleave", play, false);
//   slideshowEl.addEventListener("focusout", play, false);
//   // Tambahkan event listener untuk menyentuh (touch) pada elemen carousel
//   slideshowEl.addEventListener("touchstart", () => {
//     isTouching = true;
//     // Hentikan autoplay saat pengguna mulai menyentuh
//     /* flickity.stopPlayer(); */
//     play();
//   });

//   slideshowEl.addEventListener("touchend", () => {
//     isTouching = false;
//     // Lanjutkan autoplay saat pengguna selesai menyentuh
//     play();
//   });

//   // ...

//   // Update autoplay jika tidak ada scrolling atau sentuhan
//   const updateAutoplay = () => {
//     if (!isScrolling && !isTouching && isPaused) {
//       isPaused = false;
//       window.requestAnimationFrame(update);
//     }
//   };
//   // Add event listeners for scroll and touch
//   slideshowEl.addEventListener("scroll", function () {
//     if (!isScrolling) {
//       isScrolling = true;
//       // Hentikan autoplay saat pengguna mulai menggulir
//       /* flickity.stopPlayer(); */
//       play();
//     }

//     clearTimeout(scrollTimeout);
//     var scrollTimeout = setTimeout(function () {
//       isScrolling = false;
//       // Lanjutkan autoplay saat pengguna selesai menggulir
//       updateAutoplay();
//     }, 0); // Sesuaikan timeout sesuai kebutuhan.
//   });

//   flickity.on("dragStart", () => {
//     isPaused = true;
//   });

//   //
//   //   Start Ticker
//   //
//   //////////////////////////////////////////////////////////////////////

//   update();
// }
// carousel2();

// function carousel3() {
//   let tickerSpeed = 0.5;

//   let flickity = null;
//   let isPaused = false;
//   let isTouching = false; // Menyimpan status sentuhan
//   let isScrolling = false;

//   const slideshowEl = document.querySelector(".carousel-influencer3");

//   //
//   //   Functions
//   //
//   //////////////////////////////////////////////////////////////////////

//   const update = () => {
//     if (isPaused) return;
//     if (flickity.slides) {
//       flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
//       flickity.selectedIndex = flickity.dragEndRestingSelect();
//       flickity.updateSelectedSlide();
//       flickity.settle(flickity.x);
//     }
//     window.requestAnimationFrame(update);
//   };

//   const pause = () => {
//     isPaused = true;
//   };

//   const play = () => {
//     if (isPaused) {
//       isPaused = false;
//       window.requestAnimationFrame(update);
//     }
//   };

//   //
//   //   Create Flickity
//   //
//   //////////////////////////////////////////////////////////////////////

//   flickity = new Flickity(slideshowEl, {
//     autoPlay: false,
//     prevNextButtons: true,
//     pageDots: false,
//     draggable: true,
//     wrapAround: true,
//     selectedAttraction: 0.015,
//     friction: 0.25,
//     prevNextButtons: false,
//     pageDots: false,
//     resize: false,
//     imagesLoaded: true,
//     // freeScroll: true,
//     // contain: true,
//     percentPosition: true,
//     setGallerySize: true,
//   });
//   flickity.x = 0;

//   //   Add Event Listeners
//   //
//   //////////////////////////////////////////////////////////////////////

//   slideshowEl.addEventListener("mouseenter", play, false);
//   slideshowEl.addEventListener("focusin", play, false);
//   slideshowEl.addEventListener("mouseleave", play, false);
//   slideshowEl.addEventListener("focusout", play, false);
//   // Tambahkan event listener untuk menyentuh (touch) pada elemen carousel
//   slideshowEl.addEventListener("touchstart", () => {
//     isTouching = true;
//     // Hentikan autoplay saat pengguna mulai menyentuh
//     flickity.stopPlayer();
//   });

//   slideshowEl.addEventListener("touchend", () => {
//     isTouching = false;
//     // Lanjutkan autoplay saat pengguna selesai menyentuh
//     play();
//   });

//   // ...

//   // Update autoplay jika tidak ada scrolling atau sentuhan
//   const updateAutoplay = () => {
//     if (!isScrolling && !isTouching && isPaused) {
//       isPaused = false;
//       window.requestAnimationFrame(update);
//     }
//   };
//   // Add event listeners for scroll and touch
//   slideshowEl.addEventListener("scroll", function () {
//     if (!isScrolling) {
//       isScrolling = true;
//       // Hentikan autoplay saat pengguna mulai menggulir
//       flickity.stopPlayer();
//     }

//     clearTimeout(scrollTimeout);
//     var scrollTimeout = setTimeout(function () {
//       isScrolling = false;
//       // Lanjutkan autoplay saat pengguna selesai menggulir
//       updateAutoplay();
//     }, 250); // Sesuaikan timeout sesuai kebutuhan.
//   });

//   flickity.on("dragStart", () => {
//     isPaused = true;
//   });

//   //
//   //   Start Ticker
//   //
//   //////////////////////////////////////////////////////////////////////

//   update();
// }
// carousel3();

// // Mendeteksi perubahan ukuran layar atau orientasi perangkat
// window.addEventListener("resize", function () {
//   // Inisialisasi ulang Flickity
//   // flkty.resize();
// });

// window.addEventListener("resize", function () {
//   // Mengaktifkan resize

//   flickity.resize();

//   // Menunggu 500ms sebelum mematikan resize kembali
//   clearTimeout(resizeTimeout);
//   var resizeTimeout = setTimeout(function () {
//     flickity.resize(false);
//   }, 100);
// });
//
function carousel1() {
  let tickerSpeed = 0.5;
  let flickity = null;
  let isPaused = false;
  let isTouching = false;
  let isScrolling = false;
  let resizeTimer = null; // Menyimpan timer untuk resize

  const slideshowEl = document.querySelector(".carousel-influencer1");

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

  const enableResize = () => {
    flickity.resize(); // Mengaktifkan resize Flickity
  };

  const disableResize = () => {
    flickity.resize(false); // Menonaktifkan resize Flickity
  };

  const handleResize = () => {
    enableResize(); // Aktifkan resize saat layar berubah ukuran
    clearTimeout(resizeTimer);

    // Setelah 2 detik, nonaktifkan kembali resize
    resizeTimer = setTimeout(() => {
      disableResize();
    }, 2000); // Sesuaikan waktu nonaktifkan resize sesuai kebutuhan
  };

  flickity = new Flickity(slideshowEl, {
    autoPlay: false,
    prevNextButtons: true,
    pageDots: false,
    draggable: true,
    wrapAround: true,
    selectedAttraction: 0.015,
    friction: 0.25,
    resize: false,
    imagesLoaded: true,
    percentPosition: true,
    setGallerySize: true,
  });
  flickity.x = 0;

  slideshowEl.addEventListener(
    "mouseenter",
    () => {
      isTouching = false;
      play();
    },
    false
  );

  slideshowEl.addEventListener("touchstart", () => {
    isTouching = true;
    flickity.stopPlayer();
  });

  slideshowEl.addEventListener("touchend", () => {
    isTouching = false;
    play();
  });

  slideshowEl.addEventListener("scroll", function () {
    if (!isScrolling) {
      isScrolling = true;
      flickity.stopPlayer();
    }

    clearTimeout(resizeTimer);
    var scrollTimeout = setTimeout(function () {
      isScrolling = false;
      handleResize(); // Mengaktifkan resize setelah menggulir berhenti
    }, 250);
  });

  flickity.on("dragStart", () => {
    isPaused = true;
  });

  // Menambahkan event listener untuk perubahan ukuran jendela
  window.addEventListener("resize", handleResize);

  update();
}

carousel1();

function carousel2() {
  let tickerSpeed = 0.5;
  let flickity = null;
  let isPaused = false;
  let isTouching = false;
  let isScrolling = false;
  let resizeTimer = null; // Menyimpan timer untuk resize

  const slideshowEl = document.querySelector(".carousel-influencer2");

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

  const enableResize = () => {
    flickity.resize(); // Mengaktifkan resize Flickity
  };

  const disableResize = () => {
    flickity.resize(false); // Menonaktifkan resize Flickity
  };

  const handleResize = () => {
    enableResize(); // Aktifkan resize saat layar berubah ukuran
    clearTimeout(resizeTimer);

    // Setelah 2 detik, nonaktifkan kembali resize
    resizeTimer = setTimeout(() => {
      disableResize();
    }, 2000); // Sesuaikan waktu nonaktifkan resize sesuai kebutuhan
  };

  flickity = new Flickity(slideshowEl, {
    autoPlay: false,
    prevNextButtons: true,
    pageDots: false,
    draggable: true,
    wrapAround: true,
    selectedAttraction: 0.015,
    friction: 0.25,
    resize: false,
    imagesLoaded: true,
    percentPosition: true,
    setGallerySize: true,
  });
  flickity.x = 0;

  slideshowEl.addEventListener(
    "mouseenter",
    () => {
      isTouching = false;
      play();
    },
    false
  );

  slideshowEl.addEventListener("touchstart", () => {
    isTouching = true;
    flickity.stopPlayer();
  });

  slideshowEl.addEventListener("touchend", () => {
    isTouching = false;
    play();
  });

  slideshowEl.addEventListener("scroll", function () {
    if (!isScrolling) {
      isScrolling = true;
      flickity.stopPlayer();
    }

    clearTimeout(resizeTimer);
    var scrollTimeout = setTimeout(function () {
      isScrolling = false;
      handleResize(); // Mengaktifkan resize setelah menggulir berhenti
    }, 250);
  });

  flickity.on("dragStart", () => {
    isPaused = true;
  });

  // Menambahkan event listener untuk perubahan ukuran jendela
  window.addEventListener("resize", handleResize);

  update();
}

carousel2();

function carousel3() {
  let tickerSpeed = 0.5;
  let flickity = null;
  let isPaused = false;
  let isTouching = false;
  let isScrolling = false;
  let resizeTimer = null; // Menyimpan timer untuk resize

  const slideshowEl = document.querySelector(".carousel-influencer3");

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

  const enableResize = () => {
    flickity.resize(); // Mengaktifkan resize Flickity
  };

  const disableResize = () => {
    flickity.resize(false); // Menonaktifkan resize Flickity
  };

  const handleResize = () => {
    enableResize(); // Aktifkan resize saat layar berubah ukuran
    clearTimeout(resizeTimer);

    // Setelah 2 detik, nonaktifkan kembali resize
    resizeTimer = setTimeout(() => {
      disableResize();
    }, 2000); // Sesuaikan waktu nonaktifkan resize sesuai kebutuhan
  };

  flickity = new Flickity(slideshowEl, {
    autoPlay: false,
    prevNextButtons: true,
    pageDots: false,
    draggable: true,
    wrapAround: true,
    selectedAttraction: 0.015,
    friction: 0.25,
    resize: false,
    imagesLoaded: true,
    percentPosition: true,
    setGallerySize: true,
  });
  flickity.x = 0;

  slideshowEl.addEventListener(
    "mouseenter",
    () => {
      isTouching = false;
      play();
    },
    false
  );

  slideshowEl.addEventListener("touchstart", () => {
    isTouching = true;
    flickity.stopPlayer();
  });

  slideshowEl.addEventListener("touchend", () => {
    isTouching = false;
    play();
  });

  slideshowEl.addEventListener("scroll", function () {
    if (!isScrolling) {
      isScrolling = true;
      flickity.stopPlayer();
    }

    clearTimeout(resizeTimer);
    var scrollTimeout = setTimeout(function () {
      isScrolling = false;
      handleResize(); // Mengaktifkan resize setelah menggulir berhenti
    }, 250);
  });

  flickity.on("dragStart", () => {
    isPaused = true;
  });

  // Menambahkan event listener untuk perubahan ukuran jendela
  window.addEventListener("resize", handleResize);

  update();
}

carousel3();
