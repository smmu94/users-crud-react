import { UsersList } from "@/features/users/list";
import { UsersHeader } from "@/features/users/list/usersHeader";
import { UsersTable } from "@/features/users/list/usersTable";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Users",
    description: "Browse and manage the list of registered users.",
};

export default async function UsersListPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; per_page?: string }>;
}) {
    const params = await searchParams;
    const currentPage = Number(params.page) || 1;
    const currentSize = Number(params.per_page) || 10;

    return (
        <main className="container mx-auto flex h-screen flex-col gap-12 py-12">
            <UsersHeader />
            <Suspense fallback={<UsersTable isLoading />}>
                <UsersList page={currentPage} pageSize={currentSize} />
            </Suspense>
        </main>
    );
}
