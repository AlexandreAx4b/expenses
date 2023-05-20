import { Module } from '@nestjs/common';
import { ContactModule } from './expenses-contacts/contact.module';

@Module({
  imports: [ContactModule],
})
export class AppModule { }
