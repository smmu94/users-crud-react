import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { routes } from "@/lib/constants";
import { fetchUser } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

interface UserCardProps {
    id: string;
}

export async function UserCard({ id }: UserCardProps) {
    const { data: user } = await fetchUser(id);

    return (
        <Card className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
            <div className="flex justify-center">
                <div className="relative w-64 h-64">
                    <Image
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                        fill
                        className="rounded-full object-cover border-4 border-surface"
                        sizes="256px"
                    />
                </div>
            </div>
            <CardHeader className="mt-2 text-center">
                <CardTitle className="text-subheading">
                    {user.first_name} {user.last_name}
                </CardTitle>
            </CardHeader>
            <CardContent className="mt-2 flex flex-col gap-2">
                <div>
                    <span className="text-base-bold">Email:</span> {user.email}
                </div>
                <div>
                    <span className="text-base-bold">User ID:</span> {user.id}
                </div>
            </CardContent>
            <CardFooter className="mt-4">
                <Link href={routes.users.edit(user.id)} className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/80">
                        Edit User Profile
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
