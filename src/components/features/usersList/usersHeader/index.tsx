import { Button } from "@/components/ui/button";
import { routes } from "@/lib/constants";
import { Plus } from "lucide-react";
import Link from "next/link";

export const UsersHeader = () => {
    return (
        <header className="flex justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-subheading">Users</h1>
                <h2>Manage your team members here.</h2>
            </div>
            <Link href={routes.users.create}>
                <Button>
                    <Plus /> Create User
                </Button>
            </Link>
        </header>
    );
};
