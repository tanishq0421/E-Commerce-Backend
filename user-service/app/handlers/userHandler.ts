import { APIGatewayProxyCallbackV2, APIGatewayProxyEventV2 } from "aws-lambda";
import { UserService } from "./../service/userService";

const service = new UserService();

export const Signup = async(event : APIGatewayProxyEventV2) => {
    return service.CreateUser(event);
};

export const Login = async(event : APIGatewayProxyEventV2) => {
    return service.UserLogin(event);
};

export const Verify = async(event : APIGatewayProxyEventV2) => {
    return service.VerifyUser(event);
};

export const Profile = async(event : APIGatewayProxyEventV2) => {
    return service.CreateUser(event);
};

export const Cart = async(event : APIGatewayProxyEventV2) => {
    return service.CreateUser(event);
};

export const Payment = async(event : APIGatewayProxyEventV2) => {
    return service.CreateUser(event);
};