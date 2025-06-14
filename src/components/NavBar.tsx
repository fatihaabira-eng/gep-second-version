import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo-GEP.png"; // Assuming logo is placed in the public folder
import { cn } from "@/lib/utils";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

interface NavItemProps {
  children: React.ReactNode;
  active?: boolean;
  to: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ children, active = false, to, onClick }) => {
  return (
    <li className={`px-4 py-2 text-lg ${
      active ? "font-semibold text-[#6cb154] border-b-2 border-[#6cb154]" : "text-gray-600 hover:text-gray-900"
    }`}>
      <Link to={to} onClick={onClick} className="block w-full h-full">
        {children}
      </Link>
    </li>
  );
};

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Close mobile menu when a link is clicked
  const handleNavItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Left side - Logo and Hamburger Menu */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="logo" className="h-14 w-auto rounded-lg" />
              <span className="font-sans text-2xl font-bold text-[#3a6a6e] tracking-tight ml-3">
                GEP Dashboard
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 focus:outline-none">
              {menuOpen ? <FiX className="h-7 w-7" /> : <FiMenu className="h-7 w-7" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <NavigationMenu className="mr-4">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg font-medium",
                    isActive("/") ? "bg-[#6cb154]/10 text-[#6cb154] font-semibold" : ""
                  )}>
                    Dashboard
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "text-lg font-medium",
                    isActive("/countries") ? "bg-[#6cb154]/10 text-[#6cb154] font-semibold" : ""
                  )}>
                    Countries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link to="/countries" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#3a6a6e]/20 to-[#6cb154]/20 p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-xl font-medium text-[#3a6a6e]">
                              Countries
                            </div>
                            <p className="text-base leading-tight text-gray-600">
                              Explore country profiles and metrics on green education initiatives worldwide
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/countries" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6cb154]/10 focus:bg-[#6cb154]/10">
                          <div className="text-base font-medium leading-none text-[#3a6a6e]">All Countries</div>
                          <p className="text-sm leading-snug text-gray-500">
                            View the full list of participating countries
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/countries?region=africa" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6cb154]/10 focus:bg-[#6cb154]/10">
                          <div className="text-base font-medium leading-none text-[#3a6a6e]">Middle East</div>
                          <p className="text-sm leading-snug text-gray-500">
                            Green education progress in African nations
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/countries?region=asia" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#6cb154]/10 focus:bg-[#6cb154]/10">
                          <div className="text-base font-medium leading-none text-[#3a6a6e]">Southest Europe</div>
                          <p className="text-sm leading-snug text-gray-500">
                            Green education progress in Asian nations
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <Link to="/resources" className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg font-medium",
                    isActive("/resources") ? "bg-[#6cb154]/10 text-[#6cb154] font-semibold" : ""
                  )}>
                    Resources
                  </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link to="/" className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg font-medium",
                    isActive("/about") ? "bg-[#6cb154]/10 text-[#6cb154] font-semibold" : ""
                  )}>
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side - Search and Sign In */}
          <div className="hidden md:flex items-center">
            {/* <div className="relative mx-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-11 pr-3 py-3 text-base border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6cb154] focus:border-[#6cb154]"
              />
            </div> */}
            {/* <Link
              to="/signin"
              className="px-5 py-3 text-base font-medium rounded-md text-white bg-[#0f7378] hover:bg-[#08565a] focus:ring-2 focus:ring-offset-2 focus:ring-[#0f7378] transition-colors"
            >
              Sign In
            </Link> */}
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {menuOpen && (
          <div className="md:hidden">
            <ul className="bg-white space-y-2 py-2 shadow-md">
              <NavItem to="/" active={isActive("/")} onClick={handleNavItemClick}>
                Dashboard
              </NavItem>
              <NavItem to="/countries" active={isActive("/countries")} onClick={handleNavItemClick}>
                Countries
              </NavItem>
              {/* <NavItem to="/resources" active={isActive("/resources")} onClick={handleNavItemClick}>
                Resources
              </NavItem>
              <NavItem to="/partners" active={isActive("/partners")} onClick={handleNavItemClick}>
                Partners
              </NavItem> */}
              {/* <li className="px-4 py-2">
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full pl-11 pr-3 py-3 text-base border border-gray-300 rounded-md bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6cb154] focus:border-[#6cb154]"
                  />
                </div>
                <Link 
                  to="/signin" 
                  onClick={handleNavItemClick}
                  className="block w-full text-center py-3 text-base font-medium rounded-md text-white bg-[#0f7378] hover:bg-[#08565a]"
                >
                  Sign In
                </Link>
              </li> */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;