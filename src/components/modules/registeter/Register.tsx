/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { registerStudent } from "@/app/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please Enter a valid Email",
  }),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

export function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Shariful Islam",
      email: "sharifuls@gmail.com",
      password: "Shariful!23",
      confirmPassword: "Shariful!23",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const userData = {
      ...data,
      role: "user",
    };
    try {
      const res = await registerStudent(userData);
      console.log("res: ", res);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="border-1 border-purple-500 p-10 rounded text-white">
      <h2 className="text-3xl mb-5">Please Register</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input className="max-w-xl " placeholder="name" {...field} />
                </FormControl>
                <FormMessage className="" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="max-w-xl" placeholder="email" {...field} />
                </FormControl>

                <FormMessage className="" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="max-w-xl"
                    placeholder="password"
                    type="password"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ConfirmPassword</FormLabel>
                <FormControl>
                  <Input
                    className="max-w-xl"
                    placeholder="confirmPassword"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="" />
              </FormItem>
            )}
          />
          <p>
            Have an Account?{" "}
            <Link className="text-purple-500" href={"/login"}>
              Login
            </Link>
          </p>
          <Button
            disabled={!!confirmPassword && password !== confirmPassword}
            className="roudend-full cursor-pointer border-0 bg-gray-300 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
            type="submit"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
