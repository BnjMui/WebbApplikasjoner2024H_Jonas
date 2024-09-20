import Button from "./Button";

export default function Form() {
  return (
    <>
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
        <label htmlFor="text">Content</label>
        <input id="text" type="text" />
        <Button text="Add" buttonType="submit" />
      </form>
    </>
  );
}
