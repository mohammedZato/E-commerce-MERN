import PhoneHand from "../Images/phonehand.png";
import Leaves from "../Images/leaves.png";

export default function Logo() {
  return (
    <>
      <div className="flex items-center space-x-7">
        <img
          className="size-[44px] hover:cursor-pointer"
          src={Leaves}
          alt="Walmart Logo"
        />
        <div className="bg-blue-800 rounded-full text-gray-200 flex items-center w-[300px] px-2 py-2 cursor-pointer hover:bg-blue-950 transition-all ease-out duration-500">
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
