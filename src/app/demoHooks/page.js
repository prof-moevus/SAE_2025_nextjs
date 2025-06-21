"use client"

import {useState, useEffect} from 'react'
import {getOneUser} from "@/app/services/users";


function Home() {

    useEffect(() => {
        console.log(`yoyoyo je suis monté`);
        getOneUser();

        // Executé quand le composant va être détruit :
        return () => {
            console.log(" composant je suis démonté")
        }
    }, []);


    return (
        <h1> yoyoyo</h1>
    )
}


export default function demoHook() {

    const [counter, setCounter] = useState(null)
    const [msg, setMsg] = useState(null)

    const [isAuth, setIsAuth] = useState(false)


    useEffect(() => {
        console.log(`La valeur de count a changé : ${counter}`);


    }, []);

    return (<>
        <main className="m-9">
            <h2>Compteur</h2>
            {counter && <p>Valeur : {counter}</p> || <p>Waiting...</p>}
            <button className={"m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}
                    onClick={() => {
                        setCounter(counter + 1);
                    }}>Ajouter
            </button>
            {counter === 3 && <Home></Home>}
        </main>
    </>)
}