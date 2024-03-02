import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "./../models/UserModels";

const APP_SECRET = "out_app_secret";

export const GetSalt = async () => {
  return await bcrypt.genSalt();
};

export const GetHashedPassword = async (password: string, salt: string) => {
  return await bcrypt.hash(password, salt);
};

export const ValidatePassword = async (
  enteredPassword: string,
  savedPassword: string,
  salt: string
) => {
  return (await GetHashedPassword(enteredPassword, salt)) === savedPassword;
};

export const GetToken = async({email, user_id, phone, userType} : UserModel) => {
    return await jwt.sign({
        user_id,
        email,
        phone,
        userType
    },
    APP_SECRET,
    {
        expiresIn : "30d",
    }
    );
}

export const VerifyToken = async(token : string) : Promise<UserModel | false> => {
    try{
        if(token !== ""){
            const payload = await jwt.verify(token.split(" ")[1], APP_SECRET);
            return payload as UserModel;
        }
        return false;
    }catch(error : any){
        console.error(error);
        return false;
    }
}