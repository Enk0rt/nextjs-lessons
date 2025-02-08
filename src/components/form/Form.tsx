import {saveCar} from "@/server-actions/saveActions";

const Form = () => {

    return (
        <div className={'flex justify-between items-center h-screen w-4/5 mx-auto'}>
            <div className={'w-full flex justify-center'}>
                <form className={'flex flex-col w-80 gap-2 justify-between bg-white text-black p-4 rounded-3xl'}
                      action={saveCar}>
                    <h2 className={'text-center'}>Add Your Car</h2>
                    <label className={'flex  justify-between mt-2'}>
                        Brand
                        <input className={'border-black border rounded-3xl px-4'} type="text" name="brand"/>
                    </label>
                    <label className={'flex justify-between'}>
                        Year
                        <input className={'border-black border rounded-3xl px-4'} type="text" name="year"/>
                    </label>
                    <label className={'flex justify-between'}>
                        Price
                        <input className={'border-black border rounded-3xl px-4'} type="text" name="price"/>
                    </label>
                    <button type="submit"
                            className={'mt-2 px-4 py-1 border-black border w-20 mx-auto rounded-3xl'}>Add
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Form