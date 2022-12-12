import { ArrayBufferConverter, getBuffer } from '../app';

test('Проверка методов load и toString', () => {
  ArrayBufferConverter.load(getBuffer());
  const recieved = ArrayBufferConverter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(recieved).toEqual(expected);
});
