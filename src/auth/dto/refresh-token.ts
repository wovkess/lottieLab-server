import { IsString } from 'class-validator'


export class RefreshTokenDto{
  @IsString()  /*уточнить логику работы*/
  refreshToken: string

}