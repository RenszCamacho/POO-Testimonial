import { tanya, john } from "./data.js";
console.log(tanya);
console.log(john);

const main = document.getElementById("root");

function bootcamp(user) {
  const section = document.createElement("main");
  section.innerHTML = `

<div class="testimonial__carousel">
          <span class="sr-only">this is a slider</span>
          <img
            class="show testimonial__img testimonial__img--tanya"
            src="./assets/images/image-tanya.jpg"
            alt="tanya"
          />
          <img
            class="testimonial__img testimonial__img--john"
            src="./assets/images/image-john.jpg"
            alt="john"
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
  `;
}
