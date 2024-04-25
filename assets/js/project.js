const projects = [
  {
    id: 1,
    image: "assets/img/projects/Colour.jpg",
    title: "Residential Apartment",
    subtitle: "Interior Design",
    link: "project.html?id=1",
    details:
      "Within the confines of this studio apartment, you'll find two bedrooms, two bathrooms, a living room with an adjoining shared kitchen, a music studio, and a stunning terrace. Each space is adorned with a palette inspired by the lively and vibrant hues of summer. Upon observing the color schemes of the rooms, one can easily discern the essence of the summer season infused into each carefully chosen shade. <br/> In the child's room, a serene ambiance is curated through a blend of blue tones, soft yellow hues, and accents of gentle red. Enhanced by warm lighting, the space exudes tranquility and comfort, creating a cozy haven for rest and play.",
  },
  {
    id: 2,
    image: "assets/img/work-2.png",
    title: "Creative Website",
    subtitle: "Website Design",
    link: "project.html?id=2",
  },
  {
    id: 3,
    image: "assets/img/work-3.png",
    title: "Creative Website",
    subtitle: "Website Design",
    link: "project.html?id=3",
  },
  {
    id: 4,
    image: "assets/img/work-4.png",
    title: "Creative Website",
    subtitle: "Website Design",
    link: "project.html?id=4",
  },
  {
    id: 5,
    image: "assets/img/work-5.png",
    title: "Creative Website",
    subtitle: "Website Design",
    link: "project.html?id=5",
  },
  {
    id: 6,
    image: "assets/img/work-6.png",
    title: "Creative Website",
    subtitle: "Website Design",
    link: "project.html?id=6",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"));

if (projectId) {
  generateSlideHTML();
  displayProjectDetails(projectId);
} else {
  appendSlides();
}

function displayProjectDetails(projectId) {
  const projectDetails = document.getElementById("project_page");
  const project = projects.find((project) => project.id === projectId);

  if (project) {
    projectDetails.innerHTML = `
    <div class="project_page_img">
        <img src="${project.image}" alt="${project.title}">
    </div>
    <div>
        <h2 class='projectPage_title'>${project.title}</h2>
        <p class='projectPage_details'>${project.details}</p>
        <button class="button download_project" onclick="window.open('./assets/Files/Colour.pdf')">Download Project</button>
    </div>`;
  } else {
    projectDetails.innerHTML = "<p>Project not found.</p>";
  }
}

function generateSlideHTML() {
  const swiperWrapper = document.getElementById("swiper-wrapper");
  let slideHTML = "";
  projects.forEach((project) => {
    if (projectId === project.id) {
      return;
    }
    slideHTML += `
      <div class="swiper-slide">
        <article class="work__card">
          <a href="${project.link}" class="work__link">
            <img src="${project.image}" alt="Home Work Image" class="work__img" />
            <i class="ri-arrow-right-circle-line work__icon"></i>
          </a>
          <h2 class="work__title">${project.title}</h2>
          <span class="work__subtitle">${project.subtitle}</span>
        </article>
      </div>
    `;
  });
  swiperWrapper.innerHTML = slideHTML;
}

function initializeSwiper() {
  let swiper = new Swiper(".swiper-container", {
    slidesPerView: getSlidesPerView(),
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  window.addEventListener("resize", () => {
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update();
  });
}

function getSlidesPerView() {
  return window.innerWidth >= 1150 ? 3 : window.innerWidth >= 768 ? 2 : 1;
}

initializeSwiper();
