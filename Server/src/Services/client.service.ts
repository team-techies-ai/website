import ClientModel from "../Models/client.model";
import { Client } from "../Interfaces/client.interface";

export const createClient = async (clientData: Client) => {
    const client = new ClientModel(clientData);
    return client.save();
};
