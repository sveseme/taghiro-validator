import { isEmail as vIsEmail } from 'validator';
import { Tag } from 'taghiro';

export type Email = Tag<'email'>;

export function isEmail(value: string): value is string & Email {
  return vIsEmail(value);
}
