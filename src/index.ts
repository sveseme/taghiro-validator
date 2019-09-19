import * as validator from "validator";
import { Tag } from "taghiro";

export type Email = Tag<"email">;

export function isEmail(value: string): value is string & Email {
  return validator.isEmail(value);
}

export type CreditCard = Tag<"credit-card">;

export function isCreditCard(value: string): value is string & CreditCard {
  return validator.isCreditCard(value);
}

export type Currency = Tag<"currency">;

export function isCurrrency(value: string): value is string & Currency {
  return validator.isCurrency(value);
}

export type DataUri = Tag<"data-uri">;

export function isDataUri(value: string): value is string & DataUri {
  return validator.isDataURI(value);
}

export type FQDN = Tag<"fqdn">;

export function isFQDN(value: string): value is string & FQDN {
  return validator.isFQDN(value);
}

type HashType =
  | "md4"
  | "md5"
  | "sha1"
  | "sha256"
  | "sha384"
  | "sha512"
  | "ripemd128"
  | "ripemd160"
  | "tiger128"
  | "tiger160"
  | "tiger192"
  | "crc32"
  | "crc32b";

export declare class Hash<T extends HashType> {
  private __hash: HashType;
}

export function isHash<T extends HashType>(value: string, hash: T): value is string & Hash<T> {
  return validator.isHash(value, hash);
}

export type HexColor = Tag<"hexcolor">;

export function isHexColor(value: string): value is string & HexColor {
  return validator.isHexColor(value);
}

export type Ip = Tag<"ip">;

export function isIp(value: string): value is string & Ip {
  return validator.isIP(value);
}

export type Isbn = Tag<"isbn">;

export function isIsbn(value: string): value is string & Isbn {
  return validator.isISBN(value);
}

export type Issn = Tag<"issn">;

export function isIssn(value: string): value is string & Issn {
  return validator.isISSN(value);
}

export type Isin = Tag<"isin">;

export function isIsin(value: string): value is string & Isin {
  return validator.isISIN(value);
}

export type MimeType = Tag<"mime-type">;

export function isMimeType(value: string): value is string & MimeType {
  return validator.isMimeType(value);
}
