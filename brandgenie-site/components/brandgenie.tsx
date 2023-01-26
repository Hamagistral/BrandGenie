import React from "react";
import Image from 'next/image';
import Form from "./form";
import Results from "./results";

const BrandGenie: React.FC = () => {
    
    const ENDPOINT: string = 
    "https://0cw7w0teuk.execute-api.us-east-1.amazonaws.com/prod/generate_branding"

    const CHARACTER_LIMIT: number = 32;

    const [input, setInput] = React.useState("");
    
    const [brandname, setBrandname] = React.useState("");
    const [brandslogan, setBrandslogan] = React.useState("");
    const [brandkeywords, setBrandkeywords] = React.useState([]);
    const [brandimage_url, setBrandimage_url] = React.useState("");
    const [hasResult, setHasResult] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onSubmit = () => {
        console.log("Submitting : " + input);
        setIsLoading(true);
        fetch(`${ENDPOINT}?input=${input}`)
            .then((res) => res.json())
            .then(onResult)
    };

    const onResult = (data: any) => {
        setBrandname(data.brand_name);
        setBrandslogan(data.brand_slogan);
        setBrandkeywords(data.keywords);
        setBrandimage_url(data.brand_image);
        setHasResult(true);
        setIsLoading(false);
    }

    const onReset = () => {
        setInput("");
        setHasResult(false);
        setIsLoading(false);
    }
    
    let displayedElement = null;
    
    if (hasResult) {
        displayedElement = <Results input={input} brandname={brandslogan} brandslogan={brandslogan} brandkeywords={brandkeywords} brandimage_url={brandimage_url} onBack={onReset}/>
    } else {
        displayedElement = <Form input={input} isLoading={isLoading} characterLimit={CHARACTER_LIMIT} setInput={setInput} onSubmit={onSubmit} />
    }

    return (
        <>
            <h1>BrandGenie</h1>
            {displayedElement}
        </>
    )
};

export default BrandGenie;