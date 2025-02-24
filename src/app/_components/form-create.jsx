"use client";
import React from "react";
import { useActionState } from "react";
import { createActivityAction } from "../_actions/action-create";

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
      <input name="title" placeholder="Input Title" />
      <input name="amount" type="number" placeholder="Input Amount" />
      <select name="category">
        <option value="credit">Credit</option>
        <option value="debit">Debit</option>
      </select>
      <button disabled={pending}>
        {pending ? "Saving.." : "Save Transaction"}
      </button>
    </form>
  );
};
