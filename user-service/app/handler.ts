import { APIGatewayProxyCallbackV2 } from "aws-lambda";

export const Signup = async(event : APIGatewayProxyCallbackV2) => {
    console.log(event);
    return {
        statusCode : 200,
        headers : {
            "Access-Control-Allow-Origin" : "*",
        },
        body : JSON.stringify({
            message : "Response from Signup",
            data : {}
        }),
    };
};