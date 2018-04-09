class A {
  constructor() {
    return [];
  }
}

class B extends A {
  constructor() {
    super();
    console.log(this.isArray())
  }
}
const b = new B();