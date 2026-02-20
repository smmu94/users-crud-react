import { fetchUsers } from "@/lib/data";
import { UsersTable } from "./usersTable";

interface UsersListProps {
  page: number;
  pageSize: number;
}

export async function UsersList({ page, pageSize }: UsersListProps) {
  const { data, total_pages } = await fetchUsers({ page, pageSize });

  return <UsersTable data={data} pageCount={total_pages} />;
}