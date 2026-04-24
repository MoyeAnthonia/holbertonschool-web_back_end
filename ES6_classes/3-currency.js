export default class Currency {
  /**
   * @param {String} code - code of currency
   * @param {String} name - name of currency
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== "string") {
      throw new TypeError("Code must be a string");
    }
    this._code = value;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = value;
  }
  //   function
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
