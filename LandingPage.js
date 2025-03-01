function menuBar() {
  document.querySelector(".navList").classList.toggle("active")
  document.querySelector(".handBurger").style.color = "blue";
}


new Swiper('.card-wraper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',

  },

  breakpoints: {
    0: {
      sliderPerView: 1
    },
    678: {
      sliderPerView: 2
    },
    1024: {
      sliderPerView: 3
    },
  }
});

function submitContact() {
  let name = document.getElementById("na").value;
  alert(`Hello ${name}`)
}
// Gsap Animation
gsap.from(".home", {
  opacity: 0,
  x: 100,
  duration: .5,
  scrollTrigger: {
    trigger: ".home",
    start: "top 80%", // Triggers animation when 80% of the viewport
    toggleActions: "play none none reverse" // Plays when scrolling down, reverses when scrolling up
  }
});

gsap.from(".boxContainer", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".boxContainer",
    start: "top 80%", // Triggers animation when 80% of the viewport
    toggleActions: "play none none reverse" // Plays when scrolling down, reverses when scrolling up
  }
});
gsap.from(".left3", {
  opacity: 0,
  x: -200,
  duration: 1.1,
  scrollTrigger: {
    trigger: ".left3",
    start: "top 80%", // Triggers animation when 80% of the viewport
    toggleActions: "play none none reverse" // Plays when scrolling down, reverses when scrolling up
  }
});
gsap.from(".boxR3", {
  opacity: 0,
  x: 200,
  duration: 1.4,
  scrollTrigger: {
    trigger: ".boxR3",
    start: "top 80%", // Triggers animation when 80% of the viewport
    toggleActions: "play none none reverse" // Plays when scrolling down, reverses when scrolling up
  }
});
gsap.from(".card-item", {
  opacity: 0,
  y: 200,
  duration: 1,
  scrollTrigger: {
    trigger: ".card-item",
    start: "top 80%", // Triggers animation when 80% of the viewport
    toggleActions: "play none none reverse" // Plays when scrolling down, reverses when scrolling up
  }
});
gsap.from(".section4Title", {
  opacity: 0,
  y: 200,
  duration: 1,
  scrollTrigger: {
    trigger: ".section4Title",
    start: "top 80%", // Triggers animation when 80% of the viewport
    toggleActions: "play none none reverse" // Plays when scrolling down, reverses when scrolling up
  }
});
gsap.from(".left-contact", {
  opacity: 0,
  y: 200,
  duration: 1,
  scrollTrigger: {
    trigger: ".left-contact",
    start: "top 80%", // Triggers animation when 80% of the viewport
    toggleActions: "play none none reverse" // Plays when scrolling down, reverses when scrolling up
  }
});
gsap.from(".right-contact", {
  opacity: 0,
  x: 200,
  duration: 1,
  scrollTrigger: {
    trigger: ".right-contact",
    start: "top 80%", // Triggers animation when 80% of the viewport
    toggleActions: "play none none reverse" // Plays when scrolling down, reverses when scrolling up
  }
});