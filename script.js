"use strict";

const links = document.querySelectorAll("[data-target]");
const overlay = document.querySelector(".overlay");
const btncloseModal = document.querySelectorAll(
  ".close-modal, .close_modal_three "
);

const containerSkills = document.querySelector(".skills");
const containerProjects = document.querySelector(".projects");

document.querySelector("html").addEventListener("mousemove", eyeball);

const skills = [
  "React.js",
  "Typescript",
  "JavaScript",
  "MS SQL",
  "Next.js",
  "Node.js",
  "Figma",
  "Tableau",
];

const projects = [
  {
    title: "Narutowiki",
    description: ` This application is the frontend of the NarutoWiki which shows an overview of the Naruto universe.The technology used is 𝐑𝐞𝐚𝐜𝐭.𝐣𝐬.`,
    previewLink: `https://www.linkedin.com/feed/update/urn:li:activity:7157722756829044739/`,
    githubLink: `https://github.com/AnkitPaunikar/Narutowiki-frontend`,
  },
  {
    title: "Narutowiki Backend",
    description: `This is the backend API of NarutoWiki. The technology used is 𝐍𝐨𝐝𝐞.𝐣𝐬.`,
    previewLink: ``,
    githubLink: `https://github.com/AnkitPaunikar/NarutoWiki-backend`,
  },
  {
    title: "Employee Registration",
    description: `This application is a full-stack project where an employee is added 
		to the database and returned to a dashboard. The technology used is 𝐌𝐄𝐀𝐍 𝐒𝐭𝐚𝐜𝐤.`,
    previewLink: ``,
    githubLink: `https://github.com/AnkitPaunikar/EmployeeRegistration`,
  },
  {
    title: "Movie App",
    description: `This application is a catalogue of movies. The
		Movies API from "themoviedb" is used to get data,
		the technology used is 𝐀𝐧𝐠𝐮𝐥𝐚𝐫, and collections like
		𝐏𝐫𝐢𝐦𝐞𝐟𝐥𝐞𝐱 and 𝐏𝐫𝐢𝐦𝐞𝐧𝐠 are used for styling UI
		components.`,
    previewLink: `https://ankitmoviescatalogue.netlify.app`,
    githubLink: `https://github.com/AnkitPaunikar/Movie-App`,
  },
  {
    title: "Mapty",
    description: `The application is a workout tracker (running or
			cycling), and we can use it to keep track of our
			workouts. The technologies used to build this
			application are 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐇𝐓𝐌𝐋, 𝐚𝐧𝐝 𝐂𝐒𝐒.`,
    previewLink: `https://ankitmapty.netlify.app`,
    githubLink: `https://github.com/AnkitPaunikar/Mapty`,
  },
  {
    title: "Bankist",
    description: `Bankist is a fictitious and minimalistic online
		banking application that allows the user to Login
		with a username and password, View and sort their
		monetary movements, Transfer money to another
		account, Request a loan from the bank and Delete
		their account.The technologies used to build this
		application are 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐇𝐓𝐌𝐋, 𝐚𝐧𝐝 𝐂𝐒𝐒.`,
    previewLink: `https://ankitbankistapp.netlify.app`,
    githubLink: `https://github.com/AnkitPaunikar/bankistapp`,
  },
  {
    title: "Piggame",
    description: `Each turn, a player repeatedly rolls a dice until
		either a 1 is rolled or the player decides to
		"hold". If the player rolls a 1, they score nothing
		and it becomes the next player's turn. If the player
		rolls any other number, it is added to their turn
		total and the player's turn continues. If a player
		chooses to "hold", their turn total is added to
		their score, and it becomes the next player's turn.
		The first player to score 50 or more points wins.
		The technologies used to build this application are
		𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, 𝐇𝐓𝐌𝐋, 𝐚𝐧𝐝 𝐂𝐒𝐒.`,
    previewLink: `https://ankitbankistapp.netlify.app`,
    githubLink: `https://github.com/AnkitPaunikar/PigGames`,
  },
  {
    title: "RagnarLearns",
    description: `This is a web page for a educational company to sale
		their products.The technologies used to build are
		 𝐇𝐓𝐌𝐋, 𝐚𝐧𝐝 𝐂𝐒𝐒.`,
    previewLink: `https://ragnarlearns.netlify.app`,
    githubLink: `https://github.com/AnkitPaunikar/RagnarLearns`,
  },
];

