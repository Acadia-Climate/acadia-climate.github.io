const handleScroll = (entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll-animate");
      entry.target.classList.remove("scroll-pre-animate");
    } else {
      entry.target.classList.remove("scroll-animate");
      entry.target.classList.add("scroll-pre-animate");
    }
  });
};

const observer = new IntersectionObserver(handleScroll);
const timelineAnimate = document.querySelectorAll(".scroll-pre-animate");
// const timelineIcons = document.querySelectorAll(".timeline-icon");
// timelineContent.forEach((el) => observer.observe(el));
timelineAnimate.forEach((el) => observer.observe(el));
