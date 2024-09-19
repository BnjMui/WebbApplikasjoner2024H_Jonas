type TotalProps = {
  total: number;
};
export default function Total(props: TotalProps) {
  const { total = 0 } = props;
  return (
    <>
      <p>{total}</p>
    </>
  );
}
