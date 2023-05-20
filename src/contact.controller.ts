import { Body, Controller, Get, Param, Post, Query, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateContactDto, ListAllContacts, UpdateContactDto } from './dtos/contacts.dto';

@Controller('contact')
@ApiTags('Contact')

export class ContactController {

  @Post()
  async create(@Body() createContact : CreateContactDto) {
    return 'Method POST Contact';
  }

  @Get()
  findAll(@Query() listAllContacts: ListAllContacts) {
    return 'Method Get(FindAll) Contact';
  }

  @Get(':id')
  findOne(@Param('id') id: string){
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
