import Logo from "./logo";
import SearchBar from "./searchBar";
import RightsideHeader from "./rightsideHeader";
import Navigation from "./navigation";

export default function Header() {
  return (
    <>
      <div className="bg-blue-700 flex items-center py-4 justify-center space-x-7">
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
