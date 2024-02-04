"use client";
import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
const links = [
  { title: "Home", path: "/" },
  { title: "Contact", path: "/contact" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
];
export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = false;
  return (
    <div className="outerContainer">
      <div className="navbarContainer">
        <div className="logoStyle">Logo</div>
        <div className="navbarLinks">
          {links.map((item) => {
            return <NavbarLinks key={item.title} item={item} />;
          })}
          {session ? (
            <>
              {isAdmin && (
                <NavbarLinks item={{ title: "Admin", path: "/admin" }} />
              )}
              <button className="logout">Logout</button>
            </>
          ) : (
            <NavbarLinks item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      </div>
      <button className="menuButton" onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className="mobileLinks">
          {links.map((item) => {
            return <NavbarLinks key={item.title} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};
