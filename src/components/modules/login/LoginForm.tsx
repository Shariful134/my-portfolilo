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
import { loginUser } from "@/app/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

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
});

export function LoginForm() {
  const router = useRouter();

  const { setIsLoading } = useUser();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Shariful Islam",
      email: "sharifuls@gmail.com",
      password: "Shariful!23",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const userData = {
      ...data,
      role: "user",
    };
    try {
      const res = await loginUser(userData);
      setIsLoading(true);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        setTimeout(() => {
          window.location.reload();
        }, 1000);

        router.push("/");
      } else toast.error(res?.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border-1 border-purple-500 p-10 rounded-2xl text-white bg-gray-900">
      <h2 className="text-3xl mb-5">Please Login</h2>
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

          <p>
            Dont Have an Account?{" "}
            <Link className="text-purple-500" href={"/register"}>
              Register
            </Link>
          </p>
          <Button
            className="roudend-full cursor-pointer border-0 bg-gray-300 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
            type="submit"
          >
            {isSubmitting ? "Login..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
