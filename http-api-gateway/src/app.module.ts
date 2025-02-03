import { NatsClientModule } from 'src/nats-clients/nats-client.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PaymentModule } from './payments/payments.module';

@Module({
  imports: [NatsClientModule, UsersModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
