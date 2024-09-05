// temp: move to user module
interface UserMainInfo {
    id: number;
    name: string;
}

export interface Question {
    id: number;
    title: string;
    body: string;
    creation: number; // timestamp in UNIX format
    score: number;
    user: UserMainInfo;
    comments: Comment[];
}

export interface Comment {
    id: number;
    body: string;
    user: UserMainInfo;
}
