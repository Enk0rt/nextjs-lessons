import {ICar} from "@/models/car/ICar";

interface CarProps {
    car: ICar
}

const Car = ({car}: CarProps) => {
    return (
        <div className={'bg-white text-black  flex p-4 items-center rounded-xl'}>
            <div>
                <h2>Brand: {car.brand} </h2>
                  <p>Year: {car.year} </p>
                  <p>Price: {car.price}$ </p>
            </div>
        </div>
    );
};

export default Car;