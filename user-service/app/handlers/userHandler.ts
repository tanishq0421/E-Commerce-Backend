import { APIGatewayProxyEventV2 } from "aws-lambda";
import { container } from "tsyringe";
import { UserService } from "./../service/userService";
import { ErrorResponse } from "./../utility/response";
import jsonBodyParser from "@middy/http-json-body-parser";
import middy from "@middy/core";

const service = container.resolve(UserService);

export const Signup = middy((event : APIGatewayProxyEventV2) => {
    return service.CreateUser(event);
}).use(jsonBodyParser());

export const Login = middy((event : APIGatewayProxyEventV2) => {
    return service.UserLogin(event);
}).use(jsonBodyParser());

export const Verify = async(event : APIGatewayProxyEventV2) => {
    return service.VerifyUser(event);
};

export const Profile = async(event : APIGatewayProxyEventV2) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if(httpMethod === "post") {
        return service.CreateProfile(event);
    }else if(httpMethod === "put") {
        return service.EditProfile(event);
    }else if(httpMethod === "get") {
        return service.GetProfile(event);
    }else {
        return ErrorResponse(404, "requested method is not supported!");
    }
};

export const Cart = async(event : APIGatewayProxyEventV2) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if(httpMethod === "post") {
        return service.CreateCart(event);
    }else if(httpMethod === "put") {
        return service.UpdateCart(event);
    }else if(httpMethod === "get") {
        return service.GetCart(event);
    }else {
        return ErrorResponse(404, "requested method is not supported!");
    }
};

export const Payment = async(event : APIGatewayProxyEventV2) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if(httpMethod === "post") {
        return service.CreatePayment(event);
    }else if(httpMethod === "put") {
        return service.UpdatePayment(event);
    }else if(httpMethod === "get") {
        return service.GetPayment(event);
    }else {
        return ErrorResponse(404, "requested method is not supported!");
    }
};