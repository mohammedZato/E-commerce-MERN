import PhoneHand from "../Images/phonehand.png";
import Leaves from "../Images/leaves.png";
import { Menu } from "lucide-react";

export default function Logo() {
  return (
    <>
      <div className="flex items-center space-x-7">
        <div className="lg:hidden">
          <Menu className="size-8 text-gray-200" />
        </div>
        <div className="flex-shrink-0">
          <img
            className="w-[30px] hover:cursor-pointer"
            src={Leaves}
            alt="Walmart Logo"
          />
        </div>
        <div className="bg-blue-800 rounded-full text-gray-200 items-center flex-shrink-0 w-[300px] min-w-[300px] px-2 py-2 cursor-pointer hover:bg-blue-950 transition-all ease-out duration-500 hidden lg:flex">
          <img
            className="size-6 rounded-full mr-2"
            src={PhoneHand}
            alt="phone image"
          />
          <div className="flex flex-col">
            <h4 className="font-bold text-sm">Pickup or Delivery?</h4>
            <h3 className="text-xs">Sacramento, 95829 Sacramento supe...</h3>
          </div>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>
    </>
  );
}
