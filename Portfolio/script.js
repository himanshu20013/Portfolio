// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("mobile-menu")
    const navMenu = document.querySelector(".nav-menu")
  
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        navMenu.classList.toggle("active")
      })
    }
  
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  
    // Active Navigation Link on Scroll
    function updateActiveLink() {
      const sections = document.querySelectorAll("section")
      const navLinks = document.querySelectorAll(".nav-link")
  
      let currentSection = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active")
        }
      })
    }
  
    // Header Scroll Effect
    const header = document.querySelector("header")
    const backToTop = document.getElementById("backToTop")
  
    function handleScroll() {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
        backToTop.classList.add("active")
      } else {
        header.classList.remove("scrolled")
        backToTop.classList.remove("active")
      }
  
      updateActiveLink()
    }
  
    window.addEventListener("scroll", handleScroll)
  
    // Back to Top Button
    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  
    // Project Filtering
    const filterButtons = document.querySelectorAll(".filter-btn")
    const projectItems = document.querySelectorAll(".project-item")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        // Add active class to clicked button
        this.classList.add("active")
  
        const filter = this.getAttribute("data-filter")
  
        projectItems.forEach((item) => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.style.display = "block"
          } else {
            item.style.display = "none"
          }
        })
      })
    })
  
    // Animate skill progress bars
    function animateSkills() {
      const skillBars = document.querySelectorAll(".progress-bar")
  
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        bar.style.width = width + "%"
      })
    }
  
    // Check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  
    // Animate skills when skills section is in viewport
    function checkSkillsVisibility() {
      const skillsSection = document.getElementById("skills")
      if (skillsSection && isInViewport(skillsSection)) {
        animateSkills()
        // Remove the scroll event listener once animation is triggered
        window.removeEventListener("scroll", checkSkillsVisibility)
      }
    }
  
    window.addEventListener("scroll", checkSkillsVisibility)
    // Also check on page load
    checkSkillsVisibility()
  
    // Form Submission
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Basic form validation
        if (!name || !email || !subject || !message) {
          alert("Please fill in all fields")
          return
        }
  
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address")
          return
        }
  
        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        alert("Thank you for your message! I will get back to you soon.")
        contactForm.reset()
      })
    }
  
    // Download CV button
    const downloadCvBtn = document.getElementById("download-cv")
  
    if (downloadCvBtn) {
      downloadCvBtn.addEventListener("click", (e) => {
        e.preventDefault()
        alert("CV download functionality would be implemented here.")
        // In a real implementation, you would link to an actual file
        // downloadCvBtn.href = 'path/to/your-cv.pdf';
      })
    }
  })
  
  