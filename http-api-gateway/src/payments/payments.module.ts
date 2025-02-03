import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-clients/nats-client.module';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [NatsClientModule],
  controllers: [PaymentsController],
  providers: [],
})
export class PaymentsModule {}
