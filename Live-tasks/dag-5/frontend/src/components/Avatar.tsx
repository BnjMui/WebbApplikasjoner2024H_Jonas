type PropsAvatar = {
  name: string;
};
export default function Avatar({ name }: PropsAvatar) {
  const avatar = name[0].toLocaleUpperCase();
  //const firstName = name.split(" ").join("").toLocaleUpperCase().slice(0, 1);
  return (
    <>
      <p className="avatar">{avatar}</p>
    </>
  );
}
