import { UsersHeader } from "@/components/features/usersList/usersHeader";
import { UsersTable } from "@/components/features/usersList/usersTable";
import { fetchUsers } from "@/lib/data";
import { Metadata } from "next";

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

    const { data, total_pages } = await fetchUsers({
        page: currentPage,
        pageSize: currentSize,
    });

    return (
        <main className="container mx-auto flex h-screen flex-col gap-12 py-12">
            <UsersHeader />
            <UsersTable data={data} pageCount={total_pages} />
        </main>
    );
}
