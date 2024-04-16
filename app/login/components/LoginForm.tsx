"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { ElementRef, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "../../../actions/login/login";

const Login = () => {
  const loginSchema = z.object({
    username: z.string(),
    password: z.string(),
  });
  const form = useForm<{ username: string; password: string }>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [error, setError] = useState<{ error: string | undefined }>({
    error: undefined,
  });
  const onSubmit = (formData: { username: string; password: string }) => {
    login(formData).then((e) => {
      setError(e);
      console.log(e);
    });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Username"
                        {...field}
                        className="bg-gray-100"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="bg-gray-100"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-red-500">
                Sign in
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>{error?.error}</CardFooter>
      </Card>
    </div>
  );
};

export default Login;
