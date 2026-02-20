export const routes = {
    users: {
        list: "/",
        detail: (id: number) => `/users/${id}`,
        create: "/users/create",
        edit: (id: number) => `/users/${id}/edit`,
    },
} as const;

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? "";

