import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnigmaController } from './message.controller';

import { EnigmaService } from './services/message.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PHONES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'phones_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [EnigmaController],
  providers: [EnigmaService],
})
export class EnigmaModule {}
