import React from "react";
import Image from "next/image";
import Form from "./form";
import Results from "./results";
import logo from "../public/brandgenie_logo.svg";
import Authentication from "./authentication";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const BrandGenie: React.FC = () => {
  const ENDPOINT: string = "https://0cw7w0teuk.execute-api.us-east-1.amazonaws.com/prod/generate_branding";

  const CHARACTER_LIMIT: number = 32;

  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const [input, setInput] = React.useState("");

  const [brandname, setBrandname] = React.useState("");
  const [brandslogan, setBrandslogan] = React.useState("");
  const [brandadcopy, setBrandAdCopy] = React.useState("");
  const [brandkeywords, setBrandkeywords] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async () => {
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
    setHasResult(true);
    setIsLoading(false);
  };

  const onReset = () => {
    setInput("");
    setHasResult(false);
    setIsLoading(false);
  };

  let displayedElement = null;

  if (loading) {
      return  <div className="flex h-screen justify-center items-center">
                    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
              </div>;
  }

  if (user) {
    if (hasResult) {
      displayedElement = (
        <Results
          input={input}
          brandname={brandname}
          brandslogan={brandslogan}
          brandadcopy={brandadcopy}
          brandkeywords={brandkeywords}
          onBack={onReset}
          auth={auth}
          user={user}
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
            auth={auth}
            user={user}
          />
        );
    }

  } else {
    displayedElement = <Authentication />;
  }
  
  return (
    <>
      <div className="flex h-screen py-4">
          <div className="max-w-lg m-auto p-8 relative isolate overflow-hidden bg-slate-900 shadow-lg rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                  <stop stopColor="#1e3a8a"></stop>
                  <stop offset="1" stopColor="#60a5fa" stopOpacity="0"></stop>
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
              <h2 className="text-3xl w-fit mx-auto my-2 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-800 sm:text-4xl">BrandGenie</h2>
              <h3 className="text-md font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-800 mt-3">Unleash the potential of your brand with AI</h3>
              {displayedElement}
            </div>
          </div>
        </div>
    </>
  );
};

export default BrandGenie;
