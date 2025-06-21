'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function ContactLayout({ children }) {

    const router = useRouter()

    function goBack(){
        //router.back()
        window.history.back()
    }

    const navLinkStyle = "underline text-xl font-semibold "

    return (
        <div
            className={"bg-amber-200 flex flex-col items-center justify-start p-2 h-full"}
        >
            <nav className="flex flex-col items-center justify-center p-2 ">
                <ul className="list-none flex flex-rowl items-center justify-center p-2 gap-4 ">
                    <li className={navLinkStyle}><Link href={"/"}>Retour absolu</Link></li>
                    <li className={navLinkStyle}><button onClick={goBack}>Retour historique</button></li>
                </ul>
            </nav>
        {children}
        </div>
    );
}
