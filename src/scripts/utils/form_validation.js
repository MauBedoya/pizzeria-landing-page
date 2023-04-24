const d = document;

const VALID_REGEX = {
  name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
  phone: /^\+?[\d]+$/,
  email: /^[\w.-]+(\+[\w.-]+)?@([\w-]+)(\.[a-zA-Z]{2,7})+$/,
  message: /^(\n|.){1,255}$/,
}

export default function contactFormValidation() {
  const $inputs = d.querySelectorAll(".form-input");
  $inputs.forEach(input => {
    const $span = d.createElement("span");
    $span.id = `${input.name}-error`;
    $span.textContent = input.title;
    $span.classList.add("error-span");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".form-input")) {
      let $input = e.target;
      let inputRegExp = VALID_REGEX[$input.name];

      if (inputRegExp) {
        return (!inputRegExp.test($input.value))
          ? d.querySelector(`#${$input.name}-error`).classList.add("active-error")
          : d.querySelector(`#${$input.name}-error`).classList.remove("active-error")
      }

      if (!inputRegExp) {
        return ($input.value === "")
        ? d.querySelector(`#${$input.name}-error`).classList.add("active-error")
        : d.querySelector(`#${$input.name}-error`).classList.remove("active-error")
      }
    }
  })

  d.addEventListener("submit", () => {
    const $form = d.querySelector(".contact-form");

    setTimeout(() => {
      $form.reset();
    }, 1000);
  })
}