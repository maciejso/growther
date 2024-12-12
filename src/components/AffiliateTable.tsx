import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const data = [
  { affiliate: "John Doe", clicks: 1234, conversions: 123, revenue: "$12,345", rate: "10%" },
  { affiliate: "Jane Smith", clicks: 2345, conversions: 234, revenue: "$23,456", rate: "12%" },
  { affiliate: "Bob Johnson", clicks: 3456, conversions: 345, revenue: "$34,567", rate: "15%" },
  { affiliate: "Alice Brown", clicks: 4567, conversions: 456, revenue: "$45,678", rate: "13%" },
  { affiliate: "Charlie Wilson", clicks: 5678, conversions: 567, revenue: "$56,789", rate: "14%" },
];

export const AffiliateTable = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Affiliate Performance Table</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Affiliate</TableHead>
            <TableHead className="text-right">Clicks</TableHead>
            <TableHead className="text-right">Conversions</TableHead>
            <TableHead className="text-right">Revenue</TableHead>
            <TableHead className="text-right">Conv. Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{row.affiliate}</TableCell>
              <TableCell className="text-right">{row.clicks}</TableCell>
              <TableCell className="text-right">{row.conversions}</TableCell>
              <TableCell className="text-right">{row.revenue}</TableCell>
              <TableCell className="text-right">{row.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};