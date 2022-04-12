"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var DATABASE_URL = process.env.NODE_ENV !== 'test'
    ? process.env.DATABASE_URL
    : process.env.DATABASE_URL + '_test';
exports["default"] = {
    type: 'postgres',
    url: DATABASE_URL,
    migrationsTableName: 'migrations',
    entities: ['dist/entities/*.js'],
    migrations: ['dist/migrations/*.js'],
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'dist/entities/*.js'
    }
};
