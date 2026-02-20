import { Breadcrumb } from "@/components/shared/breadcrumb";
import { UserForm } from "@/features/users/components/userForm";
import { createUser } from "@/lib/actions";
import { routes } from "@/lib/constants";

export const metadata = { title: "Create User" };

export default async function CreateUserPage() {
    return (
        <main className="container mx-auto flex h-screen flex-col gap-12 py-12">
            <Breadcrumb
                link={{ label: "Users", href: routes.users.list }}
                page="Create User"
            />
            <h1 className="text-subheading mb-6">Create User</h1>
            <UserForm action={createUser} />
        </main>
    );
}
