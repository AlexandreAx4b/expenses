import { NestFactory } from '@nestjs/core';
import { ContactModule } from './contact.module';
import { SwaggerModule, DocumentBuilder  } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ContactModule);

  const config = new DocumentBuilder()
    .setTitle('Expenses')
    .setDescription('General Expense Management')
    .setVersion('1.0')
    .addTag('expenses')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
  console.log('API running on: PORT 3001')
}
bootstrap();
