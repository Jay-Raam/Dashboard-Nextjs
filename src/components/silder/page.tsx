"use client";

import "./SliderMenu.css";
import Link from "next/link";

export default function SliderMenu() {
  return (
    <div className="sliderMenu">
      <ul className="menuItems">
        <li className="show">
          <Link href="/">Home</Link>
        </li>
        <li className="show">
          <Link href="/sale">sale</Link>
        </li>
        <li className="show">
          <Link href="/login">login</Link>
        </li>
        <li className="show">
          <Link href="/register">register</Link>
        </li>
        <li className="show">
          <Link href="/calender">calender</Link>
        </li>
        <li className="show">
          <Link href="/user">User</Link>
        </li>
        <li className="show">
          <Link href="/download">Image-Download</Link>
        </li>
        <li className="show">
          <Link href="/anime">Anime</Link>
        </li>
      </ul>
    </div>
  );
}
