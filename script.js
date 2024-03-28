"use strict";

const links = document.querySelectorAll("[data-target]");
const overlay = document.querySelector(".overlay");
const btncloseModal = document.querySelectorAll(".close-modal");

const containerSkills = document.querySelector(".skills");
const containerProjects = document.querySelector(".projects");

document.querySelector("html").addEventListener("mousemove", eyeball);

const skills = [
  "React.js",
  "Next.js",
  "Typescript",
  "Microsoft SQL Server",
  "JavaScript",
  "Figma",
  "Tableau",
  "Unqork",
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

// When the user scrolls down 20px from the top of the document, show the button
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
