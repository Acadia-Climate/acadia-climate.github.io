const handleScroll = (entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("timeline-animate");
      entry.target.classList.remove("timeline-pre-animate");
    } else {
      entry.target.classList.remove("timeline-animate");
      entry.target.classList.add("timeline-pre-animate");
    }
  });
};

const observer = new IntersectionObserver(handleScroll);
const timelineAnimate = document.querySelectorAll(".timeline-pre-animate");
// const timelineIcons = document.querySelectorAll(".timeline-icon");
// timelineContent.forEach((el) => observer.observe(el));
timelineAnimate.forEach((el) => observer.observe(el));
