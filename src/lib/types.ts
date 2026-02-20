export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export type UserListResponse = {
    data: User[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
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
