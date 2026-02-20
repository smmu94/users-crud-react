import { Button } from "@/components/ui/button";
import { User } from "@/lib/types";
import { Column, ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";

const SortableButton = ({
    column,
    header,
}: {
    column: Column<User, unknown>;
    header: string;
}) => {
    return (
        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {header}
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    );
};

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "avatar",
        header: "Avatar",
        cell: ({ row }) => (
            <Image
                src={row.original.avatar}
                alt={`${row.original.first_name} avatar`}
                width={40}
                height={40}
                className="rounded-full"
            />
        ),
    },
    {
        accessorKey: "id",
        header: ({ column }) => {
            return <SortableButton column={column} header="ID" />;
        },
        cell: ({ row }) => <div className="text-center">{row.original.id}</div>,
    },
    {
        accessorKey: "first_name",
        header: ({ column }) => {
            return <SortableButton column={column} header="First Name" />;
        },
    },
    {
        accessorKey: "last_name",
        header: ({ column }) => {
            return <SortableButton column={column} header="Last Name" />;
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return <SortableButton column={column} header="Email" />;
        },
    },
];
