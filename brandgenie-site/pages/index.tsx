import Head from 'next/head';
import BrandGenie from '@/components/brandgenie';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>BrandGenie</title>
        <meta name="description" content="AI Generated Branding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brandgenieicon.ico" />
      </Head>

      <BrandGenie />
    </>
  )
}
