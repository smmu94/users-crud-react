"use client";

import { Button } from "@/components/ui/button";

interface ErrorViewProps {
    title?: string;
    description?: string;
    onRetry?: () => void;
}

export function ErrorView({
    title = "Something went wrong",
    description = "An unexpected error occurred.",
    onRetry,
}: ErrorViewProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
            <h2 className="text-subheading">{title}</h2>
            <p className="max-w-md">{description}</p>

            {onRetry && (
                <Button onClick={onRetry} variant="outline">
                    Try again
                </Button>
            )}
        </div>
    );
}
