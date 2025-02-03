import { NatsClientModule } from 'src/nats-clients/nats-client.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NatsClientModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
