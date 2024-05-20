// var typed = new Typed(".typing", {
//   strings: [
//     "",
//     "FrontEnd Developer",
//     "Problem-Solver",
//     "ML NewBie",
//     "Content-Writer",
//   ],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true,
// });

// const nav = document.querySelector(".nav"),
//   navList = nav.querySelectorAll("li"),
//   totalNavList = navList.length;
// (allSection = document.querySelectorAll(".section")),
//   (totalSection = allSection.length);
// for (let i = 0; i < totalNavList; i++) {
//   const a = navList[i].querySelector("a");
//   a.addEventListener("click", function () {
//     removeBackSection();
//     for (let j = 0; j < totalNavList; j++) {
//       if (navList[j].querySelector("a").classList.contains("active")) {
//         addBackSection(j);
//         // allSection[j].classList.add("back-section");
//       }
//       navList[j].querySelector("a").classList.remove("active");
//     }
//     this.classList.add("active");
//     showSection(this);
//     if (window.innerWidth < 1200) {
//       asideSectionTogglerBtn();
//     }
//   });
// }
// function removeBackSection() {
//   for (let i = 0; i < totalSection; i++) {
//     allSection[i].classList.remove("back-section");
//   }
// }
// function addBackSection(num) {
//   allSection[num].classList.add("back-section");
// }

// function showSection(element) {
//   for (let i = 0; i < totalSection; i++) {
//     allSection[i].classList.remove("active");
//     const target = element.getAttribute("href").split("#")[1];
//     if (
//       target ===
//       navList[i].querySelector("a").getAttribute("href").split("#")[1]
//     ) {
//       navList[i].querySelector("a").classList.add("active");
//     }
//   }
//   const target = element.getAttribute("href").split("#")[1];
//   document.querySelector("#" + target).classList.add("active");
// }
// function updateNav(element) {
//   for (let i = 0; i < totalNavList; i++) {
//     navList[i].querySelector("a").classList.remove("active");
//   }
// }

// document.querySelector(".hire-me").addEventListener("click", function () {
//   const sectionIndex = this.getAttribute("data-section-index");
//   // console.log(sectionIndex);
//   showSection(this);
//   updateNav(this);
//   removeBackSection();
//   addBackSection(sectionIndex);
// });
// const navTogglerBtn = document.querySelector(".nav-toggler"),
//   aside = document.querySelector(".aside");
// navTogglerBtn.addEventListener("click", () => {
//   asideSectionTogglerBtn();
// });
// function asideSectionTogglerBtn() {
//   aside.classList.toggle("open");
//   navTogglerBtn.classList.toggle("open");
//   for (let i = 0; i < totalSection; i++) {
//     allSection[i].classList.toggle("open");
//   }
// }


var typed = new Typed(".typing", {
    strings: ["", "into Full Stack Web Development", "into Problem-Solving", "into Content Writing", "into SQL"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
    updateNav(target);
}

function updateNav(target) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        if (navList[i].querySelector("a").getAttribute("href").split("#")[1] === target) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(sectionIndex);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

function sendEmail(event) {
    event.preventDefault(); // Prevent form from submitting normally

    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var subjectElement = document.getElementById("Subject"); // Corrected ID
    var messageElement = document.getElementById("message");

    // Check if elements exist before accessing their values
    if (nameElement && emailElement && subjectElement && messageElement) {
        var name = nameElement.value;
        var email = emailElement.value;
        var subject = subjectElement.value;
        var message = messageElement.value;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);

        var templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        };

        emailjs.send("service_1hjrn0j", "template_hqic1hs", templateParams)
            .then(function(response) {
                console.log("Email sent successfully:", response);
                alert('Your Email has beet sent Successfully ✅');

                // Clear form fields after successful email sending
                nameElement.value = "";
                emailElement.value = "";
                subjectElement.value = "";
                messageElement.value = "";
            })
            .catch(function(error) {
                console.error('FAILED... Oops! Something went wrong.', error);
                alert('FAILED... Oops! Something went wrong.');
            });
    } else {
        console.error("One or more form elements not found.");
    }
}
