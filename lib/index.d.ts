import { Tag } from 'taghiro';
export declare type Email = Tag<'email'>;
export declare function isEmail(value: string): value is string & Email;
