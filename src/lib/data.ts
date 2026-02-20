import { API_KEY, API_URL } from "./constants";
import { Params, UserResponse } from "./types";

export const fetchUsers = async (params?: Params): Promise<UserResponse> => {
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
