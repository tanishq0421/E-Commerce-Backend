import { UserModel } from "./../models/UserModels"

export class UserRepository{
    constructor(){}

    async createAccount({ email, password, salt, phone, userType }: UserModel){
        
    }
}