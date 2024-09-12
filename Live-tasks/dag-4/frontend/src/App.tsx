import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [userName, setUserName] = useState<number>(1);
  const changeUserName = () => {
    setUserName((prev) => prev + 1);
  };

  const produkter = [
    { id: 1, title: "CardTitle", description: "CardDescription" },
    {
      id: 2,
      title: "CardTitle 2",
      description: "CardDescription 2",
    },
  ];
  return (
    <section>
      {/* <p>{userName}</p>
      <button onClick={changeUserName}>Logg ut</button> */}
      {produkter?.map((p, index) => (
        <Card key={index} title={p.title} description={p.description} />
      ))}
      {/* <Title title="Produkter" />
      <Title title="Medlemstilbud" />
      {/* <Card
        title="Kul tittel da"
        description="Dette er beskrivelsen av tingen"
      />
      <Card title="Tittel 2" description="Beskrivelse 2" /> */}
    </section>
  );
}

export default App;
