import { Breadcrumb } from "@/components/shared/breadcrumb";
import { UserForm } from "@/features/users/components/userForm";
import { editUser } from "@/lib/actions";
import { routes } from "@/lib/constants";
import { fetchUser } from "@/lib/data";

export const metadata = { title: "Edit User" };

export default async function EditUserPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const user = await fetchUser(id);
    const editUserWithId = editUser.bind(null, id);
    return (
        <main className="container mx-auto flex h-screen flex-col gap-12 py-12">
            <Breadcrumb
                link={{ label: "Detail", href: routes.users.detail(+id) }}
                page="Edit User"
            />
            <h1 className="text-subheading mb-6">Edit User</h1>
            <UserForm
                defaultValues={user.data}
                isEdit
                action={editUserWithId}
                redirectTo={routes.users.detail(+id)}
            />
        </main>
    );
}
