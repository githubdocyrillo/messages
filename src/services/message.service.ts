import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

const accountSid = 'AC52ac89feb70fdff7ebd8f98cec413939';
const authToken = '96b095ab725ae41146091d8fa5dddce7';

@Injectable()
export class EnigmaService {
  constructor(@Inject('PHONES_SERVICE') private client: ClientProxy) {}

  public sendSMS(key: string, phone: string) {
    const client = require('twilio')(accountSid, authToken);

    client.messages
      .create({
        to: phone,
        from: '+19895142869',
        body: 'Novas diretrizes: ' + key,
      })
      .then((message) => console.log(message.sid))
      .done();

    return key;
  }
}
