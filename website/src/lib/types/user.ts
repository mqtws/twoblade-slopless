export interface UserSettings {
    notifications_enabled: boolean;
}

export interface UserSessionData {
    id: number;
    username: string;
    domain: string;
    is_banned: boolean;
    created_at: string;
    is_admin: boolean;
}

export type BannedUser = {
    id: number;
    username: string;
    domain: string;
    created_at: Date;
};

export interface User extends UserSessionData {
    settings: UserSettings;
}

export type UserWithSettings = User | null;
