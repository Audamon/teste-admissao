"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    name: 'default',
    url: process.env.DATABASE_URL,
    // host: 'localhost',
    // port: 5432,
    // username: 'postgres',
    // password: '123456',
    // database: 'fakeatm',
    entities: [
        `${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/Entities/*.*`,
    ],
});
exports.AppDataSource = AppDataSource;
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        return AppDataSource.initialize();
    });
}
exports.default = connect;
