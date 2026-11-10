import React, { useState } from "react";
import {
  FileText,
  Menu ,MessageSquare 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { DetailsAviso } from "./DetailsAviso";
import TabAvisos from "./TabAvisos";
export default function AvisoAccordion({ avisoId = "3836" }) {
  // Estados para controlar los acordeones principales
  const [openSection, setOpenSection] = useState("aviso"); // 'aviso', 'aduanas', 'retroalimentacion'

  // Estado para las pestañas internas de la sección Aviso
  const [activeTab, setActiveTab] = useState("aviso"); // 'aviso', 'archivos'

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-4">
      <Accordion defaultValue={["item-1"]} className=" rounded-lg border-x border-y-1">
        <AccordionItem value="item-1" className="border-b  last:border-b-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white p-4  flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer">
            <div className="flex items-center gap-2">
              <FileText  />
              <span>Avisos</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>

          <DetailsAviso/>
          <TabAvisos/>

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b last:border-b-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white my-1 p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer">
               <div className="flex items-center gap-2">
              <Menu  />
              <span>Aduanas</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>{" "}
        <AccordionItem value="item-3" className="border-b  last:border-b-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer">
               <div className="flex items-center gap-2">
              <MessageSquare/>
              <span>Retroalimentacion de aduanas</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
     
    </div>
  );
}
