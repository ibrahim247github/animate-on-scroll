const elementsAnimatedOnVisible = document.querySelectorAll(".observe");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-onvisible");
      observer.unobserve(entry.target);
    }
  });
});

elementsAnimatedOnVisible.forEach((element) => {
  observer.observe(element);
});
