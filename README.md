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

Supported

- Email
