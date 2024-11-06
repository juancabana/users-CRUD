import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { StudentController } from './student/student.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://juanda:juandaPassword@cluster0.j8ip3h2.mongodb.net/',
      {
        dbName: 'users',
      },
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController, StudentController],
  providers: [AppService],
})
export class AppModule {}
