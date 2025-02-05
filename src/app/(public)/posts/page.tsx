import Link from "next/link";

const Page = () => {
    const id = 5
    return (
        <div className={'flex justify-center items-center flex-col h-screen'}>
            Posts Page

            <Link href={'/posts/' + id}>
                <p className={'hover:underline underline-offset-2'}>Go to post - {id}</p>
            </Link>

        </div>
    );
};

export default Page;