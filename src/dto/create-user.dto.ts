import { IsNotEmpty, IsString, IsEmail, MaxLength } from 'class-validator';
export class CreateStudentDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly password: string;
}
