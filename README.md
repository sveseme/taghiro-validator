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

## License (MIT)

```
Copyright (c) 2019 Stephan Schmidt

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
