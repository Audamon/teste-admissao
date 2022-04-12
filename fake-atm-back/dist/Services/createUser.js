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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const database_1 = require("../database");
const UserEntity_1 = __importDefault(require("../Entities/UserEntity"));
function createUser(name, adress, cpf, password, birthday) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            name,
            password,
            adress,
            cpf,
            birthday,
        };
        const user = yield database_1.AppDataSource.getRepository(UserEntity_1.default).create(data);
        yield database_1.AppDataSource.getRepository(UserEntity_1.default).save(user);
        return user;
    });
}
exports.createUser = createUser;
