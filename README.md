# taghiro-validator

**Validator integration for taghiro**

Integration library for [taghiro](https://github.com/StephanSchmidt/taghiro) with [validator.js](https://github.com/chriso/validator.js/).

## Install

```
npm install taghiro-validator
```

## Example usage

```typescript

import { Email, isEmail } from 'taghiro-validator'

const mail = 'stephan.schmidt@gmail.com';

if (isEmail(mail)) {
    sendMail(mail);
}

function sendMail(mail:string & Email) {
    ...
}
```

## Implementation

taghiro-validator supports valadation that can be used as tag types.

Supported

- Email
- CreditCard
- Currency
- DataUri
- FQDN
- Hash
- HexColor
- Ip
- Isbn
- Issn
- Isin
- MimeType
