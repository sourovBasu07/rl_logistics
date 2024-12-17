import { EditIcon } from "@/assets";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { bookingData } from "@/data/adminData";

export function TableDemo() {
  return (
    <Table className="overflow-x-scroll">
      <TableHeader className="bg-primary text-white overflow-scroll">
        <TableRow className="whitespace-nowrap">
          <TableHead className="w-[100px]">Sl.</TableHead>
          <TableHead className="w-[100px]">Booking Id</TableHead>
          <TableHead>Container id</TableHead>
          <TableHead>Booking Date</TableHead>
          <TableHead className="text-right">Sender Country</TableHead>
          <TableHead>Receiver Country</TableHead>
          <TableHead>Delivery Date</TableHead>
          <TableHead className="text-right">Product Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Sender Contact No.</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookingData.map((item, index: number) => (
          <TableRow key={item.bookingId} className="whitespace-nowrap">
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">{item.bookingId}</TableCell>
            <TableCell>{item.containerId}</TableCell>
            <TableCell>{item.bookingDate}</TableCell>
            <TableCell className="text-right">{item.senderCountry}</TableCell>
            <TableCell>{item.receiverCountry}</TableCell>
            <TableCell>{item.deliveryDate}</TableCell>
            <TableCell className="text-right">{item.productLocation}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.senderContactNumber}</TableCell>
            <TableCell className="text-right">
              <EditIcon />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
