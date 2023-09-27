<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This repository used "[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository" to implement an API following the requirements of the "Prueba Técnica Desarrollador Backend - INLAZE".

## Installation

If you use `npm` please delete the `yarn.lock` file and run the following command

```bash
$ npm install
```

If you use `yarn` run the following command

```bash
$ yarn install
```
## Environments Variables

You need to set the environment variables in the `env` file, please follow the example file `env-example`

```env
## APP SETTINGS
PORT=
NODE_ENV=

## DATABASE CREDENTIALS
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASS=

## AUTHENTICATION
JWT_SECRET=
```
## Setting the Database

1. Generate the database using docker (You need to have docker installed)
```bash
$ docker-compose up -d
```

2. Seed the initial information needed
- If you use `npm`
```bash
$ npm run seed
```
- If you use `yarn`
```bash
$ yarn seed
```

After complete those steps you can get info of some Users fake created with the Admin and SuperAdmin roles, You can see the `password` and `email` in the `console`.

## Running the app

After setting the database you can run the APP with any of the following commands

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

The test environment is not functional

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## DOCS
You can see a documentation in the link `${APP_URL}/docs`
## Support

If you have any doubts or an error is generated, please do not hesitate to request support <a href="mailto:ferwin.arias@gmail.com">here</a>.


## Stay in touch

- [Github](https://github.com/ferwinred)
- [Linkedin](https://www.linkedin.com/in/ferwinarias)
