import InfoCard from "@/components/info-card";
import PageContainer from "@/components/page-container";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/form-elements";

import { RegisterFormSchema } from "@/lib/schemas";

import { register } from "@/lib/auth-helpers";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(data: z.infer<typeof RegisterFormSchema>) {
    const { email, password } = data;

    const result = await register(email, password);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success("Account created successfully!");
    navigate("/email-verify?email=" + email);
  }

  return (
    <PageContainer className="flex flex-row items-center justify-center gap-16">
      <InfoCard />
      <Card className="h-auto w-[400px] shadow-lg border border-gray-200 p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Create Your Account
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 mt-2">
            Start your journey with seamless authentication and user management.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50">
              <FcGoogle className="mr-2 h-5 w-5" />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50">
              <FaGithub className="mr-2 h-5 w-5 text-black" />
              Sign up with GitHub
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
            <span className="block w-full h-px bg-gray-300"></span>
            <span>OR</span>
            <span className="block w-full h-px bg-gray-300"></span>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <FormInput
                form={form}
                name="email"
                placeholder="johndoe@mail.com"
                label="Email"
              />
              <FormInput
                form={form}
                name="password"
                placeholder="********"
                label="Password"
                type="password"
              />
              <Button
                type="submit"
                className="w-full px-4 py-2 rounded-md shadow-sm text-sm mt-4"
              >
                Sign up with Email
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-center text-gray-500 text-sm">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="hover:underline font-medium">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </PageContainer>
  );
}
