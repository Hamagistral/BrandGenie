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

  return (
    <>
      <p>
        Tell me what does your e-commerce website sell and I will generate a
        brand name, brand slogan, keywords and an image for you to help you in
        your branding mission.
      </p>
      <input
        type="text"
        placeholder="Watches"
        value={props.input}
        onChange={(e) => UpdateInputValue(e.currentTarget.value)}
      />
      <div>{props.input.length}/{props.characterLimit}</div>
      <button onClick={props.onSubmit} disabled={props.isLoading || !isInputValid}>Submit</button>
    </>
  );
};

export default Form;
