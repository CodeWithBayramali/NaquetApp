import { ThunkDispatch } from "redux-thunk";
import { Seller, Users } from "../models";

export interface User {
    userFinde:object,
    token:string
}


export interface Store {
    popseller:Users[];
    normseller:Seller[];
}