"use client"
// NEXT
import Image from "next/image";
import Link from "next/link";

import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";


// MUI
import Button from '@mui/material/Button';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';


export default function Home() {
  const containerGridStyle = "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  "
  const containerFontStyle = "font-[family-name:var(--font-geist-sans)]"

  const [counter, setCounter] = useState(null)
  const [colorState, setColorState] = useState("primary")


  const router = useRouter()
  // if (counter > 5) {
  //   router.push("/contact")
  // }

  useEffect(() => {
    if (counter > 2) {
      setColorState("error")
    }
  }, [counter])
  // if (counter > 2) {
  //   setColorState("error")
  // }

  return (
    <div className={containerGridStyle + " " + containerFontStyle}>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol>
          <li className={"underline font-bold"}><a href="/contact">Page Contact</a></li>
          <li className={"underline"}><Link href="/contact">Page Contact</Link></li>
          <li><Link href="/contact"> <RequestQuoteIcon/> Contact</Link></li>

        </ol>

        <Button
            onClick={() => {setCounter(counter + 1);}}
            variant="contained"
            color={colorState}
        >
          Ajouter 1 à : {counter || "counter"}
        </Button>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
