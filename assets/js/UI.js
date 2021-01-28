import { state } from "./App.js";

export default class UI {
  render(element) {
    const root = document.getElementById("root"),
      div = document.createElement("div");
    div.innerHTML = `
  <section class="testimonial">
        <h1 class="sr-only">Coding Bootcamp Testimonials Slider</h1>
        <div class="testimonial__carousel">
          <span class="sr-only">this is a slider</span>
          <img
            class="show testimonial__img testimonial__img--tanya"
            src="${element.img}"
            alt="${element.name}"
          />
          <img
            class="testimonial__img testimonial__img--john"
            src="${element.img}"
            alt="${element.name}"
          />
          <div class="testimonial__arrowsBox">
            <button
              id="previous"
              name="previous"
              aria-label="previous"
              type="button"
              class="testimonial__arrow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  stroke-width="3"
                  d="M11 1L3 9l8 8"
                />
              </svg>
            </button>
            <button
              id="next"
              name="next"
              aria-label="next"
              type="button"
              class="testimonial__arrow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                <path
                  fill="none"
                  stroke="#8585AC"
                  stroke-width="3"
                  d="M2 1l8 8-8 8"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="testimonial__quoteBox">
          <span class="sr-only">this is a testimonial quote</span>
          <p class="show testimonial__quote testimonial__quote--tanya">${element.quote}</p>
          <h2 class="show testimonial__subtitle testimonial__subtitle--tanya">
            <span>${element.name}</span>
            <span>${element.profesion}</span>
          </h2>

          <p class="testimonial__quote testimonial__quote--john">
           ${element.quote}
          </p>
          <h2 class="testimonial__subtitle testimonial__subtitle--john">
            <span>${element.name}</span>
            <span>${element.profesion}</span>
          </h2>
        </div>
      </section>
    `;
    root.appendChild(div);
  }

  handleClick(element) {
    let newState;
    if (element.name === "next" || element.name === "previous") {
      newState = state.test = !state.test;
      console.log(newState);
    }
    null;
  }
}
