# Parallel Calculator

This repository contains the solution for the test assignment. The time limit is up to 8 hours.

## Description

Implement a calculator that evaluates a given mathematical expression in parallel.

### Requirements:
- The code **MUST** be version controlled.
- The solution **MUST** be implemented in **Nest.js** and **TypeScript**.
- The solution **MUST** handle the input via HTTP and respond with the evaluated result or a validation error as shown in the example.
- **Supported operations:**
    - `+` - addition
    - `-` - subtraction
    - `/` - division
    - `*` - multiplication
    - `(` - left parenthesis
    - `)` - right parenthesis

### Example:
```bash
$ curl -H "Content-Type: application/json" \
-X POST \
-d '{"expression":"(1-1)*2+3*(1-3+4)+10/2"}' \
http://localhost:8080/evaluate
{"result": 11}
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test
```

```bash
curl -H "Content-Type: application/json" -X POST -d '{"expression":"(1-1)*2+3*(1-3+4)+10/2"}' http://localhost:3000/evaluate
curl -H "Content-Type: application/json" -X POST -d '{"expression":"error"}' http://localhost:3000/evaluate
```