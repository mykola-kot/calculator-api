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