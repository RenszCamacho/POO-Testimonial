import { tanya, john } from "./data.js";
import UI from "./UI.js";

export const state = {
  test: true,
};

console.log(state.test);

const user1 = tanya;
const user2 = john;

window.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.render(state.test === true ? user1 : user2);
});

document.getElementById("root").addEventListener("click", (event) => {
  const ui = new UI();
  ui.handleClick(event.target);
});
