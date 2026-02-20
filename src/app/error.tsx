"use client";

import { UsersHeader } from "@/features/users/list/usersHeader";
import { UsersTable } from "@/features/users/list/usersTable";
import { useEffect } from "react";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="container mx-auto flex h-screen flex-col gap-12 py-8">
            <UsersHeader />
            <UsersTable isError onRetry={() => reset()} />
        </main>
    );
}
