# EdTech

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



//////////////////////Decrypt

Decrypt(encData: any): any {
    try {
      console.log('Encrypted data:', encData);

        // Check if encData is valid
        if (!encData || typeof encData !== 'string' || encData.trim() === '') {
            throw new Error('Invalid encrypted data.');
        }

        // Try to decrypt the data using the provided key
        const key = CryptoJS.enc.Hex.parse(environment.encKey);  // Ensure the key is parsed correctly
        var bytes = CryptoJS.AES.decrypt(encData, key);  // Decrypt the data
        
        // Convert bytes to UTF-8
        var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        // Check if decryption result is valid
        if (!decryptedData || decryptedData.trim() === '') {
            throw new Error('Decryption failed, result is empty.');
        }

        // Try parsing the decrypted data as JSON
        return JSON.parse(decryptedData);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Decryption error:', error.message);
        } else {
            console.error('Unknown error during decryption:', error);
        }

        return null;  // Return null or handle the error appropriately
    }
}
