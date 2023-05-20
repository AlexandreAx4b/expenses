import { Body, Controller, Get, Param, Post, Query, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateContactDto, UpdateContactDto } from './dtos/contacts.dto';
import { ContactService } from './contact.service';
import { Contact } from './interfaces/contact.interface';

@Controller('contact')
@ApiTags('Contact')

export class ContactController {
  constructor(private contactService: ContactService) { }

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    this.contactService.create(createContactDto);
  }

  @Get()
  async findAll(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Method GetOne, returns a #${id} contact`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} contact`;
  }

}
