import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rcslabs.ru/locations.json'
});

export const api = {
    getTreeData: () => {
        return instance.get<any>(``)
            .then(res => res.data)
    }
};


//Response Types

