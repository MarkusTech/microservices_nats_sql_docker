import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dto/CreatePayment.dto';

@Controller()
export class PaymentsMicroserviceController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {} // this is from the nats module in payment-microservices so that payment and user can connect to each other

  @EventPattern('createPayment')
  createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto);
    this.natsClient.emit('paymentCreated', createPaymentDto);
  }
}
