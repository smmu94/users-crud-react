"use client";

import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";

interface PaginationProps<T> {
    table: Table<T>;
    onPageChange: (index: number) => void;
}

export const Pagination = <T,>({ table, onPageChange }: PaginationProps<T>) => {
    const pageIndex = table.getState().pagination.pageIndex;

    return (
        <div className="flex items-center justify-between pt-4 pb-8">
            <p className="text-sm">
                Page {pageIndex + 1} of {table.getPageCount()}
            </p>

            <div className="flex gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    disabled={!table.getCanPreviousPage()}
                    onClick={() => onPageChange(pageIndex - 1)}
                >
                    Previous
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    disabled={!table.getCanNextPage()}
                    onClick={() => onPageChange(pageIndex + 1)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};
