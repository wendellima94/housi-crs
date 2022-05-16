 export class CreateRoomReserveDto {
  apartmentName: string;
  checkIn: Date;
  checkOut: Date;
  quantityGuests: number;
  nameGuests: string | [string];
  emailGuests: string | [string];
}
