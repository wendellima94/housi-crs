import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomReserveDocument = RoomReserve & Document;

@Schema()
export class RoomReserve {
  @Prop()
  apartmentName: string;

  @Prop()
  checkIn: Date;

  @Prop()
  checkOut: Date;

  @Prop()
  quantityGuests: number;

  @Prop()
  nameGuests: string;

  @Prop()
  emailGuests: string;
};

export const RoomReserveSchema = SchemaFactory.createForClass(RoomReserve);