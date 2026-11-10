import React, { useState } from "react";
import { FileText, Menu, MessageSquare, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TextoAviso from "./TextoAviso";

import { DetailsAviso } from "./DetailsAviso";
import TabAvisos from "./TabAvisos";
import Tab_DetailAduana from "./Tab_DetailAduana";

export default function AvisoAccordion({ avisoId = "3836" }) {
  // Estado para controlar el detalle expandido dentro de la tabla de Aduanas
  const [expandedAduanaId, setExpandedAduanaId] = useState(null);

  // Datos simulados de aduanas
  // const aduanasData = [
  //   {
  //     id: 1,
  //     clave: '080',
  //     aduana: 'COATZACOALCOS',
  //     seccion: 'Sección Aduanera del Puerto',
  //     tipoOperacion: 'Marítimo / Hidrocarburos',
  //     observaciones: 'Sin incidencias registradas en plataforma.'
  //   }
  // ];

  return (
    <div className="space-y-4">
      <Accordion
        defaultValue={["item-1"]}
        className=" rounded-lg border-x border-y-1"
      >
        <AccordionItem value="item-1" className="border-b last:border-b-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer">
            <div className="flex items-center gap-2">
              <FileText />
              <span>Avisos</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <DetailsAviso />

            <TabAvisos />
          </AccordionContent>
        </AccordionItem>

        {/* Ítem 2: Aduanas (Con la tabla limpia de Shadcn) */}
        <AccordionItem value="item-2" className="border-b last:border-b-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white my-1 p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer">
            <div className="flex items-center gap-2">
              <Menu />
              <span>Aduanas</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-4 bg-gray-50/50">
            <Tab_DetailAduana />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b last:border-b-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer">
            <div className="flex items-center gap-2">
              <MessageSquare />
              <span>Retroalimentacion de aduanas</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-4 text-xs text-gray-700">
            Historial de notas informativas.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
