import twilio from "twilio";

const accountSid = "AC38ae108dc23f260745ea64ddf6ec8a79";
const authToken = "804c7ad6ae09e3d468b1d7a8670d9773";

const client = twilio(accountSid, authToken);

export const GenerateAccessCode = () => {
  const code = Math.floor(10000 + Math.random() * 900000);
  let expiry = new Date();
  expiry.setTime(new Date().getTime() + 30 * 60 * 1000);
  return { code, expiry };
};

export const SendVerificationToken = async (
  code: number,
  toPhoneNumber: string
) => {
    const response = await client.messages.create({
        body : `Your verification code is ${code}`,
        from : "+18065152939",
        to : toPhoneNumber.trim()
    });

    console.log(response);
    return response;
};
