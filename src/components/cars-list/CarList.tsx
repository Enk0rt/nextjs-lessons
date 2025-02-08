import {services} from "@/api/services";
import Car from "@/components/car/Car";
import {ICar} from "@/models/car/ICar";

const CarList = async () => {

    const cars = await services.getCars<ICar[]>()

    return (
        <div className={'w-full self-center'}>
            <h2 className={'text-center text-2xl'}>Available cars:</h2>
            <div className={'grid grid-cols-3 gap-4 items-center justify-center h-96 overflow-y-auto mt-6'}>
                {cars.map((car, index) => (
                    <Car key={index} car={car}/>
                ))}
            </div>

        </div>
    );
};

export default CarList;