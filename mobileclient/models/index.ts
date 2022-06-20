

export declare class Category {
    id:number;
    name:string;
    img:string;
}


export declare class Users {
    id:string;
    firstName:string;
    lastName:string;
    userName:string;
    email:string;
    popularPoint:number;
    address:{
        street:string;
        city:string;
        zipcode:string;
        geo:{
            lat:string;
            lng:string;
        }
    };
    imgURL:string;
    phone:string;
    website:string;
    company:{
        _id:string;
        companyName:string;
        img:string;
        catchPhrase:string;
        bs:string;
    }
}

export declare class Seller {
    productId:Number;
    categoryId:Number;
    userName:string;
    productName:string;
    description:string;
    kg:number;
    price:number;
    imgURL:string;
}

// export declare class Fruit {
//     id:number;
//     categoryId:number;
//     name:string
// }

// export declare class Vegetable {
//     id:number;
//     categoryId:number;
//     name:string
// }

// export declare class Nuts {
//     id:number;
//     categoryId:number;
//     name:string
// }

// export declare class Legumes {
//     id:number;
//     categoryId:number;
//     name:string
// }

// export declare class SeaFood {
//     id:number;
//     categoryId:number;
//     name:string
// }

// export declare class AnimalsFood {
//     id:number;
//     categoryId:number;
//     name:string
// }