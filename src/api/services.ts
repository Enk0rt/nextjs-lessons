import {apiUrl, urls} from "@/constants/urls";
import axios from 'axios';

export const axiosInstance= axios.create({
    baseURL: apiUrl,
    headers:{'Content-Type':'Application/json'},

})

export const services = {
    getCars: async <T> ():Promise<T> => {
        const {data} =  await axiosInstance.get<T>(urls.cars)
        return data
    },
};