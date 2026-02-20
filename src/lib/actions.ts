"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { API_KEY, API_URL, routes } from "./constants";
import { createUserSchema } from "./schema";
import { CreateUserState } from "./types";

export async function createUser(
    prevState: CreateUserState,
    formData: FormData,
): Promise<CreateUserState> {
    const validatedFields = createUserSchema.safeParse({
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        email: formData.get("email"),
        avatar: formData.get("avatar") || undefined,
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            error: "Please fix the errors below.",
        };
    }

    const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
        },
        body: JSON.stringify(validatedFields.data),
    });

    if (!res.ok) {
        return { error: "Failed to create user. Please try again." };
    }

    revalidatePath(routes.users.list);

    return { success: "User created successfully!" };
}
