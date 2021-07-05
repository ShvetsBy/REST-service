"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const uuid = require("uuid");
const bcrypt_1 = require("bcrypt");
let User = class User {
    constructor({ id = uuid.v4(), name = 'John', login = 'Connor', password = 't1', } = {}) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    async hashPassword() {
        this.password = await bcrypt_1.default.hash(this.password, 10);
    }
    static toResponce(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], User.prototype, "login", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    typeorm_1.Entity('<User>'),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.intity.js.map