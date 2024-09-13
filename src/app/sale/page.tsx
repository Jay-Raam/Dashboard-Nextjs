"use client";

import React, { useState, useEffect } from "react";
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
import { data } from "./data";

interface OrderData {
  order: string;
  customer: string;
  channel: string;
  date: string;
  total: string;
  status: string;
}

export default function Sale() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);
  const [noResults, setNoResults] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Update noResults based on filteredData
  useEffect(() => {
    const filteredData = data.filter(
      (item) =>
        item.customer.toLowerCase().includes(searchQuery) ||
        item.order.toLowerCase().includes(searchQuery) ||
        item.channel.toLowerCase().includes(searchQuery) ||
        item.date.toLowerCase().includes(searchQuery) ||
        item.total.toLowerCase().includes(searchQuery) ||
        item.status.toLowerCase().includes(searchQuery)
    );

    setNoResults(filteredData.length === 0);
  }, [searchQuery]);

  const filteredData = data.filter(
    (item) =>
      item.customer.toLowerCase().includes(searchQuery) ||
      item.order.toLowerCase().includes(searchQuery) ||
      item.channel.toLowerCase().includes(searchQuery) ||
      item.date.toLowerCase().includes(searchQuery) ||
      item.total.toLowerCase().includes(searchQuery) ||
      item.status.toLowerCase().includes(searchQuery)
  );

  const handleClose = () => {
    setSelectedOrder(null);
  };

  const handleEdit = (filteredItem: OrderData) => {
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
                {filteredData.map((filteredItem) => (
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
                            onClick={() => handleEdit(filteredItem)}
                          >
                            View order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {noResults && (
                  <p className="text-red-500 mb-4 mt-4 text-center flex justify-center items-center">
                    No items found
                  </p>
                )}
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
              <Button className="mt-[20px] mb-[20px]" onClick={handleClose}>
                Okay
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
