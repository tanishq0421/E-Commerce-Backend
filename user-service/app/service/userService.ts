import { SignupInput } from "./../models/dto/signupInput";
import { UserRepository } from "./../repository/userRepository";
import { ErrorResponse, SuccessResponse } from "./../utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { autoInjectable } from "tsyringe";
import { plainToClass } from "class-transformer";
import { AppValidationError } from "./../utility/errors";
import {
  GetSalt,
  GetHashedPassword,
  ValidatePassword,
  GetToken,
  VerifyToken,
} from "./../utility/password";
import { LoginInput } from "./../models/dto/loginInput";
import { GenerateAccessCode, SendVerificationToken } from "./../utility/notification";

@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  // User Creation, Login, Validation
  async CreateUser(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(SignupInput, event.body);
      const error = await AppValidationError(input);
      if (error) {
        return ErrorResponse(404, error);
      }

      const salt = await GetSalt();
      const hashedPassword = await GetHashedPassword(input.password, salt);
      const data = await this.repository.createAccount({
        email: input.email,
        password: hashedPassword,
        phone: input.phone,
        userType: "BUYER",
        salt: salt,
      });

      return SuccessResponse(data);
    } catch (error: any) {
      console.error(error);
      return ErrorResponse(500, error);
    }
  }

  async UserLogin(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(LoginInput, event.body);
      const error = await AppValidationError(input);
      if (error) {
        return ErrorResponse(404, error);
      }
      const data = await this.repository.findAccount(input.email);
      const verified = await ValidatePassword(
        input.password,
        data.password,
        data.salt
      );
      if (!verified) {
        throw new Error("password doesn't match");
      }
      const token = GetToken(data);
      return SuccessResponse({ token });
    } catch (error: any) {
      console.error(error);
      return ErrorResponse(500, error);
    }
  }

  async GetVerificationToken(event : APIGatewayProxyEventV2){
    try{
      const token = event.headers.authorization;
      const payload = await VerifyToken(token);
      if(!payload){
        throw new Error("Payload not found");
      }
      const {code, expiry} = GenerateAccessCode();
      const response = SendVerificationToken(code, payload.phone);
      // save on db to confirm verification.
      return SuccessResponse({
        message : "verification code is sent to your registered mobile number"
      });
    }catch(error : any){
      console.error(error);
      return ErrorResponse(500, error);
    }
  }

  async VerifyUser(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from VerifyUser" });
  }

  // User Profile
  async CreateProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from CreateProfile" });
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from GetProfile" });
  }

  async EditProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from  EditProfile" });
  }

  // Cart Section
  async CreateCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from CreateCart" });
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from GetCart" });
  }

  async UpdateCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from  EditCart" });
  }

  // Payment Section
  async CreatePayment(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from CreatePayment" });
  }

  async GetPayment(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from GetPayment" });
  }

  async UpdatePayment(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from  EditPayment" });
  }
}
