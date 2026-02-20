import { fetchUsers } from "@/lib/data";
import { UsersTable } from "./usersTable";

interface UsersListProps {
    page: number;
    pageSize: number;
}

export async function UsersList({ page, pageSize }: UsersListProps) {
    const { data, pages } = await fetchUsers({ page, pageSize });

    console.log(data)

    return <UsersTable data={data} pageCount={pages} />;
}
