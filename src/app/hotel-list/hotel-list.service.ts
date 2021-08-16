import { Injectable } from "@angular/core";

import { Ihotel } from "./hotel";

@Injectable({
    providedIn: 'root'
}
)

export class HotelListService{

    public getHotels(): Ihotel[] {

        return [
            {
              hotelId:1,
              hotelName:'Agadir Beach,',
              price:205.3,
              imageUrl:"/assets/images/agadir.jpg",
              rating:3.5
            },
            {
              hotelId:2,
              hotelName:'Marrakech ville,',
              price:105.3,
              imageUrl:"/assets/images/Marakkech.jpg",
              rating:5
            },
            {
              hotelId:3,
              hotelName:'casablanca ville,',
              price:305.3,
              imageUrl:"/assets/images/casa.jpg",
              rating:4
            },
            {
              hotelId:4,
              hotelName:'Ifran ville',
              price:100.09,
              imageUrl:"/assets/images/ifran.jpg",
              rating:2.5
            },
          ];
    }
}
