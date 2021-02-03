export class HelloWorld {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `¡Hola Mundo, Webpack con ${this.name}!`;
  }
}
