import { Result } from "postcss";
import { useState } from "react";

const tempdata = [
  { id: 1, type: 1, mainsearch: "username" },
  { id: 2, type: 2, mainsearch: "game" },
  { id: 3, type: 3, mainsearch: "news" },
];

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [founditems, setFoundsitems] = useState([]);

  const onChangeHandler = (event: any) => {
    setInputValue(event.target.value);
    var result: any = tempdata.filter((x) =>
      x.mainsearch.includes(event.target.value)
    );
    setFoundsitems(result);
    if (event.target.value.length === 0) setFoundsitems([]);
    console.log;
  };

  return (
    <div className="text-2xl ml-52">
      <form
        action=""
        className="max-w-md flex items-center text-alternative focus-within:text-alternative"
      >
        <img
          src="/icons/search.svg"
          alt=""
          className="w-5 h-5 absolute ml-2 pointer-events-none"
        />
        <input
          type="text"
          name="searchTerm"
          placeholder="Users,Tags"
          aria-label="Users,Tags,Etc"
          className="w-full pr-3 pl-8 hover:placeholder-primary focus:placeholder-primary focus:ring-2 ring-primary rounded-2xl border-none outline-none placeholder:pl-8 text-xl duration-500"
          onChange={onChangeHandler}
          value={inputValue}
          required
        />
      </form>
      {founditems.length > 0 && <h1>match</h1>}
    </div>
  );
};

export default Search;
