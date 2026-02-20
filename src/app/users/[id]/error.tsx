"use client";

import { Breadcrumb } from "@/components/shared/breadcrumb";
import { ErrorView } from "@/components/shared/errorView";
import { routes } from "@/lib/constants";
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
        <main className="container mx-auto flex h-screen flex-col gap-12 py-12">
            <Breadcrumb
                link={{ label: "Users", href: routes.users.list }}
                page="Detail"
            />
            <ErrorView
                title="Couldn't load user"
                description="Something went wrong fetching this profile."
                onRetry={() => reset()}
            />
        </main>
    );
}
