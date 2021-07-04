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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BoardsService = class BoardsService {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async create(CreateBoardDto) {
        const newBoard = this.boardRepository.create(CreateBoardDto);
        const savedBoard = this.boardRepository.save(newBoard);
        return savedBoard;
    }
    async findAll() {
        return this.boardRepository.find();
    }
    async findOne(id) {
        return this.boardRepository.findOne(id);
    }
    async update(id, updateBoardDto) {
        const updatedboard = await this.boardRepository.update(id, updateBoardDto);
        return updatedboard.raw;
    }
    async remove(id) {
        await this.boardRepository.delete(id);
    }
};
BoardsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('BOARD_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map