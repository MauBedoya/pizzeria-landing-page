const d = document;

// must be a "data-..." attribute created in elements that we wanted to apply the effect
// the "data-..." should specify type of effect to apply
export default function scrollEffect() {
  const $elements = d.querySelectorAll("[data-fade-element]")

  const observedList = (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        d.querySelector(`#${id}`).classList.add("show-fade");
      } else {
        d.querySelector(`#${id}`).classList.remove("show-fade");
      }

    });
  }

  const observer = new IntersectionObserver(observedList, {
    threshold: [0.1, 0.75]
  })

  $elements.forEach(element => observer.observe(element));
}