import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connect from './database';
import * as createUserController from './Controllers/createUser';
import * as signInUserController from './Controllers/signInUser';
import * as updateUserController from './Controllers/updateUser';
import * as deleteUserController from './Controllers/deleteUser';

import * as authMiddleware from './Middleware/auth';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/sign-up', createUserController.createUser);
app.post('/sign-in', signInUserController.signInUser);
app.patch('/user/update', authMiddleware.userAuthorization, updateUserController.updateUser);
app.delete('/user/delete', authMiddleware.userAuthorization, deleteUserController.deleteUser);

export async function init() {
  await connect();
}

export default app;
