import { useContext } from "react";
import { EcommerceContext } from "../Context";
import DepartmentDropdown from "./departmentDropdown";
import ServicesDropdown from "./servicesDropdown";
import MoreDropdown from "./moreDropdown";

export default function Navigation() {
  const {
    isDepartmentOpen,
    setIsDepartmentOpen,
    isServicesOpen,
    setIsServicesOpen,
    isMoreOpen,
    setIsMoreOpen,
  } = useContext(EcommerceContext);

  return (
    <>
      <div className="bg-blue-200 py-2 px-[14px] flex items-center justify-center relative">
        <div className="flex space-x-2 mr-auto">
          <div
            onClick={() => setIsDepartmentOpen((prevState) => !prevState)}
            className="flex items-center space-x-1 relative cursor-pointer"
          >
            <h4 className="text-blue-900 font-bold bg-gray-100 text-[13px] px-5 py-1 border rounded-full hover:border-blue-950 transition-all duration-500">
              Departments
            </h4>
            <span className="absolute right-0 top-[6px] text-blue-950">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          </div>
          <div
            onClick={() => setIsServicesOpen((prevState) => !prevState)}
            className="flex items-center space-x-1 relative cursor-pointer"
          >
            <h4 className="text-blue-900 font-bold bg-gray-100 text-[13px] px-5 py-1 border rounded-full hover:border-blue-950 transition-all duration-500">
              Services
            </h4>
            <span className="absolute right-0 top-[6px] text-blue-950">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          </div>
          <div className="flex items-center bg-gray-100 text-[13px] text-blue-950 px-3 py- border rounded-full cursor-pointer">
            Get it Fast
          </div>
          <div className="flex items-center bg-gray-100 text-[13px] text-blue-950 px-3 py- border rounded-full cursor-pointer">
            New Arrivals
          </div>
          <div className="flex items-center bg-gray-100 text-[13px] text-blue-950 px-3 py- border rounded-full cursor-pointer">
            Back to School
          </div>
          <div className="flex items-center bg-gray-100 text-[13px] text-blue-950 px-3 py- border rounded-full cursor-pointer">
            Rollbacks and More
          </div>
          <div className="flex items-center bg-gray-100 text-[13px] text-blue-950 px-3 py- border rounded-full cursor-pointer">
            Dinner Made Easy
          </div>
          <div className="flex items-center bg-gray-100 text-[13px] text-blue-950 px-3 py- border rounded-full cursor-pointer">
            Tailgaiting
          </div>
          <div className="flex items-center bg-gray-100 text-[13px] text-blue-950 px-3 py- border rounded-full cursor-pointer">
            College Shop
          </div>
          <div className="flex items-center bg-gray-100 text-[13px] text-blue-950 px-3 py- border rounded-full cursor-pointer">
            Walmart +
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2 relative">
            <h4
              onClick={() => setIsMoreOpen((prevState) => !prevState)}
              className="text-blue-950 bg-gray-100 text-[15px] px-4 py-1 border rounded-full cursor-pointer hover:border-blue-950 transition-all duration-500"
            >
              More
            </h4>
            <span className="absolute right-0 top-2 mr-2">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          </div>
        </div>
        {isDepartmentOpen && <DepartmentDropdown />}
        {isServicesOpen && <ServicesDropdown />}
        {isMoreOpen && <MoreDropdown />}
      </div>
    </>
  );
}
