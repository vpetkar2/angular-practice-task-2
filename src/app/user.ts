export interface User {
    name: string;
    email: string;
    password: string;
    isLogin: boolean;
}

export class UserInit {
    name: string;
    email: string;
    password: string;
    isLogin: boolean;

    constructor(obj ? : User) {
        this.name = obj && obj.name || '';
        this.email = obj && obj.email || '';
        this.password = obj && obj.password || '';
        this.isLogin = obj && obj.isLogin || false;
    }

}
