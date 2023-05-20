import { Injectable } from '@nestjs/common';
import { Contact } from './interfaces/contact.interface';

@Injectable()
export class ContactService {
  private readonly contacts: Contact[] = [];

  create(contact: Contact) {
    this.contacts.push(contact);
  }

  findAll(): Contact[] {
    return this.contacts;
  }

}
