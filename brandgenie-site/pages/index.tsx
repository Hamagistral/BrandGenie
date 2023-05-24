import Head from 'next/head';
import BrandGenie from '@/components/brandgenie';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>BrandGenie | AI Branding Assistant</title>
        <meta
          name="description"
          content="Get a complete brand package for your e-commerce site with just a product description. Includes name, slogan, ad copy, and related keywords."
          key="desc"
        />
        <meta name="description" content="AI Generated Branding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brandgenieicon.ico" />
      </Head>

      <BrandGenie />
    </>
  )
}
