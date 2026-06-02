/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Mosa AI (WhatsApp Exam Paper Assistant)",
    cardImage: "assets/images/project-page/mosa.png",
    description:
      "A RAG-powered WhatsApp assistant that helps South African students access exam papers, memorandums and study resources through natural-language queries.",
    tags: ["AI", "RAG", "WhatsApp", "Education"],
    featured: true,
    images: [
      "assets/images/project-page/mosa.png",
      "assets/images/project-page/mosa_1.jpeg",
      "assets/images/project-page/mosa_2.jpeg",
    ],
    Previewlink: "https://whatsapp-tutor-landing-pad.vercel.app/",
    Githublink: "",
  },
  {
    title: "Grafana Monitoring Solutions",
    cardImage: "assets/images/project-page/grafana_1.png",
    description:
      "Observability implementations for monitoring distributed systems with Grafana-based dashboards and alert-driven operations.",
    details: [
      "Designed dashboard views for service health, logs and troubleshooting workflows.",
      "Worked with Grafana, DynamoDB and InfluxDB for observability coverage and metrics visualization.",
      "Improved visibility into incidents and reduced time to identify root causes.",
    ],
    tags: ["Grafana", "DynamoDB", "InfluxDB", "Observability"],
    featured: true,
    images: [
      "assets/images/project-page/grafana_1.png",
      "assets/images/project-page/grafana_2.png",
      "assets/images/project-page/grafana_3.png",
      "assets/images/project-page/grafana_4.png",
    ],
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Last-Mile Cold Chain Logistics",
    cardImage: "assets/images/experience-page/uwc.png",
    description:
      "Honours research project: IoT-based cold-chain tracking with Arduino, GPS and MQTT for real-time logistics visibility and improved delivery decisions.",
    tags: ["IoT", "Arduino", "GPS", "MQTT"],
    featured: true,
    images: ["assets/images/experience-page/uwc.png"],
    Previewlink: "#",
    Documentlink: "assets/docs/A_Masela_3942528_cold_chain.pdf",
    Githublink: "",
  },
  {
    title: "Custom Client Development",
    cardImage: "assets/images/project-page/smallGroceryList.png",
    description:
      "Selected freelance and consulting builds delivered for real clients across landing pages, custom business workflows and product prototypes.",
    tags: ["Freelancing", "Client Delivery", "Full-stack"],
    featured: true,
    images: [
      "assets/images/project-page/smallGroceryList.png",
      "assets/images/project-page/googleformClone.png",
      "assets/images/project-page/js_bounce_game.png",
    ],
    Previewlink: "https://res-landing-page.vercel.app/",
    Githublink: "",
  },
  {
    title: "iPhone store",
    cardImage: "assets/images/project-page/iphoneStore.png",
    description:
      "An e-commerce style storefront prototype built with Vite and modern frontend tooling to deliver a fast, product-focused browsing experience.",
    tags: ["E-commerce", "Frontend", "Vite"],
    featured: false,
    images: ["assets/images/project-page/iphoneStore.png"],
    Previewlink: "https://iphone-store-io3x.vercel.app/",
    Githublink: "#",
  },
  {
    title: "Kago clone",
    cardImage: "assets/images/project-page/kago.png",
    description:
      "A responsive React web experience inspired by a real construction business website, focused on clean navigation, clear service messaging and conversion-oriented layout.",
    tags: ["Frontend", "React", "Web"],
    featured: false,
    images: [
      "assets/images/project-page/kago.png",
      "assets/images/project-page/kago_1.png",
      "assets/images/project-page/kago_2.png",
      "assets/images/project-page/kago_3.png",
    ],
    Previewlink: "https://kago-phi.vercel.app/",
    Githublink: "#",
  },
  {
    title: "Google Form Clone ReactJS",
    cardImage: "assets/images/project-page/googleformClone.png",
    description:
      "A React-based form builder inspired by Google Forms, supporting structured question creation and response flow for practical data collection use cases.",
    tags: ["React", "Forms", "Frontend"],
    featured: false,
    images: ["assets/images/project-page/googleformClone.png"],
    Previewlink: "https://googleform-clone-eight.vercel.app/",
    Githublink: "",
  },
  {
    title: "Wikipedia Search Engine Scrapped (Fiverr client)",
    cardImage: "assets/images/project-page/scrapped_wikipedia.png",
    description:
      "A custom search interface with scraping-based data retrieval, built for a Fiverr client to improve information discovery across targeted content sources.",
    tags: ["Scraping", "Search", "Client Delivery"],
    featured: false,
    images: ["assets/images/project-page/scrapped_wikipedia.png"],
    Previewlink: "https://fiver-wikipedia.vercel.app/",
    Githublink: "",
  },
  {
    title: "Intera-Desk (Coming Soon)",
    cardImage: "",
    description:
      "A customer operations platform for agent assignment, lifecycle visibility and multi-channel communication. Public launch details are coming soon.",
    tags: ["SaaS", "Operations", "Customer Support", "Coming Soon"],
    featured: false,
    images: [
      "assets/images/project-page/mosa_2.jpeg",
      "assets/images/project-page/mosa.png",
      "assets/images/project-page/mosa_1.jpeg",
    ],
    Previewlink: "#",
    Githublink: "",
  },
  {
    title: "Meta APIs Project (Coming Soon)",
    cardImage: "",
    description:
      "Planned project focused on Meta platform integrations and business communication workflows. Full implementation details will be added soon.",
    tags: ["Meta APIs", "Integration", "Automation", "Coming Soon"],
    featured: false,
    images: [],
    Previewlink: "#",
    Githublink: "",
  },
];

