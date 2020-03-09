import { Result } from './results';
import { validate, ErrorMessage } from './validator';
import { NonEmpty, isNotEmpty } from 'taghiro';

export { vNotEmpty };

function vNotEmpty<T extends { length: number }>(value: T): Result<T & NonEmpty, ErrorMessage> {
  return validate<T, T & NonEmpty>(value, isNotEmpty);
}
