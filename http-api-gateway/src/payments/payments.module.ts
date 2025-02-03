import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-clients/nats-client.module';
import { PaymentController } from './payments.controller';

@Module({
  imports: [NatsClientModule],
  controllers: [PaymentController],
  providers: [],
})
export class PaymentModule {}
