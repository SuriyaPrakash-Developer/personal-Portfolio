 document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('active');
  });

  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu if open
        if (menuBtn.classList.contains('open')) {
          menuBtn.click();
        }
      }
    });
  });

  // Add scroll event listener for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all sections with fade-in class
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Animate skill bars when skills section is in viewport
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = `${percentage}%`;
    });
  }

  // Check if skills section is in viewport
  const skillsSection = document.querySelector("#skills");
  const observerSkills = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observerSkills.unobserve(skillsSection);
        }
      });
    },
    { threshold: 0.1 }
  );

  if (skillsSection) {
    observerSkills.observe(skillsSection);
  }
});

tailwind.config = {
  theme: {
    extend: {
      colors: { primary: "#3b82f6", secondary: "#4b5563" },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px",
      },
    },
  },
};
