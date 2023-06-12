"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryContentModule = void 0;
const common_1 = require("@nestjs/common");
const subCategory_content_service_1 = require("./subCategory-content.service");
const subCategory_content_controller_1 = require("./subCategory-content.controller");
const mongoose_1 = require("@nestjs/mongoose");
const subCategory_content_schema_1 = require("./schemas/subCategory-content.schema");
let SubCategoryContentModule = exports.SubCategoryContentModule = class SubCategoryContentModule {
};
exports.SubCategoryContentModule = SubCategoryContentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'SubCategoryContent',
                    schema: subCategory_content_schema_1.SubCategoryContentSchema,
                },
            ]),
        ],
        controllers: [subCategory_content_controller_1.SubCategoryContentController],
        providers: [subCategory_content_service_1.SubCategoryContentService],
        exports: [subCategory_content_service_1.SubCategoryContentService],
    })
], SubCategoryContentModule);
//# sourceMappingURL=subCategory-content.module.js.map