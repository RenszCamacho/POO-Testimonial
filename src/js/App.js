import user from "./data";
import Testimonial from "./Testimonial";
import UI from "./UI";

window.addEventListener("DOMContentLoaded", () => {
  const tanya = new Testimonial(
    user.tanya.image,
    user.tanya.fullName,
    user.tanya.profession,
    user.tanya.quote
  );

  const john = new Testimonial(
    user.john.image,
    user.john.fullName,
    user.john.profession,
    user.john.quote
  );

  const ui = new UI();
  ui.render(tanya, john);
  ui.handleClick();
});
