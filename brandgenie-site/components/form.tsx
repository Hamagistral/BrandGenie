import { getDisplayName } from "next/dist/shared/lib/utils";

interface FormProps {
    input: string;
    setInput: any;
    onSubmit: any;
    characterLimit: number;
    isLoading: boolean;
    auth: any;
    user: any;
}

const Form: React.FC<FormProps> = (props) => {

  const isInputValid1 = props.input.length < props.characterLimit;
  const isInputValid2 = props.input.length > 1;
        
  const UpdateInputValue = (text: string) => {
      if (text.length <= props.characterLimit) {
          props.setInput(text)
      }
  }

  let statusColor = "text-sky-100";
  let statusText = null;

  if (!isInputValid1) {
    statusColor = "text-red-600";
    statusText = `Input must be less than ${props.characterLimit} characters.`;
  }

  let submitButton = <button onClick={props.onSubmit} disabled={!isInputValid2} className="mt-8 font-semibold bg-gradient-to-r from-sky-500 to-sky-800 text-white text-lg p-2 w-full rounded-md disabled:opacity-50 disabled:bg-gray-500">Submit</button>
  if (props.isLoading) {
    submitButton =  <button type="button" disabled={props.isLoading}  className="mt-8 text-white font-semibold text-lg p-2 w-full rounded-md bg-gradient-to-r from-sky-500 to-sky-800">
                      <svg aria-hidden="true" className="inline w-6 h-6 mr-2 text-slate-600 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                    </button>
  }

  return (
    <>
      <div>
        <p className="mt-6 text-gray-200">Get a complete brand package for your e-commerce site with just a product description. Includes name, slogan, ad copy, and related keywords.</p>
        <input 
          type="text"
          placeholder="Watches"
          value={props.input}
          onChange={(e) => UpdateInputValue(e.currentTarget.value)}
          className="w-full rounded-md p-3 mt-6 focus:outline-sky-800 focus:outline-4 sm:text-sm"
        />
        <div className={statusColor + " flex justify-between mt-2"}>
          <div>
            {statusText}
          </div>
          <div>
            {props.input.length}/{props.characterLimit}
          </div>
        </div> 
        {submitButton}
        <button onClick={() => props.auth.signOut()} className="mt-4 font-semibold bg-slate-900/25 text-gray-50 border-2 border-slate-400 text-md p-2 w-full rounded-md">Log Out</button>
      </div>
      <div className="mt-4 text-sky-100 text-sm">Signed in as :  <span className="font-bold text-sky-400">{props.user.displayName}</span></div>
    </>
  );
};

export default Form;
