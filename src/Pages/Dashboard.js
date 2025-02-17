import {
  Archive,
  ArrowDownFromLine,
  ArrowUpFromLine,
  MapPinHouse,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ItemsTransactionBarChart from "../Components/BarChart";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="flex justify-between items-center p-6 gap-6">
        {/* Item List  */}
        <div className="w-1/2 p-4 rounded-lg border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Item List</h1>
            <Link className="text-blue-500 text-sm" to="/items">
              View All
            </Link>
          </div>

          {/* The Items Table Preview */}
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Item Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Store
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Example row */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Example Item
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Store
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Example Item
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Store
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Example Item
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Store
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Example Item
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Store
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                {/* More rows can be added here */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Asset List */}
        <div className="w-1/2 p-4 rounded-lg border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Asset List</h1>
            <Link className="text-blue-500 text-sm" to="/assets">
              View All
            </Link>
          </div>

          {/* The Assets Table Preview */}
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Asset Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Store
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Example row */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Example Asset
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Store
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Example Asset
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Store
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Example Asset
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Store
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Example Asset
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Store
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                {/* More rows can be added here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-6 gap-6">
        {/* Item Summary */}
        <div className="w-1/5 p-8 font-bold rounded-lg border border-gray-300">
          <h1 className="text-lg mb-6">Item Summary</h1>
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col items-center">
              <Archive className="w-6 h-6 text-gray-500 mb-3" />
              <span className="text-sm font-medium text-gray-900">
                Quantity in Hand
              </span>
              <span className="text-lg font-semibold text-gray-700">150</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPinHouse className="w-6 h-6 text-gray-500 mb-3" />
              <span className="text-sm font-medium text-gray-900">
                To be Received
              </span>
              <span className="text-lg font-semibold text-gray-700">50</span>
            </div>
          </div>

          {/* Transactional Summary */}
          <h1 className="text-lg mb-6">Transactional Summary</h1>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <ArrowDownFromLine className="w-6 h-6 text-gray-500 mb-3" />
              <span className="text-sm font-medium text-gray-900">
                Items In
              </span>
              <span className="text-lg font-semibold text-gray-700">150</span>
            </div>
            <div className="flex flex-col items-center">
              <ArrowUpFromLine className="w-6 h-6 text-gray-500 mb-3" />
              <span className="text-sm font-medium text-gray-900">
                Items Out
              </span>
              <span className="text-lg font-semibold text-gray-700">50</span>
            </div>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="w-2/5 p-8 rounded-lg border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Pending Approvals</h1>
            <Link className="text-blue-500 text-sm" to="/items">
              View All
            </Link>
          </div>
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Requested By
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Item Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Example row */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Shedrack Ntandu
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Item
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12/12/2021
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Shedrack Ntandu
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Item
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12/12/2021
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Shedrack Ntandu
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Item
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12/12/2021
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Shedrack Ntandu
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Item
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12/12/2021
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100
                  </td>
                </tr>
                {/* More rows can be added here */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Approvals */}
        <div className="w-2/5 p-8 rounded-lg border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Recent Approvals</h1>
            <Link className="text-blue-500 text-sm" to="/items">
              View All
            </Link>
          </div>
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Requested By
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Item/Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Approved By
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Example row */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Shedrack Ntandu
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Item/10
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12/12/2021
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Bernard Mramba
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Shedrack Ntandu
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Item/10
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12/12/2021
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Bernard Mramba
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Shedrack Ntandu
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Item/10
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12/12/2021
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Bernard Mramba
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Shedrack Ntandu
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Example Item/10
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12/12/2021
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Bernard Mramba
                  </td>
                </tr>
                {/* More rows can be added here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-6 gap-6">
        {/*Items Transaction Bar Chart */}
        <div className="w-full p-4 font-bold rounded-lg border border-gray-300">
          <h1 className="text-lg">Items Transaction Bar Chart</h1>
          <ItemsTransactionBarChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
