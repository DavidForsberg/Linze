import Link from "next/link";
const Links = [
  { name: "Support", url: "/support" },
  { name: "Privacy policy", url: "/policy" },
  { name: "Terms of service", url: "/terms" },
];
const Footer = () => {
  return (
    <footer className="shadow-md w-full top-0 left-0 text-primary bg-bg">
      <div className="md-flex py-4 md:px-10 px-7">
        <div className="flex items-center justify-between ">
          <div className="text-2xl mr-1 pt-2 font-bold">
            <Link href="/">
              <a>Linze</a>
            </Link>
          </div>
          <div className="md:flex items-center justify-between">
            <Link href="https://twitter.com/Bovver">
              <a>
                <img src="/images/twitter.png" alt="" width={40} height={40} />
              </a>
            </Link>
            <ul className="md:items-center justify-between">
              {Links.map((link) => {
                return (
                  <li
                    key={link.name}
                    className="hover:text-alternative duration-500 cursor-pointer text-sm md:ml-14 md:my-0 my-2"
                  >
                    <Link href={link.url}>
                      <a>{link.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
