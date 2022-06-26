import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EnigmaService } from './services/message.service';

@Controller()
export class EnigmaController {
  constructor(private readonly enigmaService: EnigmaService) {}

  @EventPattern('send-sms')
  async sendSms(data) {
    this.enigmaService.sendSMS(data.key, data.phone);
  }
}
