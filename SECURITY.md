# Security notes

This repository contains an Angular browser application and client-side CryptoJS code.

- Values inside Angular environment files are bundled into the frontend and can be inspected by users. The active `encKey` value must not be treated as a private secret.
- If encryption is being used to protect sensitive data, move that operation to a trusted backend and manage keys outside the browser bundle.
- Do not log plaintext user data, authentication tokens, or encrypted payloads to the browser console.
- Enforce authentication, authorization, validation, and data protection on the API server. Client-side route guards and obfuscation are not security boundaries.
- Rotate any credential or key that was real and previously committed, and assess whether Git history cleanup is needed.

Please avoid posting credentials, tokens, or personal data in public issues.
