import { tanya } from "./data.js";

const root = document.getElementById("root");

function bootcamp(user) {
  const div = document.createElement("div");
  div.innerHTML = `
         <div class="testimonial__carousel">
          <span class="sr-only">this is a slider</span>
          <img
            class="show testimonial__img testimonial__img--tanya"
            src="${user.getImage()}"
            alt="${user.getName()}"
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
          <p class="show testimonial__quote testimonial__quote--tanya">${user.getQuote()}</p>
          <h2 class="show testimonial__subtitle testimonial__subtitle--tanya">
            <span>${user.getName()}</span>
            <span>${user.getProfesion()}</span>
          </h2>
        </div>

       `;
  root.appendChild(div);
}

bootcamp(tanya);
