import Link from "next/link";
import { LinkedButton } from "../../types";

const Button2 = ({ text, link }: LinkedButton) => {
  return (
    <button>
      <Link href={link}>
        <a className="bg-primary text-alternative rounded-2xl hover:ring-2 hover:bg-alternative hover:ring-primary hover:text-primary py-2 px-6 duration-100">
          {text}
        </a>
      </Link>
    </button>
  );
};

export default Button2;
