"use client";

import { UsersHeader } from "@/components/features/usersList/usersHeader";
import { UsersTable } from "@/components/features/usersList/usersTable";
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
