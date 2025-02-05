import React from 'react';
import Link from "next/link";

const Page = () => {
    const id = 5
    return (
        <div className={'flex justify-center items-center flex-col h-screen'}>
            Users Page
            <Link href={'/users/'+id}>
                <p className={'hover:underline underline-offset-2'}>Go to user - {id}</p>
            </Link>
        </div>
    );
};

export default Page;