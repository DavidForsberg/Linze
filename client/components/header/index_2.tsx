import Link from "next/link";
import Login from "../../pages/login";
import Button from "../formui/button";
import Search from "./search";

const links = [
  { id: 1, text: "Discover", url: "/discover" },
  { id: 2, text: "About", url: "/about" },
  { id: 3, text: "Shop", url: "/shop" },
];

const Header = () => {
  return (
    <header className="flex w-screen justify-center items-center fixed text-primary">
      <div className="w-11/12 border-b-2 flex justify-between">
        <Link href="/">
          <a className="text-3xl py-10 cursor-pointer">Linze</a>
        </Link>
        <Search />
        <nav>
          <ul className="flex items-center">
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className="hover:text-alternative duration-500 cursor-pointer text-2xl p-10 mr-1"
                >
                  <Link href={link.url}>
                    <a>{link.text}</a>
                  </Link>
                </li>
              );
            })}
            <Button text="Login" link="/login" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
