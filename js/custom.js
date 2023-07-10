
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})


let technology = {
 1: "JavaScript",
 2: "TypeScript",
 3: "Express.js",
 4: "Node.js",
 5: "ReactJs",
 6: "MongoDB",
 7: "PostgreSQL",
 8: "HTML",
 9: "CSS",
 10: "SASS/SCSS",
};



let projects = [
  {
    name: "Chat app",
    about:
      "I created a dynamic chatting website with user authentication, registration, user search, profile picture setting, real-time messaging, and other essential features.The technologies used for this project include Express.js for the backend, Socket.io for real-time communication, and MongoDB for data storage.",
    link: "https://github.com/Muhammadziyo-web/chat",
    tech: [1, 3, 4, 6, 8, 9, 10],
  },
  {
    name: "Online video cource",
    about:
      "I developed the backend for a video course website using Express.js and PostgreSQL,allowing users to add, categorize, and manage their own videos, along with comments and subcategories",
    link: "https://github.com/Muhammadziyo-web/Online-video-courses",
    tech: [1, 3, 4, 7],
  },
  {
    name: "Chat app",
    about:
      "I created a dynamic chatting website with user authentication, registration, user search, profile picture setting, real-time messaging, and other essential features.The technologies used for this project include Express.js for the backend, Socket.io for real-time communication, and MongoDB for data storage.",
    link: "https://github.com/Muhammadziyo-web/chat",
    tech: [1, 3, 4, 6, 8, 9, 10],
  },
];

projects.forEach(e => {
  let card = document.createElement('div')
  card.classList.add("project")
    card.innerHTML = `
					<h2>${e.name}</h2>
					<p>${e.about}</p>
					<div class="btn-wrapper">
          ${e.tech.map((e) => `<button>${technology[e]}</button>`)}
						
					</div>
					<a href="${e.link}"><i class="fa-brands fa-github"></i> Code</a>`;
          
          document.querySelector(".project-wrapper").appendChild(card);
        })