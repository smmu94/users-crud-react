import { API_KEY, API_URL } from "./constants";
import { Params, UserListResponse, UserResponse } from "./types";

export const fetchUsers = async (
    params?: Params,
): Promise<UserListResponse> => {
    const url = new URL(`${API_URL}/users`);

    if (params?.page) url.searchParams.set("page", String(params.page));
    if (params?.pageSize)
        url.searchParams.set("per_page", String(params.pageSize));

    const res = await fetch(url.toString(), {
        headers: { "x-api-key": API_KEY },
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error(
            `Failed to fetch users: ${res.status} ${res.statusText}`,
        );
    }

    return res.json();
};

export const fetchUser = async (id: string): Promise<UserResponse> => {
    const res = await fetch(`${API_URL}/users/${id}`, {
        headers: { "x-api-key": API_KEY },
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error(
            `Failed to fetch user: ${res.status} ${res.statusText}`,
        );
    }

    return res.json();
};
