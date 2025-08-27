import React from "react";
import { Link } from "react-router-dom";

export default function ServicesDropdown() {
  return (
    <>
      <div className="absolute left-[155px] top-12 border-none rounded-md w-60 max-h-[29rem] overflow-y-auto py-6 px-4 shadow-md">
        <h3 className="font-semibold">All Services</h3>
        <ul>
          <Link>
            <li className="mt-4 text-gray-600">Auto Care Center Services</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Pharmacy</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Vision and Optical</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Insurance and Benefits</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Registry, Lists & Gifts</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Custom Cakes</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Photo Services</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Financial Services</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Protection, Home & Tech</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Subscriptions</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Walmart Business</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Shopping Simplified</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
