
export default class TickInfo {

  constructor(time, bid, ask, orders) {
    this.time = time;
    this.bid = bid;
    this.ask = bid;
    this.orders = orders;
  }

  toString() {
    return String.format('bid={0}, ask={1},orders={0}', this.bid,this.ask, this.orders); 
  }
}