const experience = [];

// Eye animation
function eyeball(event) {
  const eye = document.querySelectorAll(".eye");

  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;

    eye.style.transform = "rotate(" + rot + "deg)";
  });
}

links.forEach((modal) => {
  modal.addEventListener("click", function () {
    document.querySelector(modal.dataset.target).classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

btncloseModal.forEach((btn) => {
  btn.addEventListener("click", function () {
    const modal = btn.closest(".modal");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.add("hidden"));
    overlay.classList.add("hidden");
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.add("hidden"));
    overlay.classList.add("hidden");
  }
});

//Modal contain

const displaySkills = function () {
  containerSkills.innerHTML = "";
  skills.forEach(function (skill, i) {
    const html = `<li> ${skill}</li>`;
    containerSkills.insertAdjacentHTML("beforebegin", html);
  });
};
displaySkills();

const displayProject = function () {
  containerProjects.innerHTML = "";
  projects.forEach(function (pro, i) {
    let previewLinkHTML = "";
    if (projects[i]?.previewLink) {
      previewLinkHTML = `<br/><br/>
                         <a target="_blank" href="${projects[i].previewLink}">Preview</a>`;
    }
    const html = `<ul>
                    <li>
                      ${projects[i].title}
                      <p class="p_About">
                        ${projects[i].description}
                        <br/><br/>
                        <a target="_blank" href="${projects[i]?.githubLink}">Github Link</a>
                        ${previewLinkHTML}
                      </p>
                    </li>
                  </ul>`;
    containerProjects.insertAdjacentHTML("beforebegin", html);
  });
};
displayProject();

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

//Get the button
var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");

    scrollerInner.innerHTML = "";

    skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      scrollerInner.appendChild(li);
    });
    const originalItems = Array.from(scrollerInner.children);
    originalItems.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const naruto = document.getElementById("naruto");
const speechBubble = document.getElementById("speech-bubble");

const messages = [
  "Hey there!",
  "Hire me!",
  "Need a coder?",
  "Let’s chat!",
  "Got work?",
  "I’m ready!",
  "What’s up?",
  "Here to help!",
  "Let’s build!",
];

let messageIndex = 0;

let isDragging = false;
let offsetX, offsetY;

// Function to handle dragging
function handleDrag(event) {
  if (!isDragging) return;

  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const clientY = event.touches ? event.touches[0].clientY : event.clientY;

  const newLeft = clientX - offsetX;
  const newTop = clientY - offsetY;

  naruto.style.left = `${newLeft}px`;
  naruto.style.top = `${newTop}px`;
}

// Mouse and touch event listeners for dragging
naruto.addEventListener("mousedown", (event) => {
  isDragging = true;
  offsetX = event.clientX - naruto.getBoundingClientRect().left;
  offsetY = event.clientY - naruto.getBoundingClientRect().top;
  naruto.style.cursor = "grabbing";
  event.preventDefault();
});

naruto.addEventListener("touchstart", (event) => {
  isDragging = true;
  offsetX = event.touches[0].clientX - naruto.getBoundingClientRect().left;
  offsetY = event.touches[0].clientY - naruto.getBoundingClientRect().top;
  naruto.style.cursor = "grabbing";
  event.preventDefault();
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    requestAnimationFrame(() => handleDrag(event));
  }
});

document.addEventListener("touchmove", (event) => {
  if (isDragging) {
    requestAnimationFrame(() => handleDrag(event));
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  naruto.style.cursor = "grab";
});

document.addEventListener("touchend", () => {
  isDragging = false;
  naruto.style.cursor = "grab";
});

// Show speech bubble at intervals
function showSpeechBubble() {
  speechBubble.textContent = messages[messageIndex];
  speechBubble.style.opacity = 1;
  speechBubble.style.transform = "translateX(-50%) translateY(-10px)";
  setTimeout(() => {
    speechBubble.style.opacity = 0;
    speechBubble.style.transform = "translateX(-50%) translateY(0)";
  }, 3000);

  messageIndex = (messageIndex + 1) % messages.length;
}

setInterval(showSpeechBubble, 5000);

window.addEventListener("resize", () => {
  naruto.style.top = "45%";
  naruto.style.left = "70%";
  naruto.style.transform = "translate(-45%, -70%)";
});
