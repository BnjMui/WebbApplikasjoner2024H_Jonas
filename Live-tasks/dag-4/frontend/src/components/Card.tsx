import Title from "./title";

type CardProps = {
  title?: string;
  description?: string;
};

export default function Card(props: CardProps) {
  const { title = "Title", description = "Default description" } = props;
  return (
    <article>
      <Title title={title} />
      <p>{description}</p>
    </article>
  );
}
