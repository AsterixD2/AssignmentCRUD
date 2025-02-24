"use server";

import { API_URL } from "@/constants/api-url";
import { revalidatePath } from "next/cache";

export async function deleteActivityAction(_, formData) {
  const id = formData.get("id");

  await fetch(API_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ _id }]),
  });

  revalidatePath("/");
}
