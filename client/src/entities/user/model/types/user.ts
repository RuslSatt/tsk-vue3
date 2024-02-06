export interface IUser {
	email: string;
	username: string;
}

export interface IUserSchema {
	authUser?: IUser;
}
