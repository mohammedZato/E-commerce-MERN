import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [searchBar, setSearchBar] = useState("");

  return (
    <>
      <div className="relative">
        <input
          className="w-[31rem] border focus:outline-none active:outline-none rounded-full placeholder-blue-600 bg-gray-200 text-blue-400 text-sm py-[15px] px-3"
          type="text"
          placeholder="Search everything at Walmart online and in store"
          id="searchBar"
          name="searchBar"
          value={searchBar}
          onChange={(event) => setSearchBar(event.target.value)}
        />
        <div className="border-blue-800 bg-blue-800 rounded-full w-6 p-[3px] absolute top-[15px] left-[460px] cursor-pointer hover:bg-blue-950 transition-all ease-out duration-300">
          <SearchIcon className="size-4 text-white" />
        </div>
      </div>
    </>
  );
}
