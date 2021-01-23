export default class Testimonial {
  constructor(image, name, profesion, quote) {
    this.image = image;
    this.name = name;
    this.profesion = profesion;
    this.quote = quote;
  }

  getImage() {
    return this.image;
  }
  getName() {
    return this.name;
  }
  getProfesion() {
    return this.profesion;
  }
  getQuote() {
    return this.quote;
  }

  setImage() {
    return this.image;
  }
  setName() {
    return this.name;
  }
  setProfesion() {
    return this.profesion;
  }
  setQuote() {
    return this.quote;
  }
}
