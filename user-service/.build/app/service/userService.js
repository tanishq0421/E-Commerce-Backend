var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SignupInput } from "./../models/dto/signupInput";
import { UserRepository } from "./../repository/userRepository";
import { ErrorResponse, SuccessResponse } from "./../utility/response";
import { autoInjectable } from "tsyringe";
import { plainToClass } from "class-transformer";
import { AppValidationError } from "./../utility/errors";
import { GetSalt, GetHashedPassword } from "./../utility/password";
let UserService = class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    // User Creation, Login, Validation
    CreateUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = plainToClass(SignupInput, event.body);
                const error = yield AppValidationError(input);
                if (error) {
                    return ErrorResponse(404, error);
                }
                const salt = yield GetSalt();
                const hashedPassword = yield GetHashedPassword(input.password, salt);
                const data = yield this.repository.createAccount({
                    email: input.email,
                    password: hashedPassword,
                    phone: input.phone,
                    userType: "BUYER",
                    salt: salt,
                });
                return SuccessResponse(data);
            }
            catch (error) {
                console.error(error);
                return ErrorResponse(500, error);
            }
        });
    }
    UserLogin(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from UserLogin" });
        });
    }
    VerifyUser(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from VerifyUser" });
        });
    }
    // User Profile
    CreateProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from CreateProfile" });
        });
    }
    GetProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from GetProfile" });
        });
    }
    EditProfile(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from  EditProfile" });
        });
    }
    // Cart Section
    CreateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from CreateCart" });
        });
    }
    GetCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from GetCart" });
        });
    }
    UpdateCart(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from  EditCart" });
        });
    }
    // Payment Section
    CreatePayment(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from CreatePayment" });
        });
    }
    GetPayment(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from GetPayment" });
        });
    }
    UpdatePayment(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return SuccessResponse({ message: "response from  EditPayment" });
        });
    }
};
UserService = __decorate([
    autoInjectable(),
    __metadata("design:paramtypes", [UserRepository])
], UserService);
export { UserService };
//# sourceMappingURL=userService.js.map