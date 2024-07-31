import { IsEmail, IsString, MinLength } from 'class-validator'

export class AuthDto {
  @IsEmail()
  email: string
  @MinLength(6, {
    message: 'Пароль должен быть минимум 6 символов'
  })
  @IsString()
  password: string
}