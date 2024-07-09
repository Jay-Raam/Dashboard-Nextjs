"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["top"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export default function SheetSide() {
  return (
    <div className="flex">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">≡</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <div className="flex flex-col gap-2 justify-center items-center">
              <Link href="/">Home</Link>
              <Link href="/sale">Sale</Link>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
              <Link href="/user">User</Link>
              <Link href="/anime">Anime</Link>
            </div>
            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
