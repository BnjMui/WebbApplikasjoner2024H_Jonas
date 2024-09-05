import { readFile, writeFile } from "node:fs/promises";
import type { Weather } from "./types.ts";

export async function getWeatherData() {
  const data = await readFile("./data/weather.json", "utf-8");
  const response = (await JSON.parse(data)) as Weather[];
  return response;
}

export async function updateWeatherData(newData: Weather[]) {
  await writeFile("./data/weather.json", JSON.stringify(newData, null, 2));
}
