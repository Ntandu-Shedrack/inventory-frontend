import { PackagePlus, Search, SlidersHorizontal } from "lucide-react";
import React from "react";
import ReactPaginate from "react-paginate";

// Search Bar Component
const SearchBar = () => (
  <div className="relative w-64">
    <input
      type="text"
      placeholder="Search Item"
      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
    />
    <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
  </div>
);

// Action Buttons Component
const ActionButtons = () => (
  <div className="flex gap-4">
    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
      <PackagePlus size={20} />
      Add Item
    </button>
    <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
      <SlidersHorizontal size={20} />
      Filter
    </button>
  </div>
);

// Table Component
const ItemsTable = () => {
  const dummyData = Array(5).fill({
    name: "Item Name",
    model: "Model",
    type: "Type",
    store: "Store",
    amount: "Amount",
    project: "Project",
    status: "Status",
  });

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-300">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            {[
              "Item Name",
              "Model",
              "Type",
              "Store",
              "Amount",
              "Project",
              "Status",
            ].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {dummyData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 transition">
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.model}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.store}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.project}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Pagination Component
const Pagination = ({ pageCount, onPageChange }) => (
  <div className="flex justify-center mt-4">
    <ReactPaginate
      previousLabel={"← Prev"}
      nextLabel={"Next →"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={"flex items-center gap-2 text-gray-700"}
      pageClassName={
        "px-3 py-1 border border-gray-300 rounded-md cursor-pointer hover:bg-indigo-500 hover:text-white transition"
      }
      activeClassName={"bg-indigo-500 text-white"}
      previousClassName={
        "px-3 py-1 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-300 transition"
      }
      nextClassName={
        "px-3 py-1 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-300 transition"
      }
      breakClassName={"px-3 py-1"}
    />
  </div>
);

// Main Items Component
const Items = () => {
  return (
    <div className="m-8 p-6 rounded-lg border border-gray-300 shadow-sm bg-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <SearchBar />
        <ActionButtons />
      </div>

      {/* Items Table */}
      <ItemsTable />

      {/* Pagination */}
      <Pagination
        pageCount={10}
        onPageChange={(data) => console.log(data.selected)}
      />
    </div>
  );
};

export default Items;
