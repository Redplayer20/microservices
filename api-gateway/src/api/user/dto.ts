export class CreateUserDto {
  readonly id: number;
  readonly age: number;
  readonly name: string;
  readonly email: string;
}

export class UpdateUserDto {
  readonly name?: string;
  readonly email?: string;
}