// function for rendering project cards data
let currentSlide = 0;
let currentProject = null;

const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink, tags, featured }, index) => {
    const tagBadges = (tags || [])
      .slice(0, 3)
      .map((tag) => `<span class="project-tag">${tag}</span>`)
      .join("");
    const featuredBadge = featured
      ? `<span class="featured-badge">Featured</span>`
      : "";
    const cardActions = `
      ${Previewlink && Previewlink !== "#"
        ? `<li><a href="${Previewlink}" target="_blank" class="social-icon" onclick="event.stopPropagation()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>`
        : ""}
      ${Githublink && Githublink !== "#"
        ? `<li><a href="${Githublink}" class="social-icon" onclick="event.stopPropagation()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>`
        : ""}
    `;
    const cardBackground =
      cardImage && cardImage.trim() !== ""
        ? `background: url(${cardImage}) center / cover no-repeat;`
        : "background: linear-gradient(135deg, #2b2b2b 0%, #1c1c1c 100%);";
    output += `       
        <div class="column skill-card card" onclick="openModal(${index})">
          <div class="wrapper" style="${cardBackground}">
            <div class="header">
              ${featuredBadge}
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                <div class="project-tags">${tagBadges}</div>
                </div>
            <ul class="menu-content"><br>
                  ${cardActions}
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
  const modalPreview = document.getElementById("modalPreview");
  const modalGithub = document.getElementById("modalGithub");
  const modalDocPreview = document.getElementById("modalDocPreview");
  const modalDocDownload = document.getElementById("modalDocDownload");
  const modalDetails = document.getElementById("modalDetails");

  const hasPreview =
    currentProject.Previewlink && currentProject.Previewlink !== "#";
  modalPreview.href = hasPreview ? currentProject.Previewlink : "#";
  modalPreview.style.display = hasPreview ? "inline-block" : "none";

  const hasGithub =
    currentProject.Githublink && currentProject.Githublink !== "#";
  modalGithub.href = hasGithub ? currentProject.Githublink : "#";
  modalGithub.style.display = hasGithub ? "inline-block" : "none";

  const hasDocument =
    currentProject.Documentlink && currentProject.Documentlink !== "#";
  modalDocPreview.href = hasDocument ? currentProject.Documentlink : "#";
  modalDocDownload.href = hasDocument ? currentProject.Documentlink : "#";
  if (hasDocument) {
    modalDocDownload.setAttribute("download", "A_Masela_3942528_cold_chain.pdf");
  } else {
    modalDocDownload.removeAttribute("download");
  }
  modalDocPreview.style.display = hasDocument ? "inline-block" : "none";
  modalDocDownload.style.display = hasDocument ? "inline-block" : "none";

  const hasDetails =
    Array.isArray(currentProject.details) && currentProject.details.length > 0;
  modalDetails.innerHTML = hasDetails
    ? currentProject.details.map((item) => `<li>${item}</li>`).join("")
    : "";
  modalDetails.style.display = hasDetails ? "block" : "none";

  document.getElementById("modalTags").innerHTML = (currentProject.tags || [])
    .map((tag) => `<span class="project-tag">${tag}</span>`)
    .join("");
  
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