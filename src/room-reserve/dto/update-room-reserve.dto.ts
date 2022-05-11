import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomReserveDto } from './create-room-reserve.dto';

export class UpdateRoomReserveDto extends PartialType(CreateRoomReserveDto) {}
