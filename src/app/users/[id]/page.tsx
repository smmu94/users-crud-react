import { Breadcrumb } from "@/components/shared/breadcrumb";
import { UserCard } from "@/components/features/userDetail/userCard";
import { routes } from "@/lib/constants";
import { fetchUser } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "User Detail",
};

export default async function UserDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const user = await fetchUser(id);
    console.log({ user });
    return (
        <main className="container mx-auto flex h-screen flex-col gap-12 py-12">
            <Breadcrumb
                link={{ label: "Users", href: routes.users.list }}
                page="Detail"
            />
            <UserCard user={user.data} />
        </main>
    );
}
