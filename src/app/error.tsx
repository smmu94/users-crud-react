"use client";

import { UsersHeader } from "@/components/features/usersList/usersHeader";
import { UsersTable } from "@/components/features/usersList/usersTable";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="container mx-auto flex h-screen flex-col gap-12 py-8">
            <UsersHeader />
            <UsersTable isError />
            <Button variant="outline" onClick={reset} className="w-fit">
                Try again
            </Button>
        </main>
    );
}
