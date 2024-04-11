import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SimpleTableProps {
  dataList: any[];
}

export function SimpleTable({ dataList }: SimpleTableProps) {
  return (
    <Table>
      <TableCaption>A list of cats.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Breed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataList.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{data.name}</TableCell>
            <TableCell className="text-right">{data.breed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">{dataList.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
