"use client";

import { Button } from "@/components/ui/button";
import {
    Card as CardBase,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { routes } from "@/lib/constants";
import { User } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
    user: User;
}

export function UserCard({ user }: CardProps) {
    return (
        <CardBase className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
            <div className="flex justify-center">
                <Image
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    width={250}
                    height={250}
                    className="rounded-full border-4 border-surface object-cover"
                />
            </div>
            <CardHeader className="text-center mt-2">
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
        </CardBase>
    );
}
