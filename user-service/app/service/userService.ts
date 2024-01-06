import { SuccessResponse } from "app/utility/response"
import { APIGatewayProxyEventV2 } from "aws-lambda"

export class UserService{
    constructor(){}

    // User Creation, Login, Validation
    async CreateUser(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from CreateUser"});
        
    }

    async UserLogin(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from UserLogin"});
        
    }

    async VerifyUser(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from VerifyUser"});
        
    }

    // User Profile
    async CreateProfile(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from CreateProfile"});
        
    }

    async GetProfile(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from GetProfile"});
        
    }

    async EditProfile(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from  EditProfile"});
        
    }

    // Cart Section
    async CreateCart(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from CreateCart"});
        
    }

    async GetCart(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from GetCart"});
        
    }

    async UpdateCart(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from  EditCart"});
        
    }

    // Payment Section
    async CreatePayment(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from CreatePayment"});
        
    }

    async GetPayment(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from GetPayment"});
        
    }

    async UpdatePayment(event : APIGatewayProxyEventV2) {
        return SuccessResponse({message : "response from  EditPayment"});
        
    }
}