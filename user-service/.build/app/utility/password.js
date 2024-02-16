var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from "bcrypt";
export const GetSalt = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.genSalt();
});
export const GetHashedPassword = (password, salt) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.hash(password, salt);
});
export const ValidatePassword = (enteredPassword, savedPassword, salt) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield GetHashedPassword(enteredPassword, salt)) === savedPassword;
});
//# sourceMappingURL=password.js.map