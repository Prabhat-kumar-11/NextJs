"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = ({ item }) => {
  const pathName = usePathname();
  return <Link href={`${item.path}`} className={`linksContainer ${pathName === item.path && "linksActive"}`}>{item.title}</Link>;
};
export default NavbarLinks;
