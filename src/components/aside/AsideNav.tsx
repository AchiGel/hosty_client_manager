import { NavLink } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../constants/navigationLinks";

const AsideNav = () => {
  const baseClasses =
    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group";

  const activeClasses = "bg-[#c5a667]/10 text-[#c5a667]";
  const inactiveClasses = "text-gray-500 hover:bg-gray-50";

  return (
    <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
      {NAVIGATION_LINKS.map((nl) => (
        <NavLink
          key={nl.id}
          to={nl.path}
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          {nl.icon}
          <span className="text-sm font-medium">{nl.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default AsideNav;
