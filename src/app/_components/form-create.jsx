"use client";
import React from "react";
import { useActionState } from "react";
import { createActivityAction } from "../_actions/action-create";
import { Button, Input, Select, SelectItem } from "@heroui/react";

export const FormCreate = () => {
  const [state, formAction, pending] = useActionState(
    createActivityAction,
    null
  );
  return (
    <form className="space-y-2" action={formAction}>
      <section>
        <h3 className="text-lg font-bold">Add New Transaction</h3>
        <p>Input title and amount of your transaction</p>
      </section>
      <Input variant="bordered" name="title" placeholder="Input Title" />
      <Input
        variant="bordered"
        name="amount"
        type="number"
        placeholder="Input Amount"
      />
      <Select name="category">
        <SelectItem key="credit">Credit</SelectItem>
        <SelectItem key="debit">Debit</SelectItem>
      </Select>
      <Button type="submit" color="primary" isLoading={pending}>
        Save
      </Button>
    </form>
  );
};
