
import CarList from "@/components/cars-list/CarList";
import Form from "@/components/form/Form";

const Cars = () => {

    return (
        <div className={'w-4/5 mx-auto'}>
            <h1 className={'text-center'}>Cars Page</h1>
            <div className={'flex'}>
                <Form/>
                <CarList/>
            </div>
        </div>
    );
};

export default Cars;