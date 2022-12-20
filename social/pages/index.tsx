import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <h1 className="text-4xl font-bold  text-blue-900">
     A Social App
    </h1>
    </>
  );
}
