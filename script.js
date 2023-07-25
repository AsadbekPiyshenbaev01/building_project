$(function () {
  $('.clients-items').slick({
    infinity: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
      },
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    }, ]
  })

});
var swiper = new Swiper(".testemonial-slick", {
  effect: "coverflow",
  grabCursor: true,
  autoplay: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  breakpoints: {
    990: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
AOS.init();

let menu = [{
    id: 1,
    title: "App 1",
    name: "APP",
    img: "https://themewagon.github.io/builerz/img/service-4.jpg",
  },
  {
    id: 2,
    title: "Web 1",
    name: "WEB",
    img: "https://preview.colorlib.com/theme/webuilder/img/project/project-1.jpg",
  },
  {
    id: 3,
    title: "App 3",
    name: "APP",
    img: "https://preview.colorlib.com/theme/webuilder/img/project/project-2.jpg",
  },
  {
    id: 4,
    title: "Card 2",
    name: "CARD",
    img: "https://preview.colorlib.com/theme/webuilder/img/project/project-3.jpg",
  },
  {
    id: 5,
    title: "Web 2",
    name: "WEB",
    img: "https://preview.colorlib.com/theme/webuilder/img/project/project-4.jpg",
  },
  {
    id: 6,
    title: "App 3",
    name: "APP",
    img: "https://preview.colorlib.com/theme/webuilder/img/project/project-5.jpg",
  },
  {
    id: 7,
    title: "Card 1",
    name: "CARD",
    img: "https://preview.colorlib.com/theme/webuilder/img/project/project-6.jpg",
  },
  {
    id: 8,
    title: "Card 3",
    name: "CARD",
    img: "https://preview.colorlib.com/theme/wilcon/images/project-3.jpg",
  },
  {
    id: 9,
    title: "Web 3",
    name: "WEB",
    img: "	https://preview.colorlib.com/theme/wilcon/images/project-6.jpg",
  },
]

let portfolioBoxs = document.querySelectorAll('.portfolio-grid-box'),
  portfolio_grid = document.querySelector('.portfolio-grid'),
  btnParent = document.querySelector('.portfolio-nav'),
  btn = document.querySelectorAll('.portfolio_btn');


window.addEventListener('DOMContentLoaded', () => {
  maps(menu);
  filtered()
})
let maps = (value) => {
  let displayMenu = value.map((item) => {
    return ` <div class="portfolio-grid-box">
    <img src= ${item.img}>
    <div class="portfolio-opacity">
        <h4>${item.title}</h4>
        <p>${item.name}</p>
        <div class="porfolio-link">
            <a href="#"><i class="fa fa-plus"></i></a>
            <a href="#"><i class="fa fa-link"></i></a>
        </div>
    </div>
</div>`
  });
  displayMenu = displayMenu.join('');
  portfolio_grid.innerHTML = displayMenu;
}

let showTab = (i = 0) => {
  btn[i].classList.add('active')
}

let hideTab = () => {
  btn.forEach(element => {
    element.classList.remove('active')
  })
}
hideTab()
showTab()
btnParent.addEventListener('click', (e) => {
  let target = e.target;
  if (target && target.classList.contains('portfolio_btn')) {
    btn.forEach((item, index) => {
      if (target == item) {
        hideTab()
        showTab(index)
      }
    })
  }

})

let filtered = () => {
  btn.forEach((item) => {
    item.addEventListener('click', (e) => {
      let category = e.currentTarget.id;
      let menuFilter = menu.filter((menuItem) => {
        if (menuItem.name == category) {
          return menuItem
        }
      })
      if (category == "all") {
        maps(menu)
      } else {
        maps(menuFilter)
      }
    })
  })
}