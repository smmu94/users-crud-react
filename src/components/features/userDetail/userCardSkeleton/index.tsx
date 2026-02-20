import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function UserCardSkeleton() {
    return (
        <Card className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
            <div className="flex justify-center">
                <Skeleton className="h-62.5 w-62.5 rounded-full" />
            </div>
            <CardHeader className="mt-2 text-center">
                <Skeleton className="mx-auto h-6 w-40" />
            </CardHeader>
            <CardContent className="mt-2 flex flex-col gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter className="mt-4">
                <Skeleton className="h-10 w-full" />
            </CardFooter>
        </Card>
    );
}
