import Link from "next/link";

const Menu = () => {
    return (
        <div>
                <ul className={'flex justify-center gap-10'}>
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/cars'}><li>Cars</li></Link>
                </ul>
        </div>
    );
};
 export default Menu