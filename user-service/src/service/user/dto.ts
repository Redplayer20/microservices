// user-service/src/service/user/dto.ts
export class CreateUserDto {
  readonly name: string;
  readonly email: string;
}

export class UpdateUserDto {
  readonly name?: string;
  readonly email?: string;
}
