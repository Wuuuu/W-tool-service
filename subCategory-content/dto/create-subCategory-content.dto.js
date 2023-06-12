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
exports.CreateSubCategoryContentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSubCategoryContentDto {
}
exports.CreateSubCategoryContentDto = CreateSubCategoryContentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '问答项标题' }),
    (0, class_validator_1.IsNotEmpty)({ message: '请传入问答项标题' }),
    __metadata("design:type", String)
], CreateSubCategoryContentDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '子类别Id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '请传入子类别Id' }),
    __metadata("design:type", String)
], CreateSubCategoryContentDto.prototype, "subCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '问答项内容' }),
    (0, class_validator_1.IsNotEmpty)({ message: '请传入问答项内容' }),
    __metadata("design:type", String)
], CreateSubCategoryContentDto.prototype, "content", void 0);
//# sourceMappingURL=create-subCategory-content.dto.js.map