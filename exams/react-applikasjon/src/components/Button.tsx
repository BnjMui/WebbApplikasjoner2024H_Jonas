type ButtonProps = {
  text: string;
  buttonType?: "button" | "submit" | "reset";
  onClick?: () => void;
};
export default function Button(props: ButtonProps) {
  const { text = "Default", onClick = () => {}, buttonType } = props;
  return (
    <button
      type={buttonType}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
}
