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

  return (
    <div className="space-y-4">
      {/* 1. Quitamos los bordes generales y usamos space-y o dejamos que el margen inferior de cada item actúe */}
      <Accordion type="multiple" defaultValue={["item-2"]} className="w-full">
        
        {/* Ítem 1: Avisos */}
        <AccordionItem value="item-1" className="mb-3 rounded-2xl border border-gray-200 bg-white overflow-hidden last:mb-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer hover:no-underline">
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

        {/* Ítem 2: Aduanas */}
        <AccordionItem value="item-2" className="mb-3 rounded-2xl border border-gray-200 bg-white overflow-hidden last:mb-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer hover:no-underline">
            <div className="flex items-center gap-2">
              <Menu />
              <span>Aduanas</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-4 bg-gray-50/50">
            <Tab_DetailAduana />
          </AccordionContent>
        </AccordionItem>

        {/* Ítem 3: Retroalimentación */}
        <AccordionItem value="item-3" className="mb-3 rounded-2xl border border-gray-200 bg-white overflow-hidden last:mb-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer hover:no-underline">
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
