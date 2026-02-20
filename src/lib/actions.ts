"use server";

import { revalidatePath } from "next/cache";
import { API_URL, routes } from "./constants";
import { UserSchema } from "./schema";
import { UserState } from "./types";

export async function createUser(prevState: UserState, formData: FormData) {
    const validatedFields = UserSchema.safeParse({
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedFields.data),
    });

    if (!res.ok) {
        return { error: "Failed to create user. Please try again." };
    }

    revalidatePath(routes.users.list);
    return { success: "User created successfully!" };
}

export async function editUser(
    userId: string,
    prevState: UserState,
    formData: FormData,
) {
    const validatedFields = UserSchema.safeParse({
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

    const res = await fetch(`${API_URL}/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedFields.data),
    });

    if (!res.ok) {
        return { error: "Failed to update user. Please try again." };
    }

    revalidatePath(routes.users.detail(+userId));
    revalidatePath(routes.users.list);
    return { success: "User updated successfully!" };
}
