"use client";

import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import "./register.css";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { IoMdClose } from "react-icons/io";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [main, setMain] = useState<string>("");

  const validateForm = (): boolean => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setMain("Registration successful");
    } else {
      setMain("Form validation failed");
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Perform email validation
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleClose = () => {
    setMain("");
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };

  return (
    <div className="Register mx-auto my-0">
      <section className="h-screen mx-auto my-0">
        <div className="h-full mx-auto my-0">
          <div className="flex flex-col gap-4 h-auto mx-auto my-0 w-full items-center justify-center">
            <div className="w-[300px] shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://img.freepik.com/free-photo/mythical-dragon-beast-anime-style_23-2151112842.jpg?t=st=1720519413~exp=1720523013~hmac=9928e77884b5c8b08c2ba9612f67f163e9ad5bb4219dc5f6a231ae462f727157&w=1380"
                className="w-full"
                alt="Sample image"
              />
            </div>

            <div className="register mb-12 md:mb-0 w-[500px]">
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <Input
                    type="text"
                    className={`peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear peer-focus:text-primary motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary ${
                      emailError && "border-red-500"
                    }`}
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleBlur}
                  />
                  {emailError && (
                    <div>
                      <span className="close text-red-500 text-[17px]">×</span>
                      <p className="text-[12px] mt-[7px] text-red-500">
                        {emailError}
                      </p>
                    </div>
                  )}
                </div>

                <div className="relative mb-6" data-twe-input-wrapper-init>
                  <Input
                    type="password"
                    className={`peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear peer-focus:text-primary motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary ${
                      passwordError && "border-red-500"
                    }`}
                    id="exampleFormControlInput22"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <div className="gal-601">
                      <span className="close text-red-500 text-[17px]">
                        <IoMdClose />
                      </span>
                      <p className="text-[12px] mt-[7px] text-red-500">
                        {passwordError}
                      </p>
                    </div>
                  )}
                </div>

                <div className="text-center lg:text-left">
                  <Button
                    type="submit"
                    className="inline-block w-full rounded bg-primary p-7 pb-[36px] pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150  dark:shadow-black/30 dark:text-black dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Register
                  </Button>

                  <p className="mb-0 mt-2 pt-1 text-sm">
                    Have an account?
                    <Link
                      href="/login"
                      className="text-danger font-semibold ml-3 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="gal-501">
              {main && (
                <Alert>
                  <AlertTitle>Take a note...</AlertTitle>
                  <span onClick={handleClose} className="gal-502">
                    ×
                  </span>
                  <AlertDescription>{main}</AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
