export default class Building {
  /**
   * @param {Number} sqft - sqft
   */
  constructor(sqft) {
    // 1. Abstract Class Simulation: Prevent direct instantiation
    if (this.constructor === Building) {
      throw new Error(
        "Building is an abstract class and cannot be instantiated directly",
      );
    }

    // 2. Implementation Check: Ensure child classes have the required method
    if (this.evacuationWarningMessage === undefined) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage",
      );
    }
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
