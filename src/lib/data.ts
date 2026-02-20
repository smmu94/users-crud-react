import { API_URL } from "./constants";
import { Params, UserListResponse } from "./types";

export const fetchUsers = async (
    params?: Params,
): Promise<UserListResponse> => {
    const url = new URL(`${API_URL}/users`);

    if (params?.page) url.searchParams.set("_page", String(params.page));
    if (params?.pageSize)
        url.searchParams.set("_limit", String(params.pageSize));

    const res = await fetch(url.toString(), { cache: "no-store" });

    if (!res.ok) {
        throw new Error(
            `Failed to fetch users: ${res.status} ${res.statusText}`,
        );
    }

    const total = Number(res.headers.get("X-Total-Count") ?? 0);
    const data = await res.json();
    const pages = params?.pageSize
        ? Math.ceil(total / Number(params.pageSize))
        : 1;

    return { data, pages, items: total };
};
export const fetchUser = async (id: string) => {
    const res = await fetch(`${API_URL}/users/${id}`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error(
            `Failed to fetch user: ${res.status} ${res.statusText}`,
        );
    }

    const data = await res.json();
    return { data };
};
