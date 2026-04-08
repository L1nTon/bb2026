document.addEventListener("DOMContentLoaded", () => {
  const pageLoadElements = document.querySelectorAll(".page-load-fade");
  pageLoadElements.forEach((element) => {
    void element.offsetWidth;
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -150px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-animate");
  scrollElements.forEach((element) => {
    observer.observe(element);
  });
});

const advisoryArticles = document.querySelectorAll(
  ".advisory article[data-url]",
);

advisoryArticles.forEach((article) => {
  article.addEventListener("click", () => {
    const url = article.getAttribute("data-url");
    window.open(url, "_self");
  });
});

const goTo = (url) => {
  window.open(url, "_blank");
};
