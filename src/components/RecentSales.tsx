"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "../app/globals.css";
import { Input } from "./ui/input";

const salesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    initials: "OM",
    imgSrc: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    initials: "JL",
    imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    initials: "IN",
    imgSrc: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    initials: "WK",
    imgSrc: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    initials: "SD",
    imgSrc: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Emma Johnson",
    email: "emma.johnson@email.com",
    amount: "+$450.00",
    initials: "EJ",
    imgSrc: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Liam Smith",
    email: "liam.smith@email.com",
    amount: "+$230.00",
    initials: "LS",
    imgSrc: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Ava Brown",
    email: "ava.brown@email.com",
    amount: "+$610.00",
    initials: "AB",
    imgSrc: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Noah Davis",
    email: "noah.davis@email.com",
    amount: "+$350.00",
    initials: "ND",
    imgSrc: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Mia Wilson",
    email: "mia.wilson@email.com",
    amount: "+$720.00",
    initials: "MW",
    imgSrc: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "James Miller",
    email: "james.miller@email.com",
    amount: "+$150.00",
    initials: "JM",
    imgSrc: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Charlotte Garcia",
    email: "charlotte.garcia@email.com",
    amount: "+$500.00",
    initials: "CG",
    imgSrc: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Benjamin Martinez",
    email: "benjamin.martinez@email.com",
    amount: "+$620.00",
    initials: "BM",
    imgSrc: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Amelia Anderson",
    email: "amelia.anderson@email.com",
    amount: "+$400.00",
    initials: "AA",
    imgSrc: "https://randomuser.me/api/portraits/women/14.jpg",
  },
];

export default function RecentSales() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSales = salesData.filter((sale) =>
    sale.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 h-[400px] overflow-y-auto relative">
      <div className="flex items-center mb-4">
        <Input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredSales.length > 0 ? (
        filteredSales.map((sale, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full flex-col md:flex-row gap-3 md:gap-0"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src={sale.imgSrc} alt={sale.name} />
              <AvatarFallback>{sale.initials}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1 flex items-center justify-center flex-col lg:flex-row gap-3">
              <p className="text-sm font-medium leading-none">{sale.name}</p>
              <p className="text-sm text-muted-foreground">{sale.email}</p>
            </div>
            <div className="font-medium">{sale.amount}</div>
          </div>
        ))
      ) : (
        <p className="text-center text-sm text-muted-foreground">
          No results found
        </p>
      )}
    </div>
  );
}
