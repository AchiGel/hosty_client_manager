import React from "react";

interface ServiceItemProps {
  name: string;
  description: string;
  isActive: boolean;
  onToggle: (id: string) => void;
  id: string;
  children: React.ReactNode;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  name,
  description,
  isActive,
  onToggle,
  id,
  children,
}) => {
  return (
    <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-4">
        <div
          className={`p-2.5 rounded-lg bg-[#c5a667]/10 ${isActive ? "text-[#c5a667]" : "text-gray-400"} `}
        >
          {children}
        </div>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={isActive}
        data-state={isActive ? "checked" : "unchecked"}
        value="on"
        onClick={() => onToggle(id)}
        className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=unchecked]:bg-[#dcdfe5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-[#f6f7f9] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#c5a667]"
      >
        <span
          data-state={isActive ? "checked" : "unchecked"}
          className="pointer-events-none block h-5 w-5 rounded-full bg-[#f6f7f9] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        ></span>
      </button>
    </div>
  );
};

export default ServiceItem;
