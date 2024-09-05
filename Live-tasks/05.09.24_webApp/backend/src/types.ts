export type WeatherType = "rain" | "cloudy" | "sun";

export type Weather = {
  id?: string;
  place: string;
  tomorrow: "rain" | "sun" | "cloudy";
  today: "rain" | "sun" | "cloudy";
  delected?: boolean;
  description?: string;
};
