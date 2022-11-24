// create a class for global counter and individual counter
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  getCount() {
    return this.count;
  }
}
// create a class for individual counter
class IndividualCounter extends Counter {
  constructor() {
    super();
  }
}
// create a class for global counter
class GlobalCounter extends Counter {
  constructor() {
    super();
  }
}
// create a global counter
const globalCounter = new GlobalCounter();
// create an array of individual counters
const individualCounters = [];
// create 10 individual counters
for (let i = 0; i < 10; i++) {
  individualCounters.push(new IndividualCounter());
}
// increment the global counter 100 times
for (let i = 0; i < 100; i++) {
  globalCounter.increment();
}
// increment the individual counters 10 times
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < individualCounters.length; j++) {
    individualCounters[j].increment();
  }
}
// print the global counter
console.log(globalCounter.getCount());
// print the individual counters
for (let i = 0; i < individualCounters.length; i++) {
  console.log(individualCounters[i].getCount());
}
//
// Output:
// 100
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
//
//
