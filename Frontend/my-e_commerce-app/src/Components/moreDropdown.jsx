import React from "react";
import { Link } from "react-router-dom";

export default function MoreDropdown() {
  return (
    <>
      <div className="absolute right-4 top-12 border-none rounded-md w-56 h-52 py-6 px-4 shadow-md">
        <ul>
          <Link>
            <li className="mt-4 text-gray-600">Pharmacy Delivery</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">My Items</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Auto Service</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Only at Walmart</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
