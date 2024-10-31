import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="">Task oppgaver</h1>
        <ul>
          <li>Lag en custon hook knyttet til å hente en eller alle tasks</li>
          <li>Vis listen av tasks</li>
          <li>Vis detaljer for en task</li>
          <li>Legg til en ny task</li>
          <li>Endre status på en task</li>
        </ul>
      </main>
    </div>
  );
}
