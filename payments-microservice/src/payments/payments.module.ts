import { Module } from '@nestjs/common';
import { PaymentControllerMicroservice } from './payments.controller';

@Module({
  imports: [],
  controllers: [PaymentControllerMicroservice],
  providers: [],
})
export class PaymentsModule {}
