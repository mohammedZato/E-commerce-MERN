export default function RightsideHeader() {
  return (
    <>
      <div className="flex">
        <div className="items-center cursor-pointer px-[11px] rounded-full hover:bg-blue-950 transition-all ease-out duration-500 hidden lg:flex">
          <span className="text-white text-xl mr-1">
            <ion-icon name="heart-outline"></ion-icon>
          </span>
          <div>
            <h4 className="text-gray-200">Reorder</h4>
            <h3 className="font-bold text-gray-100 text-sm">My items</h3>
          </div>
        </div>
        <div className="items-center cursor-pointer px-[11px] rounded-full hover:bg-blue-950 transition-all ease-out duration-500 hidden lg:flex">
          <span className="text-white text-xl mr-1">
            <ion-icon name="person-circle-outline"></ion-icon>
          </span>
          <div>
            <h4 className="text-gray-200">Sign In</h4>
            <h3 className="font-bold text-gray-100 text-sm">Account</h3>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center rounded-full cursor-pointer hover:bg-blue-950 transition-all ease-out duration-500">
          <span className="text-white text-3xl">
            <ion-icon name="cart-outline"></ion-icon>
          </span>
          <h4 className="text-gray-200">$0.00</h4>
          <span className="absolute top-0 left-6 border rounded-full px-1 bg-yellow-400 text-black border-yellow-400 text-[12px]">
            0
          </span>
        </div>
      </div>
    </>
  );
}
