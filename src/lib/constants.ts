export const routes = {
    users: {
        list: "/",
        detail: (id: number) => `/users/${id}`,
        create: "/users/create",
        edit: (id: number) => `/users/${id}/edit`,
    },
} as const;
