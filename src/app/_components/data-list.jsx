import { API_URL } from "@/constants/api-url";
import React from "react";
import { Button, Input, Select, SelectItem } from "@heroui/react";

export const DataList = async () => {
  const res = await fetch(API_URL);
  const { data } = await res.json();

  const allDebitData = data
    .filter((item) => item.category === "debit")
    .reduce((acc, item) => acc + item.amount, 0);
  const allCreditData = data
    .filter((item) => item.category === "credit")
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">Your Activity</h3>
      <div>
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="grid grid-cols-4 border items-center"
            >
              <div className="border-r p-2">{item.title}</div>
              <div className="border-r p-2">{item.amount}</div>
              <div className="border-r p-2">{item.category}</div>
              <Button size="sm" color="danger">
                Del.
              </Button>
            </div>
          );
        })}
      </div>
      <section>
        <h3 className="text-xl font-bold">Financial Summary</h3>
        <p>Total Debit: {allDebitData}</p>
        <p>Total Credit: {allCreditData}</p>
        <p>Total Amount : {allDebitData - allCreditData}</p>
      </section>
    </div>
  );
};
