// // export interface Actor {
// //     uid: string;
// //     name: string;
// //     url: string;
// //   }

// export interface Actor {
//     uid: string;
//     name: string;
//     url: string;
//     height: string;
//     mass: string;
//     hair_color: string;
//     skin_color: string;
//     eye_color: string;
//     birth_year: string;
//     gender: string;
//     created: string;
//     edited: string;
//     homeworld: string;
//     description: string;
//     _id: string;
//     __v: number;
//   }

export interface Actor {
    uid: string;
    name: string;
    url: string;
    properties: {
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      created: string;
      edited: string;
      homeworld: string;
    };
    description: string;
    _id: string;
    __v: number;
  }

  export interface Actorresp{
    uid: string;
    name: string;
    url: string;

  }