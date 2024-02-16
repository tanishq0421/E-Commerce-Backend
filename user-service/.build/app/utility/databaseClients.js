var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Client } from "pg";
export const DBClient = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Client({
        host: `${process.env.DB_HOST}`,
        user: `${process.env.DB_USER}`,
        database: `${process.env.DB_NAME}`,
        password: `${process.env.DB_PASSWORD}`,
        port: parseInt(process.env.DB_PORT)
    });
});
//# sourceMappingURL=databaseClients.js.map