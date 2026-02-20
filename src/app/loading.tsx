import { UsersHeader } from "@/components/features/usersList/usersHeader";
import { UsersTable } from "@/components/features/usersList/usersTable";

export default function Loading() {
    return (
        <main className="container mx-auto flex h-screen flex-col gap-12 py-8">
            <UsersHeader />
            <UsersTable isLoading />
        </main>
    );
}
