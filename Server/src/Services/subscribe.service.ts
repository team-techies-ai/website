import SubscribeModel from "../Models/subscribe.model";
import { ISubscribe } from "../Interfaces/subscribe.interface";

export const addSubscribe = async (clientData: ISubscribe) => {
    const subscribe = new SubscribeModel(clientData);
    return subscribe.save();
};
