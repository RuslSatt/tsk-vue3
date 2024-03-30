export interface IUser {
	id: number;
	email: string;
	username: string;
}

export interface IAuthUser {
	token?: string;
	user: IUser;
}

export interface IUserSchema {
	authUser?: IAuthUser;
}
