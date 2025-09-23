export class CreateAuthDto {
  readonly id: number;
  readonly username: string;
  readonly password: string;
}

export class UpdateAuthDto {
  readonly username?: string;
  readonly password?: string;
}
