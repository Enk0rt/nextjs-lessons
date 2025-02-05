import React, {FC} from 'react';

type Props = {
    params: {id:string}
}
const Page:FC<Props> = async ({params}) => {

    const {id} = await params

    return (
        <div className={'flex justify-center items-center flex-col h-screen'}>
            Comments Page - {id}
        </div>
    );
};

export default Page;