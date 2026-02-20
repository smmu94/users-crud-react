import { Breadcrumb } from "@/components/shared/breadcrumb";
import { UserCard } from "@/features/users/detail/userCard";
import { UserCardSkeleton } from "@/features/users/detail/userCardSkeleton";
import { routes } from "@/lib/constants";
import { Suspense } from "react";

export const metadata = { title: "User Detail" };

export default async function UserDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <main className="container mx-auto flex h-screen flex-col gap-12 py-12">
            <Breadcrumb
                link={{ label: "Users", href: routes.users.list }}
                page="Detail"
            />
            <Suspense fallback={<UserCardSkeleton />}>
                <UserCard id={id} />
            </Suspense>
        </main>
    );
}
