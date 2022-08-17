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
exports.LoginDto = exports.RestaurantImagesDto = exports.LocationDto = exports.RestaurantDto = exports.CommentDto = exports.MenuDto = exports.ReviewDto = exports.UserDto = exports.RefreshTokenDto = void 0;
const class_validator_1 = require("class-validator");
class RefreshTokenDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);
exports.RefreshTokenDto = RefreshTokenDto;
class UserDto {
}
exports.UserDto = UserDto;
class ReviewDto {
}
exports.ReviewDto = ReviewDto;
class MenuDto {
}
exports.MenuDto = MenuDto;
class CommentDto {
}
exports.CommentDto = CommentDto;
class RestaurantDto {
}
exports.RestaurantDto = RestaurantDto;
class LocationDto {
}
exports.LocationDto = LocationDto;
class RestaurantImagesDto {
}
exports.RestaurantImagesDto = RestaurantImagesDto;
class LoginDto {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;
//# sourceMappingURL=Dto.js.map