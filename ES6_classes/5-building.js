export default class Building {
  /**
   * @param {Number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    // Abstract class check
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== "function") {
        throw new Error(
          "Class extending Building must override evacuationWarningMessage",
        );
      }
    }

    this.sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(value) {
    if (typeof value !== "number") {
      throw new TypeError("sqft must be a number");
    }
    this._sqft = value;
  }
}
