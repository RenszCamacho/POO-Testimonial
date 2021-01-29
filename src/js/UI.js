class UI {
  render(user1, user2) {
    const root = document.getElementById("root"),
      section = document.createElement("section");
    section.className = "testimonial";
    section.innerHTML = `
        <h1 class="sr-only">Coding Bootcamp Testimonials Slider</h1>
        <div class="testimonial__carousel">
          <span class="sr-only">this is a slider</span>
          <img
            class="show testimonial__img testimonial__img--tanya"
            src="${user1.image}"
            alt="${user1.fullName}"
          />
          <img
            class="testimonial__img testimonial__img--john"
            src="${user2.image}"
            alt="${user2.fullName}"
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
          <p class="show testimonial__quote testimonial__quote--tanya">
            ${user1.quote}
          </p>
          <h2 class="show testimonial__subtitle testimonial__subtitle--tanya">
            <span>${user1.fullName}</span>
            <span>${user1.profession}</span>
          </h2>

          <p class="testimonial__quote testimonial__quote--john">
            ${user2.quote}
          </p>
          <h2 class="testimonial__subtitle testimonial__subtitle--john">
            <span>${user2.fullName}</span>
            <span>${user2.profession}</span>
          </h2>
        </div>
    `;
    root.appendChild(section);
  }

  handleClick() {
    const next = document.getElementById("next");
    const previous = document.getElementById("previous");

    const toogle = (btn) => {
      const users = document.querySelectorAll(
        '[class$="--tanya"],[class$="--john"]'
      );

      btn.addEventListener("click", () => {
        users.forEach((user) => user.classList.toggle("show"));
      });
    };

    toogle(next);
    toogle(previous);
  }
}

export default UI;
