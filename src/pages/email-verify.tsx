import PageContainer from "@/components/page-container";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/form-elements";

import { toast } from "react-toastify";
import { EmailVerifySchema } from "@/lib/schemas";

import { emailVerify } from "@/lib/auth-helpers";
import InfoCard from "@/components/info-card";

export default function EmailVerify() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email");
  useEffect(() => {
    if (!email) {
      navigate("/register");
    }
  }, [email]);

  const form = useForm<z.infer<typeof EmailVerifySchema>>({
    resolver: zodResolver(EmailVerifySchema),
    defaultValues: {
      email: email || "",
      emailVerificationNumber: "",
    },
  });

  async function handleSubmit(data: z.infer<typeof EmailVerifySchema>) {
    const { emailVerificationNumber } = data;

    const result = await emailVerify(email!, emailVerificationNumber);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success("Email verified successfully!");
    navigate("/login");
  }

  return (
    <PageContainer className="flex flex-row items-center justify-center gap-16">
      <InfoCard />
      <Card className="h-auto w-[400px] shadow-lg border border-gray-200 p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Email Verification
          </CardTitle>
          <CardDescription>
            Enter the verification code sent to your email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormInput
                form={form}
                name="emailVerificationNumber"
                placeholder="123456"
                label="Verification Number"
                type="text"
              />

              <Button
                type="submit"
                className="w-full px-4 py-2 rounded-md shadow-sm text-sm mt-4"
              >
                Verify email
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="text-center">
            <p>
              Didn't receive the email? <a href="#">Resend Email</a>
            </p>
          </div>
        </CardFooter>
      </Card>
    </PageContainer>
  );
}
