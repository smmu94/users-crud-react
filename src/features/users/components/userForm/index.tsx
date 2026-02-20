"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routes } from "@/lib/constants";
import { UserState, UserResponse } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

interface UserFormProps {
    defaultValues?: UserResponse["data"];
    action: (
        prevState: UserState,
        formData: FormData,
    ) => Promise<UserState>;
    isEdit?: boolean;
    redirectTo?: string; 
}
const initialState: UserState = {};

export function UserForm({
    defaultValues,
    action,
    isEdit = false,
    redirectTo = routes.users.list,
}: UserFormProps) {
    const router = useRouter();
    const [state, formAction, pending] = useActionState(action, initialState);

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
            router.push(redirectTo); 
        }
        if (state.error) {
            toast.error(state.error);
        }
    }, [redirectTo, router, state]);

    const buttonConfig = {
        edit: { idle: "Update User", pending: "Updating..." },
        create: { idle: "Create User", pending: "Creating..." },
    };

    const mode = isEdit ? "edit" : "create";
    const status = pending ? "pending" : "idle";

    const buttonText = buttonConfig[mode][status];

    return (
        <form
            action={formAction}
            className="flex flex-col gap-6 w-full max-w-md mx-auto"
        >
            <div className="flex flex-col gap-2">
                <Label htmlFor="first_name" className="text-base-bold">
                    First name
                </Label>
                <Input
                    id="first_name"
                    name="first_name"
                    placeholder="Insert your first name"
                    className="text-base-regular"
                    defaultValue={defaultValues?.first_name}
                />
                <p className="text-sm-regular text-destructive min-h-5">
                    {state.errors?.first_name?.[0] || "\u00A0"}
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="last_name" className="text-base-bold">
                    Last name
                </Label>
                <Input
                    id="last_name"
                    name="last_name"
                    placeholder="Insert your last name"
                    className="text-base-regular"
                    defaultValue={defaultValues?.last_name}
                />
                <p className="text-sm-regular text-destructive min-h-5">
                    {state.errors?.last_name?.[0] || "\u00A0"}
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-base-bold">
                    Email
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="youremail@example.com"
                    className="text-base-regular"
                    defaultValue={defaultValues?.email}
                />
                <p className="text-sm-regular text-destructive min-h-5">
                    {state.errors?.email?.[0] || "\u00A0"}
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="avatar" className="text-base-bold">
                    Avatar URL
                </Label>
                <Input
                    id="avatar"
                    name="avatar"
                    placeholder="https://..."
                    className="text-base-regular"
                    defaultValue={defaultValues?.avatar}
                />
                <p className="text-sm-regular text-destructive min-h-5">
                    {state.errors?.avatar?.[0] || "\u00A0"}
                </p>
            </div>
            <Button
                type="submit"
                disabled={pending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/80"
            >
                {buttonText}
            </Button>
        </form>
    );
}
