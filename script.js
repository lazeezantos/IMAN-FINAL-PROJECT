// ===== 1. MOBILE NAVIGATION =====
// When the ☰ button is clicked, add or remove the class "open" on the menu.
// The CSS shows the menu only when it has the class "open".
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close the menu after a link is clicked
const links = document.querySelectorAll("#nav-links a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
}

// ===== 2. FAQ ACCORDION =====
// Click a question -> show or hide the answer right below it.
const questions = document.querySelectorAll(".faq-question");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    const answer = this.nextElementSibling;  // the answer box after the button
    answer.classList.toggle("open");         // show / hide the answer
    this.classList.toggle("active");         // change + to −
  });
}

// ===== 3. PROJECT FILTER =====
// Each project card has data-category="html" or "js".
// When a button is clicked we show only the matching cards.
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    // 1) make only the clicked button look active
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");

    // 2) show or hide each project
    const filter = this.getAttribute("data-filter");
    for (let k = 0; k < projects.length; k++) {
      const category = projects[k].getAttribute("data-category");
      if (filter === "all" || filter === category) {
        projects[k].style.display = "block";
      } else {
        projects[k].style.display = "none";
      }
    }
  });
}

// ===== 4. FORM VALIDATION =====
// When the form is sent, check the fields and show a message.
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();   // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || phone === "" || message === "") {
    formMessage.textContent = "❌ Please fill in all fields.";
    formMessage.className = "error";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "❌ Please enter a valid email.";
    formMessage.className = "error";
  } else {
    formMessage.textContent = "✅ Thank you! Your message was sent.";
    formMessage.className = "success";
    form.reset();           // clear the form
  }
});

// ===== 5. DARK / LIGHT MODE (bonus) =====
// Add or remove the class "dark" on <body>. The CSS colors change automatically.
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});
