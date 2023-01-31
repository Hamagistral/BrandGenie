import React from "react";
import Image from "next/image";
import Form from "./form";
import Results from "./results";
import logo from "../public/brandgenie_logo.svg";

const BrandGenie: React.FC = () => {
  const ENDPOINT: string =
    "https://0cw7w0teuk.execute-api.us-east-1.amazonaws.com/prod/generate_branding";

  const CHARACTER_LIMIT: number = 32;

  const [input, setInput] = React.useState("");

  const [brandname, setBrandname] = React.useState("");
  const [brandslogan, setBrandslogan] = React.useState("");
  const [brandadcopy, setBrandAdCopy] = React.useState("");
  const [brandkeywords, setBrandkeywords] = React.useState([]);
  const [brandimage_url, setBrandimage_url] = React.useState("");
  const [hasResult, setHasResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {
    console.log("Submitting : " + input);
    setIsLoading(true);
    fetch(`${ENDPOINT}?input=${input}`)
      .then((res) => res.json())
      .then(onResult);
  };

  const onResult = (data: any) => {
    setBrandname(data.brand_name);
    setBrandslogan(data.brand_slogan);
    setBrandAdCopy(data.brand_adcopy);
    setBrandkeywords(data.keywords);
    setBrandimage_url(data.brand_image);
    setHasResult(true);
    setIsLoading(false);
  };

  const onReset = () => {
    setInput("");
    setHasResult(false);
    setIsLoading(false);
  };

  let displayedElement = null;

  if (hasResult) {
    displayedElement = (
      <Results
        input={input}
        brandname={brandname}
        brandslogan={brandslogan}
        brandadcopy={brandadcopy}
        brandkeywords={brandkeywords}
        brandimage_url={brandimage_url}
        onBack={onReset}
      />
    );
  } else {
    displayedElement = (
      <Form
        input={input}
        isLoading={isLoading}
        characterLimit={CHARACTER_LIMIT}
        setInput={setInput}
        onSubmit={onSubmit}
      />
    );
  }

  return (
    <>
      <div className="flex h-screen py-4">
          <div className="max-w-lg m-auto p-8 relative isolate overflow-hidden bg-slate-900 shadow-lg rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                  <stop stop-color="#1e3a8a"></stop>
                  <stop offset="1" stop-color="#60a5fa" stop-opacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto">
              <div className="flex items-center justify-center">
                <Image
                    src={logo}
                    alt="BrandGenie logo"
                    width={86}
                    height={86}
                />
              </div>
              <h2 className="text-3xl w-fit mx-auto my-2 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-800 sm:text-4xl">BrandGenie</h2>
              <h3 className="text-md text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-800 font-medium mt-3">Unleash the potential of your brand with AI</h3>
              {displayedElement}
            </div>
          </div>
        </div>
    </>
  );
};

export default BrandGenie;
