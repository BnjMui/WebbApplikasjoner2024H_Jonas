type TitleProps = { title: string };

export default function Title(props: TitleProps) {
  const title = props.title;
  return <h1>{title}</h1>;
}
