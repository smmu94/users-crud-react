"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createUser } from "@/lib/actions";
import { routes } from "@/lib/constants";
import { CreateUserState } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const initialState: CreateUserState = {};

export function UserForm() {
    const router = useRouter();
    const [state, formAction, pending] = useActionState(
        createUser,
        initialState,
    );

    useEffect(() => {
        if (state.success) {
            toast.success(state.success);
            router.push(routes.users.list);
        }
        if (state.error) {
            toast.error(state.error);
        }
    }, [router, state]);

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
                {pending ? "Creating..." : "Create user"}
            </Button>
        </form>
    );
}
