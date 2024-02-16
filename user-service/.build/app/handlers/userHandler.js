var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { container } from "tsyringe";
import { UserService } from "./../service/userService";
import { ErrorResponse } from "./../utility/response";
import jsonBodyParser from "@middy/http-json-body-parser";
import middy from "@middy/core";
const service = container.resolve(UserService);
export const Signup = middy((event) => {
    return service.CreateUser(event);
}).use(jsonBodyParser());
export const Login = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return service.UserLogin(event);
});
export const Verify = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return service.VerifyUser(event);
});
export const Profile = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return service.CreateProfile(event);
    }
    else if (httpMethod === "put") {
        return service.EditProfile(event);
    }
    else if (httpMethod === "get") {
        return service.GetProfile(event);
    }
    else {
        return ErrorResponse(404, "requested method is not supported!");
    }
});
export const Cart = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return service.CreateCart(event);
    }
    else if (httpMethod === "put") {
        return service.UpdateCart(event);
    }
    else if (httpMethod === "get") {
        return service.GetCart(event);
    }
    else {
        return ErrorResponse(404, "requested method is not supported!");
    }
});
export const Payment = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return service.CreatePayment(event);
    }
    else if (httpMethod === "put") {
        return service.UpdatePayment(event);
    }
    else if (httpMethod === "get") {
        return service.GetPayment(event);
    }
    else {
        return ErrorResponse(404, "requested method is not supported!");
    }
});
//# sourceMappingURL=userHandler.js.map