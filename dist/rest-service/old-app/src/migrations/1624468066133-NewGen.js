"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewGen1624468066133 = void 0;
class NewGen1624468066133 {
    constructor() {
        this.name = 'NewGen1624468066133';
    }
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE "<Task>" ALTER COLUMN "boardId" SET NOT NULL');
    }
    async down(queryRunner) {
        await queryRunner.query('ALTER TABLE "<Task>" ALTER COLUMN "boardId" DROP NOT NULL');
    }
}
exports.NewGen1624468066133 = NewGen1624468066133;
//# sourceMappingURL=1624468066133-NewGen.js.map