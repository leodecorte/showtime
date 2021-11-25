import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id: string;

  @Prop({ required: true, index: { unique: true } })
  email: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  favourite_band: string;
<<<<<<< HEAD
=======

>>>>>>> 2bdcbc973b24143756e48ebaf1b3f556f33cd517
  @Prop({ required: false })
  birthdate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
