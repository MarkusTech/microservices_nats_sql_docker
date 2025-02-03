import { NatsClientModule } from 'src/nats-clients/nats-client.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [NatsClientModule, UsersModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
