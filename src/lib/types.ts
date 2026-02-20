export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export type UserListResponse = {
    data: User[];
    pages: number;
    items: number;
};

export type UserResponse = {
    data: User;
};

export type Params = {
    page?: number;
    pageSize?: number;
};

export type UserState = {
    errors?: {
        first_name?: string[];
        last_name?: string[];
        email?: string[];
        avatar?: string[];
    };
    success?: string;
    error?: string;
};
