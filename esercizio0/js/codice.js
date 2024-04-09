function makeCounter() {
  return {
    count: 4,
    increment() {
      this.count++;
    },
  };
}
class Counter {
  count;
  constructor(count = 0) {
    this.count = count;
  }
  increment(amount = 1) {
    this.count += amount;
    return this;
  }
}
$(document).ready(() => {
  function hello() {
    console.log(a.count + 5)
  }
  console.log("helo");
  const a = makeCounter();
  hello()
  a.increment();
  console.log(a.count);
  const b = new Counter();
  console.log(b.increment(6).increment().count);
});
