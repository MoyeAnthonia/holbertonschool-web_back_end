export default class Building {
  /**
   * @param {Number} sqft - sqft
   */
  constructor(sqft) {
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Setter
  set sqft(value) {
    if (typeof value !== "number") {
      throw new TypeError("Square footage must be a number");
    } else {
      this._sqft = value;
    }
  }
}
