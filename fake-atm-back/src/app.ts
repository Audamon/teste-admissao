import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connect from './database';
import * as createUserController from './Controllers/createUser';
import * as signInUserController from './Controllers/signInUser';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/sign-up', createUserController.createUser);
app.post('/sign-in', signInUserController.signInUser);

export async function init() {
  await connect();
}

export default app;
