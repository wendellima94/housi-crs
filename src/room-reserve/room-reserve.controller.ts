import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomReserveService } from './room-reserve.service';
import { CreateRoomReserveDto } from './dto/create-room-reserve.dto';
import { UpdateRoomReserveDto } from './dto/update-room-reserve.dto';

@Controller('room-reserve')
export class RoomReserveController {
  constructor(private readonly roomReserveService: RoomReserveService) {}

  @Post()
  create(@Body() createRoomReserveDto: CreateRoomReserveDto) {
    return this.roomReserveService.create(createRoomReserveDto);
  }

  @Get()
  findAll() {
    return this.roomReserveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomReserveService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomReserveDto: UpdateRoomReserveDto) {
    return this.roomReserveService.update(id, updateRoomReserveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomReserveService.remove(id);
  }
}
