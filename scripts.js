document.addEventListener("DOMContentLoaded", function () {
  // 🔹 Burger Menu
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.querySelector("i").classList.toggle("fa-times");
  });

  // 🔹 Tutup menu saat klik link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.querySelector("i").classList.remove("fa-times");
    });
  });

  // 🔹 Scroll-triggered Animation
  const slideInElements = document.querySelectorAll(".slide-in, .slide-in-right");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  slideInElements.forEach(el => observer.observe(el));

  // 🔹 Smooth Scroll untuk anchor
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });

  // 🔹 Navbar Show/Hide on Scroll
  const header = document.querySelector("header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < 80) {
      // Di paling atas → selalu tampil
      header.style.top = "0";
      return;
    }

    if (scrollTop > lastScrollTop) {
      // Scroll ke bawah → sembunyikan navbar
      header.style.top = "-80px";
    } else {
      // Scroll ke atas → tampilkan navbar
      header.style.top = "0";
    }

    lastScrollTop = scrollTop;
  });
});
