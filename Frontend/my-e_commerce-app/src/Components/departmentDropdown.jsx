import React from "react";
import { Link } from "react-router-dom";

export default function DepartmentDropdown() {
  return (
    <>
      <div className="absolute left-4 top-12 border-none rounded-md w-60 max-h-[29rem] overflow-y-auto py-6 px-4 shadow-md">
        <h3 className="font-semibold">All Departments</h3>
        <ul>
          <Link>
            <li className="mt-4 text-gray-600">Rollbacks & More</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Pharmacy, Health & Wellness</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Clothing, Shoes & Tools</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Baby & Kids</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Beauty</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Home, Garden & Tools</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Electronics</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Gaming & Entertainment</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Toys & Outdoor Play</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Paper & Cleaning</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Grocery</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Pets</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Personal Care</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Auto & Tires</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Party Supplies</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">Sports & Outdoors</li>
          </Link>
          <Link>
            <li className="my-4 text-gray-600">
              School, Office & Art Supplies
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
