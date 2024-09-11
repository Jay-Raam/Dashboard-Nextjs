"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import "./stlye.css";
import { IoMdClose } from "react-icons/io";

interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email: string;
  password: string;
}

export default function Component() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [main, setMain] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let errors: Errors = { email: "", password: "" };
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password is required";
    }

    if (!errors.email && !errors.password) {
      setMain("Form submitted");
      setFormData({ email: "", password: "" });
    } else {
      setErrors(errors);
    }
  };

  const handleClose = () => {
    setMain("");
    setErrors({ email: "", password: "" });
  };

  return (
    <div className="login mx-auto max-w-[1000px] my-0 w-[300px] md:w-[700px] lg:w-[900px] mt-[50px] ">
      <Card className="mx-auto border-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 h-[600px] flex justify-center items-start gap-3 flex-col"
          >
            <div className="space-y-2 w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="example@gmail.com"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
            <p className="mb-0 mt-2 pt-1 text-sm">
              Create an account?
              <Link
                href="/register"
                className="text-danger font-semibold ml-3 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
      <div className="gal-501 max-w-[1200px] w-full">
        {errors.email && (
          <Alert>
            <AlertTitle>Error</AlertTitle>
            <span onClick={handleClose} className="gal-502">
              <IoMdClose />
            </span>
            <AlertDescription>{errors.email}</AlertDescription>
          </Alert>
        )}

        {errors.password && (
          <Alert>
            <AlertTitle>Error</AlertTitle>
            <span onClick={handleClose} className="gal-502">
              <IoMdClose />
            </span>
            <AlertDescription>{errors.password}</AlertDescription>
          </Alert>
        )}

        {main && (
          <Alert>
            <AlertTitle>Welcome to tech!</AlertTitle>
            <span onClick={handleClose} className="gal-502">
              <IoMdClose />
            </span>
            <AlertDescription>{main}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
