import { ChangeEvent, PropsWithChildren } from "react";

type FilterProps = {
  filter: string;
  options: { id: string; label: string; value: string }[];
  onFilterChange: (filter: string) => void;
};
export default function Filter(props: PropsWithChildren<FilterProps>) {
  const { filter, options, onFilterChange } = props;
  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };
  return (
    <section className="filter" onChange={handleFilter}>
      <select>
        {[{ id: "default", label: "-", value: "" }, ...options].map(
          ({ id, label, value }) => (
            <option key={id} value={value}>
              {label}
            </option>
          )
        )}
      </select>
    </section>
  );
}
