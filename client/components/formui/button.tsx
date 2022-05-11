import Link from "next/link";
import { LinkedButton } from "../../types";

const Button = ({ text, link }: LinkedButton) => {
  return (
    <button>
      <Link href={link}>
        <a className="bg-alternative text-primary rounded-2xl hover:ring-2 hover:bg-primary hover:ring-alternative hover:text-alternative py-2 px-6 duration-100">
          {text}
        </a>
      </Link>
    </button>
  );
};

export default Button;
