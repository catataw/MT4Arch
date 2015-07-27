
export default class Tick {

  constructor(symbol, time, bid, ask) {
    this.symbol = symbol;
    this.time = time;
    this.bid = bid;
    this.ask = ask;
  }

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  toString() {
    return String.format('{0}({1},{2}@{3})', this.symbol, this.bid, this.ask, this.time);
  }
}