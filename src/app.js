export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export class ArrayBufferConverter {
  static load(buffer) {
    this.buffer = getBuffer(buffer);
  }

  static toString() {
    const buffView = new Uint16Array(this.buffer);
    return String.fromCharCode(...buffView);
  }
}
