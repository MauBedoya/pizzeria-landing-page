const d = document;

// must be a "data-..." attribute created in elements that we wanted to apply the effect
// the "data-..." should specify type of effect to apply
export default function scrollEffect(dataEffect) {
  const $elements = d.querySelectorAll(`[${dataEffect}]`)

  const observedList = (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) d.querySelector(`#${id}`).classList.add("show-fade");
        // ? d.querySelector(`#${id}`).classList.add("show-fade") 
        // : d.querySelector(`#${id}`).classList.remove("show-fade");
    });
  }

  const observer = new IntersectionObserver(observedList, {
    threshold: [0.1, 0.75]
  })

  $elements.forEach(element => observer.observe(element));
}