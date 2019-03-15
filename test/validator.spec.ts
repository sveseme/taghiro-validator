import { isHexColor } from '../src';

test('isHexColor returns true for #f0f0f0', () => {
  expect(isHexColor('#f0f0f0')).toBe(true);
});

