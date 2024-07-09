"use client";

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Cat,
  Cable,
  Brain,
  Calendar,
  Camera,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [onlyWidth, setOnlyWidth] = useState<number>(useWindowWidth());
  const [mobileWidth, setMobileWidth] = useState<boolean>(false);

  useEffect(() => {
    setMobileWidth(onlyWidth < 768);
  }, [onlyWidth]);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
      <div className="relative min-w-[100px] px-3 pb-10 pt-24 ">
        {!mobileWidth && (
          <div className="absolute right-[-20px] top-7">
            <button
              type="button"
              onClick={toggleSidebar}
              className="rounded-full p-2 bg-white border"
              title="button"
            >
              <span className="text-black">
                {" "}
                <ChevronRight />{" "}
              </span>
            </button>
          </div>
        )}
        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
              title: "home",
              href: "/",
              icon: LayoutDashboard,
              variant: "default",
            },
            {
              title: "Users",
              href: "/user",
              icon: UsersRound,
              variant: "ghost",
            },
            {
              title: "Calendar",
              href: "/calendar",
              icon: Calendar,
              variant: "ghost",
            },
            {
              title: "Sale",
              href: "/sale",
              icon: ShoppingCart,
              variant: "ghost",
            },
            {
              title: "login",
              href: "/login",
              icon: Brain,
              variant: "ghost",
            },
            {
              title: "Register",
              href: "/register",
              icon: Cable,
              variant: "ghost",
            },
            {
              title: "Anime",
              href: "/anime",
              icon: Cat,
              variant: "ghost",
            },
          ]}
        />
      </div>
    </>
  );
}
