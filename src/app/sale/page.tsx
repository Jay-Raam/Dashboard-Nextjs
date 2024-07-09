"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { MoreHorizontalIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import "./style.css";
import { IoMdClose } from "react-icons/io";

interface OrderData {
  order: string;
  customer: string;
  channel: string;
  date: string;
  total: string;
  status: string;
}

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let Value = e.target.value;
    setSearchQuery(Value);
  };

  function HandleColse() {
    setSelectedOrder(null);
  }

  const data = [
    {
      order: "#3210",
      customer: "Olivia Martin",
      channel: "Online Store",
      date: "February 20, 2022",
      total: "$42.25",
      status: "Shipped",
    },
    {
      order: "#1123",
      customer: "Ethan Thompson",
      channel: "Online Store",
      date: "March 15, 2022",
      total: "$56.80",
      status: "Shipped",
    },

    {
      order: "#2345",
      customer: "Sophia Garcia",
      channel: "Online Store",
      date: "April 5, 2022",
      total: "$73.45",
      status: "Shipped",
    },

    {
      order: "#4567",
      customer: "Jackson Roberts",
      channel: "Online Store",
      date: "May 22, 2022",
      total: "$91.20",
      status: "Shipped",
    },

    {
      order: "#6789",
      customer: "Isabella Wilson",
      channel: "Online Store",
      date: "June 10, 2022",
      total: "$24.99",
      status: "Shipped",
    },

    {
      order: "#7890",
      customer: "Aiden Taylor",
      channel: "Online Store",
      date: "July 7, 2022",
      total: "$62.75",
      status: "Shipped",
    },

    {
      order: "#8901",
      customer: "Mia Martinez",
      channel: "Online Store",
      date: "August 18, 2022",
      total: "$38.50",
      status: "Shipped",
    },

    {
      order: "#9012",
      customer: "Lucas Anderson",
      channel: "Online Store",
      date: "September 9, 2022",
      total: "$45.60",
      status: "Shipped",
    },

    {
      order: "#1234",
      customer: "Charlotte Harris",
      channel: "Online Store",
      date: "October 25, 2022",
      total: "$82.00",
      status: "Shipped",
    },

    {
      order: "#3456",
      customer: "Logan Clark",
      channel: "Online Store",
      date: "November 12, 2022",
      total: "$17.95",
      status: "Shipped",
    },

    {
      order: "#5678",
      customer: "Amelia Lewis",
      channel: "Online Store",
      date: "December 30, 2022",
      total: "$50.20",
      status: "Shipped",
    },

    {
      order: "#6780",
      customer: "William Baker",
      channel: "Online Store",
      date: "January 8, 2023",
      total: "$62.10",
      status: "Shipped",
    },

    {
      order: "#8901",
      customer: "Abigail Green",
      channel: "Online Store",
      date: "February 14, 2023",
      total: "$29.75",
      status: "Shipped",
    },

    {
      order: "#9012",
      customer: "James Martinez",
      channel: "Online Store",
      date: "March 5, 2023",
      total: "$48.90",
      status: "Shipped",
    },

    {
      order: "#1234",
      customer: "Evelyn Scott",
      channel: "Online Store",
      date: "April 20, 2023",
      total: "$37.40",
      status: "Shipped",
    },

    {
      order: "#3456",
      customer: "Michael Young",
      channel: "Online Store",
      date: "May 17, 2023",
      total: "$64.75",
      status: "Shipped",
    },

    {
      order: "#5678",
      customer: "Emily Hall",
      channel: "Online Store",
      date: "June 28, 2023",
      total: "$19.99",
      status: "Shipped",
    },

    {
      order: "#7890",
      customer: "Alexander King",
      channel: "Online Store",
      date: "July 15, 2023",
      total: "$53.60",
      status: "Shipped",
    },

    {
      order: "#8901",
      customer: "Ava Wright",
      channel: "Online Store",
      date: "August 9, 2023",
      total: "$76.25",
      status: "Shipped",
    },

    {
      order: "#9012",
      customer: "Daniel Adams",
      channel: "Online Store",
      date: "September 3, 2023",
      total: "$42.90",
      status: "Shipped",
    },

    {
      order: "#1123",
      customer: "Olivia Brown",
      channel: "Online Store",
      date: "October 22, 2023",
      total: "$57.80",
      status: "Shipped",
    },
    {
      order: "#3201",
      customer: "Priya",
      channel: "Online Store",
      date: "February 04, 2024",
      total: "$105.25",
      status: "Shipped",
    },
    {
      order: "#3202",
      customer: "Jayam",
      channel: "Online Store",
      date: "June 10, 2024",
      total: "$60.35",
      status: "Panding",
    },
    {
      order: "#3208",
      customer: "Kalai",
      channel: "Shop",
      date: "July 04, 2024",
      total: "$55.70",
      status: "Panding",
    },
    {
      order: "#3204",
      customer: "Gayathri",
      channel: "Shop",
      date: "June 28, 2022",
      total: "$120.99",
      status: "Paid",
    },
    {
      order: "#3205",
      customer: "Bob",
      channel: "Online Store",
      date: "February 30, 2024",
      total: "$132.00",
      status: "Paid",
    },
    {
      order: "#3209",
      customer: "Ava Johnson",
      channel: "Shop",
      date: "January 5, 2022",
      total: "$81.99",
      status: "Shipped",
    },
    {
      order: "#3299",
      customer: "Johnson",
      channel: "Shop",
      date: "January 5, 2022",
      total: "$32.99",
      status: "Paid",
    },
    {
      order: "#3278",
      customer: "gaya",
      channel: "Online Store",
      date: "January 5, 2022",
      total: "$49.99",
      status: "Paid",
    },
    {
      order: "#3109",
      customer: "John",
      channel: "Shop",
      date: "January 5, 2022",
      total: "$74.99",
      status: "Shipped",
    },
    {
      order: "#3165",
      customer: "Johnson",
      channel: "Online Store",
      date: "January 5, 2022",
      total: "$86.99",
      status: "Paid",
    },
    {
      order: "#3232",
      customer: "bob",
      channel: "Shop",
      date: "January 5, 2022",
      total: "$36.99",
      status: "Shipped",
    },
    {
      order: "#3680",
      customer: "Sisiy",
      channel: "Online Store",
      date: "January 5, 2022",
      total: "$22.99",
      status: "Paid",
    },
    {
      order: "#3550",
      customer: "admin",
      channel: "Shop",
      date: "January 5, 2022",
      total: "$45.99",
      status: "Shipped",
    },
    {
      order: "#3203",
      customer: "lovely",
      channel: "Online Store",
      date: "January 5, 2022",
      total: "$21.99",
      status: "Paid",
    },
    {
      order: "#3073",
      customer: "swift",
      channel: "Shop",
      date: "January 5, 2022",
      total: "$69.99",
      status: "Shipped",
    },
    {
      order: "#3571",
      customer: "raam",
      channel: "Online Store",
      date: "January 5, 2022",
      total: "$90.99",
      status: "Paid",
    },
    {
      order: "#3678",
      customer: "jay",
      channel: "Shop",
      date: "January 5, 2022",
      total: "$112.99",
      status: "Paid",
    },
    {
      order: "#3405",
      customer: "mainly",
      channel: "Online Store",
      date: "January 5, 2022",
      total: "$48.99",
      status: "Paid",
    },
  ];

  const HandleEdit = (filteredItem: OrderData) => {
    setSelectedOrder(filteredItem);
  };

  return (
    <div className="flex flex-wrap w-full">
      <div className="flex w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg p-2">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border p-2 mb-4"
            />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Order</TableHead>
                  <TableHead className="min-w-[150px]">Customer</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Channel
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="hidden sm:table-cell">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data
                  .filter((item) =>
                    item.customer
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((filteredItem) => (
                    <TableRow key={filteredItem.order}>
                      <TableCell className="font-medium">
                        {filteredItem.order}
                      </TableCell>
                      <TableCell>{filteredItem.customer}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {filteredItem.channel}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {filteredItem.date}
                      </TableCell>
                      <TableCell className="text-right">
                        {filteredItem.total}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {filteredItem.status}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <MoreHorizontalIcon className="w-4 h-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => HandleEdit(filteredItem)}
                            >
                              View order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </main>
        {selectedOrder && (
          <div className="selected-order w-[300px] mx-auto my-0">
            <div className="order-details-container">
              <h2 className="order-details-title">Order Details</h2>
              <p className="order-details-item">Order: {selectedOrder.order}</p>
              <p className="order-details-item">
                Customer: {selectedOrder.customer}
              </p>
              <p className="order-details-item">
                Channel: {selectedOrder.channel}
              </p>
              <p className="order-details-item">Date: {selectedOrder.date}</p>
              <p className="order-details-item">Total: {selectedOrder.total}</p>
              <p className="order-details-item">
                Status: {selectedOrder.status}
              </p>
              <Button className="mt-[20px] mb-[20px]" onClick={HandleColse}>
                Okay
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
