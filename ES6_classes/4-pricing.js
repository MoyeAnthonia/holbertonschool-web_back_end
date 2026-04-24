import Currency from "./3-currency.js";

export default class Pricing {
  /**
   * @param {Number} amount - amount of currency
   * @param {Currency} currency - name of currency
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  get amount() {
    return this.amount;
  }

  set amount(value) {
    if (typeof value !== "number") {
      throw new TypeError("Amount must be a number");
    }
    this._amount = value;
  }
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError("Currency must be an instance of the Currency class");
    } else {
      this._currency = value;
    }
  }

  //   function
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
  static convertPrice(amount, conversionRate) {
     const result = this.amount * this.conversionRate
     return result;
  }
}
