export interface IAuth {
	email: string;
	username: string;
	password: string;
	confirmPassword: string;
}

export interface IAuthModel {
	data: IAuth;
	isLoading?: boolean;
	isConfirm?: boolean;
	error?: string;
}
