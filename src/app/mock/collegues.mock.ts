import { Collegue } from "../models/Collegue";

export const collegueMock:Collegue[] = [];

collegueMock.push(new Collegue(
    "1651fghdfg", 
    "Paul", 
    "Gurpratap Singh", 
    new Date('1987-12-18'), 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUP0GXR8VxmxVGlaaM_vTOE_G8qb38BQ3L7VUhMNk2MyW9SkZ9", 
    "paul@mail.net"
));
collegueMock.push(new Collegue(
    "1652fghdfg", 
    "Marty", 
    "Nicolas", 
    new Date('1987-03-31'), 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUP0GXR8VxmxVGlaaM_vTOE_G8qb38BQ3L7VUhMNk2MyW9SkZ9", 
    "nicolas@mail.net"
));
collegueMock.push(new Collegue(
    "1653fghdfg", 
    "Marty", 
    "Pascal", 
    new Date('1994-01-01'), 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUP0GXR8VxmxVGlaaM_vTOE_G8qb38BQ3L7VUhMNk2MyW9SkZ9", 
    "julie@mail.net"
));