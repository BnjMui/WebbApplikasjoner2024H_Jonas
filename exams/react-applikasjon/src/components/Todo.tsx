import Button from "./Button";
type TodoProps = {
  title: string;
  description: string;
};

export default function Todo(props: TodoProps) {
  const { title = "Default", description = "Default" } = props;
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button text="Complete" />
    </article>
  );
}
