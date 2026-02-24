import { useState, useRef, useEffect } from "react";
import { FILTER_OPTIONS } from "../../../constants/filterOptions";
import FilterButton from "./RequestsFilterButton";
import { FilterIcon } from "../../assets";

const RequestsBodyFilter = () => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >(Object.fromEntries(FILTER_OPTIONS.map(({ label }) => [label, "All"])));
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFilterToggle = (label: string) => {
    setOpenFilter(openFilter === label ? null : label);
  };

  const handleFilterSelect = (label: string, option: string) => {
    setSelectedFilters((prev) => ({ ...prev, [label]: option }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-3 py-2" ref={containerRef}>
      <button className="cursor-pointer justify-center whitespace-nowrap text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:bg-[#c9a65e] hover:text-[#0f1729] h-10 px-4 py-2 flex items-center gap-2 rounded-full bg-white border-gray-100 shadow-sm hover:border-[#c5a667]/30 text-gray-900">
        <FilterIcon />
        Filters
      </button>
      <div className="h-6 w-px bg-gray-300 mx-1 hidden sm:block"></div>
      {FILTER_OPTIONS.map(({ label, options }) => (
        <FilterButton
          key={label}
          label={label}
          options={options}
          isOpen={openFilter === label}
          onToggle={() => handleFilterToggle(label)}
          onSelect={(option) => handleFilterSelect(label, option)}
          selected={selectedFilters[label]}
        />
      ))}
    </div>
  );
};

export default RequestsBodyFilter;
