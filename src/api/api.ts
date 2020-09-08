import axios from "axios";
import {TreeDataItemType} from "../utils/Types/treeDataTypes";

const instance = axios.create({
    baseURL: 'https://rcslabs.ru/locations.json'
});

export const api = {
    getTreeData: () => {
        return instance.get<ResponseType>(``)
            .then(res => res.data)
    }
};

//Response Types
type ResponseType = {
    [key: number]: TreeDataItemType
};




