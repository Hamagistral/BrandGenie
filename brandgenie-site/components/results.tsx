import Image from 'next/image';

interface ResultsProps {
    input: string;
    brandname: string;
    brandslogan: string;
    brandkeywords: string[];
    brandimage_url: string;
    onBack: any;
}

const Results: React.FC<ResultsProps> = (props) => {

    const keywordElements = [];

    for (let i = 0; i < props.brandkeywords.length; i++) {
        const keyword = <div key={i}>#{props.brandkeywords[i]}</div>;
        keywordElements.push(keyword)
    }

  return (
    <>
        <div>
            <div>
                <div><strong>Prompt :</strong></div>
                <div>{props.input}</div>
            </div>
            <div>
                <div><strong>Brand Name :</strong></div>
                <div>{props.brandname}</div>
            </div>
            <div>
                <div><strong>Brand Slogan :</strong></div>
                <div>{props.brandslogan}</div>
            </div>
            <div>
                <div><strong>Brand Keywords :</strong></div>
                <div>{keywordElements}</div>
            </div>
            <div>
                <div><strong>Brand Image :</strong></div>
                <div><Image
                    src={props.brandimage_url}
                    alt="Brand Image"
                    width={500}
                    height={500}
                    />
                </div>
            </div>
        </div>
        <button onClick={props.onBack}>Back</button>
    </>
  );
};

export default Results;
