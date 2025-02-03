import { IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  amount: number;
}
