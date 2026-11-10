import React from "react";
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
export const Tab_DetailAduana = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Clave aduana</TableHead>

          <TableHead>Aduana</TableHead>

          <TableHead>Detalle</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <Badge className="bg-[#691C32] hover:bg-[#521527] text-white p-2 rounded-lg">
              080
            </Badge>
          </TableCell>
          <TableCell>COATZACOALCOS</TableCell>
          <TableCell>
            <Button
              size="icon"
              className="bg-[#691C32] hover:bg-[#521527] text-white p-2 rounded-lg"
            >
              <ChevronDown />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Tab_DetailAduana;

{
  /* <table className="w-full text-left border-collapse">
             
                <tbody className="text-xs divide-y divide-gray-100 bg-white">
                  {aduanasData.map((item) => (
                    <React.Fragment key={item.id}>
                      <tr className="hover:bg-gray-50/80 transition">
                        <td className="p-3.5">
                          <span className="inline-flex items-center justify-center bg-gray-500 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-2xs">
                            {item.clave}
                          </span>
                        </td>
                        <td className="p-3.5 font-semibold text-gray-800">{item.aduana}</td>
                        <td className="p-3.5 text-center">
                          <button
                            onClick={() => setExpandedAduanaId(expandedAduanaId === item.id ? null : item.id)}
                            className="bg-[#691C32] hover:bg-[#521527] text-white p-2 rounded-lg transition shadow-xs cursor-pointer inline-flex items-center justify-center"
                            title="Ver detalle"
                          >
                            <ChevronDown size={14} className={`transform transition-transform ${expandedAduanaId === item.id ? 'rotate-180' : ''}`} />
                          </button>
                        </td>
                      </tr>

                     
                    </React.Fragment>
                  ))}
                </tbody>
              </table> */
}
