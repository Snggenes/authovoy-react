import z from "zod";

const EmailVerifySchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  emailVerificationNumber: z.string().min(6, { message: "Invalid verification number" }),
});

export default EmailVerifySchema;