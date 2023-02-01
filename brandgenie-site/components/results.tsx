interface ResultsProps {
    input: string;
    brandname: string;
    brandslogan: string;
    brandadcopy: string;
    brandkeywords: string[];
    onBack: any;
}

const Results: React.FC<ResultsProps> = (props) => {

    const keywordElements = [];

    for (let i = 0; i < props.brandkeywords.length; i++) {
        const keyword = <div key={i} className="bg-sky-200 text-sky-700 p-1 px-2 mr-2 mb-2 rounded-lg text-sm">#{props.brandkeywords[i]}</div>;
        keywordElements.push(keyword)
    }

  return (
    <>
        <div className="mt-6 text-left">  
            <div className="bg-slate-800 rounded-md p-4 text-md mb-4">
                <div className="text-slate-400 mb-2"><strong>Prompt </strong></div>
                <div className="text-white font-bold">{props.input}</div>
            </div>
            <div className="bg-slate-800 rounded-md p-4 text-md mb-4">
                <div className="text-slate-400 mb-2"><strong>Brand Name </strong></div>
                <div className="text-white">{props.brandname}</div>
            </div>
            <div>
                <div className="bg-slate-800 rounded-md p-4 text-md mb-4">
                    <div className="text-slate-400 mb-2"><strong>Brand Slogan </strong></div>
                    <div className="text-white">{props.brandslogan}</div>
                </div>
                <div className="bg-slate-800 rounded-md p-4 text-md mb-4">
                    <div className="text-slate-400 mb-2"><strong>Brand Keywords </strong></div>
                    <div className="flex flex-wrap">{keywordElements}</div>
                </div>
                <div className="bg-slate-800 rounded-md p-4 text-md mb-4">
                    <div className="text-slate-400 mb-2"><strong>Brand Ad Copy </strong></div>
                    <div className="text-white text-justify">{props.brandadcopy}</div>
                </div>
            </div>
            
            
        </div>
        <button onClick={props.onBack} className="mt-8 bg-gradient-to-r from-sky-400 to-sky-800 text-white text-lg p-2 w-full rounded-md disabled:opacity-50 disabled:bg-gray-500">Back</button>
    </>
  );
};

export default Results;
