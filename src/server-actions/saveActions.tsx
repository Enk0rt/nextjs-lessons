"use server"

import {revalidatePath} from "next/cache";
import {services} from "@/api/services";

export const saveCar = async (formData: FormData) => {
    await services.addCar(formData)
    revalidatePath('/cars')
}