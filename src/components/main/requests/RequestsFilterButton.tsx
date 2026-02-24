import { ChevronDownIcon } from "../../assets";

const FilterButton = ({
  label,
  options,
  isOpen,
  onToggle,
  onSelect,
  selected,
}: {
  label: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: string) => void;
  selected: string;
}) => (
  <div className="relative">
    <button
      className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a65e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 gap-2 text-gray-500 hover:text-gray-900 hover:bg-white"
      type="button"
      aria-haspopup="menu"
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      {label}: <span className="font-medium text-gray-900">{selected}</span>
      <ChevronDownIcon />
    </button>
    {isOpen && (
      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-max">
        <button
          className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-gray-900 font-medium"
          onClick={() => {
            onSelect("All");
            onToggle();
          }}
        >
          All
        </button>
        {options.map((option) => (
          <button
            key={option}
            className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700 hover:text-gray-900 border-t border-gray-100"
            onClick={() => {
              onSelect(option);
              onToggle();
            }}
          >
            {option}
          </button>
        ))}
      </div>
    )}
  </div>
);

export default FilterButton;
