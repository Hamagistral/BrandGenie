interface FormProps {
    input: string;
    setInput: any;
    onSubmit: any;
    characterLimit: number;
    isLoading: boolean;
}

const Form: React.FC<FormProps> = (props) => {
    const isInputValid = props.input.length < props.characterLimit;
    const UpdateInputValue = (text: string) => {
        if (text.length <= props.characterLimit) {
            props.setInput(text)
        }
    }

let statusColor = "text-sky-100/75";
let statusText = null;
if (!isInputValid) {
  statusColor = "text-red-600";
  statusText = `Input must be less than ${props.characterLimit} characters.`;
}

  return (
    <>
      <div>
        <p className="mt-6 text-md leading-6 text-gray-200">Get a complete brand package for your e-commerce site with just a product description. Includes name, slogan, ad copy, keywords, and logo sketch.</p>
        <input 
          type="text"
          placeholder="Watches"
          value={props.input}
          onChange={(e) => UpdateInputValue(e.currentTarget.value)}
          className="w-full rounded-md p-3 mt-6 focus:outline-sky-400 focus:outline-4 sm:text-sm"
        />
        <div className={statusColor + " flex justify-between mt-2"}>
          <div>
            {statusText}
          </div>
          <div>
            {props.input.length}/{props.characterLimit}
          </div>
        </div> 
        <button onClick={props.onSubmit} disabled={props.isLoading || !isInputValid} className="mt-8 bg-gradient-to-r from-sky-400 to-sky-800 text-white text-lg p-2 w-full rounded-md disabled:opacity-50 disabled:bg-gray-500">Submit</button>
      </div>
    </>
  );
};

export default Form;
