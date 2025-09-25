document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollBtn");
  const final = document.getElementById("final");
  if (!scrollBtn || !final) {
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const section2Top = final.offsetTop;
      if (entry.isIntersecting || window.scrollY >= section2Top) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });
  });

  observer.observe(final);
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});


const themeLink = document.getElementById("theme-link");
  const lightCSS = "./Faster/css/light.css";
  const darkCSS = "./Faster/css/dark.css";

  const lightBtn = document.getElementById("light-btn");
  const darkBtn = document.getElementById("dark-btn");

  if (lightBtn && darkBtn && themeLink) {
    lightBtn.addEventListener("click", () => {
      themeLink.setAttribute("href", lightCSS);
    });

    darkBtn.addEventListener("click", () => {
      themeLink.setAttribute("href", darkCSS);
      console.log("Switched to dark CSS");
    });
  } else {
    console.error("Check that IDs of buttons and link match!");
  }