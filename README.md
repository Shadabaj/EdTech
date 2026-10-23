# EdTech Learning Platform

An Angular single-page application that demonstrates an online learning experience, including public pages, account flows, learner pages, and administration areas.

## Project capabilities

The current source tree includes UI modules and services for:

- Public home, sign-up, login, course/category browsing, cart, and payment screens.
- Learner pages for profile, orders, subscribed courses, and dashboard navigation.
- Administration pages and category-management UI.
- Role-aware routing with user/admin guards.
- Shared authentication and cart services, plus an HTTP interceptor.

Some screens may be scaffolds or depend on a separate backend API; verify each flow locally before presenting it as production-ready.

## Technology stack

- Angular 16 and TypeScript
- Angular Router, Reactive Forms, and RxJS
- Bootstrap 5 and Bootstrap Icons
- Jasmine and Karma test tooling
- CryptoJS is present in the dependency set

## Run locally

### Prerequisites

- Node.js and npm compatible with Angular CLI 16
- Access to the backend API expected by the configured environment

### Install and start

~~~bash
npm ci
npm start
~~~

Open `http://localhost:4200/`.

### Build and test

~~~bash
npm run build
npm test
~~~

## Project layout

~~~text
src/
├── Environment/          # Environment-specific client configuration
└── app/
    ├── Guards/           # User and admin route guards
    ├── Interceptor/      # HTTP interceptor
    ├── Models/           # Client-side data models
    ├── Modules/
    │   ├── Admin/        # Administration screens
    │   ├── User/         # Learner account screens
    │   └── public/       # Public, cart, login, signup and payment screens
    └── Services/         # Authentication, cart and utility services
~~~

## Configuration and security

Review the environment files under `src/Environment` and configure the correct API base URL for your own environment. Never put server credentials, private API keys, or production secrets in Angular environment files: values bundled into a browser application can be inspected by users.

The project includes client-side cryptographic code. Client-side encryption does not replace server-side authentication, authorization, validation, and secure key management; do not rely on a key embedded in frontend code as a secret.

## Current scope

This repository contains the Angular frontend. Document and configure the corresponding backend/API separately, and verify payment/authentication behavior against a safe development environment before deployment.

## License

No license file is currently included. Add an explicit license before inviting others to reuse or redistribute this project.
