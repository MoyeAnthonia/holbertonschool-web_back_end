export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }
    const int8 = new Int8Array(length);

    // Set the value at the specific position
    int8[position] = value;

    // Return the underlying ArrayBuffer
    return int8.buffer;
}
