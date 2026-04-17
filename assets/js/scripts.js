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

const linkArticles = document.querySelectorAll(
  "article[data-url]",
);

linkArticles.forEach((article) => {
  article.addEventListener("click", () => {
    const url = article.getAttribute("data-url");
    window.open(url, "_self");
  });
});

const goTo = (url, target="_blank") => {
  window.open(url, target);
};
