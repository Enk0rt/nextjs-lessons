"use server"

import {urls} from "@/constants/urls";
import {revalidatePath} from "next/cache";
import {axiosInstance} from "@/api/services";

export const saveCar = async (formData: FormData) => {
    await axiosInstance.post(urls.cars, formData)
    revalidatePath('/cars')
}