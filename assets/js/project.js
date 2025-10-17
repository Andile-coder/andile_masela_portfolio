/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Mosa IT",
    cardImage: "assets/images/project-page/mosa.png",
    description: "Get instant question papers, memorandums study guides and textbooks for all subjects. Simple. Convenient. Effective.",
    images: ["assets/images/project-page/mosa.png", "assets/images/project-page/mosa_1.jpeg", "assets/images/project-page/mosa_2.jpeg"],
    Previewlink: "https://mosa.it.com",
    Githublink: "",
  },
  {
    title: "Kago clone",
    cardImage: "assets/images/project-page/kago.png",
    description: "Kago construction site clone built with React",
    images: ["assets/images/project-page/kago.png","assets/images/project-page/kago_1.png", "assets/images/project-page/kago_2.png", "assets/images/project-page/kago_3.png"],
    Previewlink: "https://kago-phi.vercel.app/",
    Githublink: "#",
  },
  {
    title: "iPhone store",
    cardImage: "assets/images/project-page/iphoneStore.png",
    description: "An IPhone Store built with Vite and modern web technologies",
    images: ["assets/images/project-page/iphoneStore.png"],
    Previewlink: "https://iphone-store-io3x.vercel.app/",
    Githublink: "#",
  },
  {
    title: "Small Grocery List (Fiverr client)",
    cardImage: "assets/images/project-page/smallGroceryList.png",
    description: "A responsive grocery list application for managing shopping items",
    images: ["assets/images/project-page/smallGroceryList.png"],
    Previewlink: "https://res-landing-page.vercel.app/",
    Githublink: "",
  },
  {
    title: "Object Oriented JavaScript Game (Fiverr client)",
    cardImage: "assets/images/project-page/js_bounce_game.png",
    description: "Bounce game built using JavaScript object oriented programming",
    images: ["assets/images/project-page/js_bounce_game.png"],
    Previewlink: "https://js-game-bounce.vercel.app/",
    Githublink: "",
  },
  {
    title: "Google Form Clone ReactJS",
    cardImage: "assets/images/project-page/googleformClone.png",
    description: "Google form clone built with React.js featuring form creation and responses",
    images: ["assets/images/project-page/googleformClone.png"],
    Previewlink: "https://googleform-clone-eight.vercel.app/",
    Githublink: "",
  },
  {
    title: "Wikipedia Search Engine Scrapped (Fiverr client)",
    cardImage: "assets/images/project-page/scrapped_wikipedia.png",
    description: "Wikipedia search engine with web scraping capabilities",
    images: ["assets/images/project-page/scrapped_wikipedia.png"],
    Previewlink: "https://fiver-wikipedia.vercel.app/",
    Githublink: "",
  },
];

// function for rendering project cards data
let currentSlide = 0;
let currentProject = null;

const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }, index) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px" onclick="openModal(${index})">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" target="_blank" class="social-icon" onclick="event.stopPropagation()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon" onclick="event.stopPropagation()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};

function openModal(index) {
  currentProject = projects[index];
  currentSlide = 0;
  
  document.getElementById('modalTitle').textContent = currentProject.title;
  document.getElementById('modalDescription').textContent = currentProject.description;
  document.getElementById('modalPreview').href = currentProject.Previewlink;
  document.getElementById('modalGithub').href = currentProject.Githublink;
  
  const slider = document.getElementById('imageSlider');
  slider.innerHTML = '';
  
  currentProject.images.forEach((img, i) => {
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.className = i === 0 ? 'active' : '';
    slider.appendChild(imgElement);
  });
  
  document.body.classList.add('modal-open');
  document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
  document.body.classList.remove('modal-open');
  document.getElementById('projectModal').style.display = 'none';
}

function changeSlide(direction) {
  if (!currentProject) return;
  
  const images = document.querySelectorAll('#imageSlider img');
  images[currentSlide].classList.remove('active');
  
  currentSlide += direction;
  if (currentSlide >= images.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = images.length - 1;
  
  images[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  showCards();
  
  document.querySelector('.close').onclick = closeModal;
  
  window.onclick = (event) => {
    if (event.target === document.getElementById('projectModal')) {
      closeModal();
    }
  };
});

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}