"use client";

import { ErrorView } from "@/components/shared/errorView";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { routes } from "@/lib/constants";
import { User } from "@/lib/types";
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Pagination } from "../pagination";
import { columns } from "./columns";
import { PAGE_SIZE, SKELETON_ROWS } from "./constants";

interface UsersTableProps {
    data?: User[];
    isLoading?: boolean;
    isError?: boolean;
    onRetry?: () => void;
    pageCount?: number;
}

export const UsersTable = ({
    data = [],
    isLoading = false,
    isError = false,
    onRetry = () => {},
    pageCount = 1,
}: UsersTableProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [sorting, setSorting] = useState<SortingState>([]);

    const currentPage = Number(searchParams.get("page")) || 1;
    const pageSize = Number(searchParams.get("per_page")) || PAGE_SIZE;

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            pagination: {
                pageIndex: currentPage - 1,
                pageSize: pageSize,
            },
        },
        onSortingChange: setSorting,
        manualPagination: true,
        pageCount,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const handlePageChange = (pageIndex: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", (pageIndex + 1).toString());
        router.push(`?${params.toString()}`);
    };

    const handleRowClick = (userId: number) => {
        router.push(routes.users.detail(userId));
    };

    const renderBody = () => {
        if (isLoading) {
            return Array.from({ length: SKELETON_ROWS }).map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                    {columns.map((_, colIndex) => (
                        <TableCell key={colIndex}>
                            <Skeleton className="h-4 w-full" />
                        </TableCell>
                    ))}
                </TableRow>
            ));
        }

        if (isError) {
            return (
                <TableRow>
                    <TableCell colSpan={columns.length}>
                        <ErrorView
                            description="We couldn't load the users. Please try
                                again."
                            onRetry={onRetry}
                        />
                    </TableCell>
                </TableRow>
            );
        }

        if (table.getRowModel().rows.length === 0) {
            return (
                <TableRow>
                    <TableCell
                        colSpan={columns.length}
                        className="text-center text-muted-foreground"
                    >
                        No users found.
                    </TableCell>
                </TableRow>
            );
        }

        return table.getRowModel().rows.map((row) => (
            <TableRow
                key={row.id}
                className="cursor-pointer"
                onClick={() => handleRowClick(row.original.id)}
            >
                {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                        {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                        )}
                    </TableCell>
                ))}
            </TableRow>
        ));
    };

    return (
        <div className="flex flex-1 flex-col justify-between">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext(),
                                          )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>{renderBody()}</TableBody>
            </Table>
            {!isLoading && !isError && (
                <Pagination table={table} onPageChange={handlePageChange} />
            )}
        </div>
    );
};
