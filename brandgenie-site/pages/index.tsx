import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import BrandGenie from '@/components/brandgenie';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BrandGenie</title>
        <meta name="description" content="AI Generated Branding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brandgenieicon.ico" />
      </Head>

      <BrandGenie/>

    </>
  )
}
