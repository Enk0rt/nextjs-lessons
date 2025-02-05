import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul className={'flex gap-4 mx-auto w-1/2 justify-center'}>
                <Link href={'/'}>
                    <li>Home</li>
                </Link>
                <Link href={'/users'}>
                    <li>Users</li>
                </Link>
                <Link href={'/posts'}>
                    <li>Posts</li>
                </Link>
                <Link href={'/comments'}>
                    <li>Comments</li>
                </Link>
            </ul>
        </div>
    );
};

export default Menu;