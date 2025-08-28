import Logo from "./logo";
import SearchBar from "./searchBar";
import RightsideHeader from "./rightsideHeader";
import Navigation from "./navigation";

export default function Header() {
  return (
    <>
      <div className="flex items-center bg-blue-700 px-5 py-4 space-x-7 lg:ml-[-20px]">
        <Logo />
        <SearchBar />
        <RightsideHeader />
      </div>
      <div>
        <Navigation />
      </div>
    </>
  );
}
