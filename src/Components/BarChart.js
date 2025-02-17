import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", itemsIn: 400, itemsOut: 240 },
  { name: "Feb", itemsIn: 300, itemsOut: 139 },
  { name: "Mar", itemsIn: 200, itemsOut: 980 },
  { name: "Apr", itemsIn: 278, itemsOut: 390 },
  { name: "May", itemsIn: 189, itemsOut: 480 },
  { name: "Jun", itemsIn: 239, itemsOut: 380 },
];

export default function ItemsTransactionBarChart() {
  return (
    <div className="flex justify-between items-center p-6 gap-6">
      {/* Items Transaction Bar Chart */}
      <div className="w-full p-4 rounded-lg">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="itemsIn" fill="#30be82" name="Items In" />
            <Bar dataKey="itemsOut" fill="#30beb6" name="Items Out" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
