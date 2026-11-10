import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Paperclip,
  Menu,
  MessageSquare,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TextoAviso from "./TextoAviso";

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
        <AccordionItem value="item-1" className="border-b last:border-b-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer">
            <div className="flex items-center gap-2">
              <FileText />
              <span>Avisos</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-white text-gray-800 text-xs">
            {/* Tabla de Información Superior */}
            <div className="grid grid-cols-12 gap-y-4 gap-x-6 pb-6 text-xs">
              <div className="col-span-2 font-bold text-gray-900">N° Aviso</div>
              <div className="col-span-3 text-gray-700">3923</div>
              <div className="col-span-2 font-bold text-gray-900">Asunto</div>
              <div className="col-span-3 text-gray-700 font-medium">
                STOLT SAKURA - SOLICITUD DE INSPECCIÓN DE BUQUE TANQUE
              </div>
              <div className="col-span-1 font-bold text-gray-900">Estado</div>
              <div className="col-span-1 text-gray-700">Abierto</div>

              <div className="col-span-2 font-bold text-gray-900">Fecha de cierre</div>
              <div className="col-span-3 text-gray-700"></div>
              <div className="col-span-2 font-bold text-gray-900">Fecha de emisión</div>
              <div className="col-span-5 text-gray-700">09/11/2026 00:17</div>

              <div className="col-span-2 font-bold text-gray-900">Dependencia solicitante</div>
              <div className="col-span-3 text-gray-700 leading-tight">
                CENTRO DE PROCESAMIENTO ELECTRÓNICO DE DATOS
              </div>
              <div className="col-span-2 font-bold text-gray-900">Riesgo</div>
              <div className="col-span-5 text-gray-700">EVASIÓNFISCAL</div>

              <div className="col-span-2 font-bold text-gray-900">Insertar Incidencia</div>
              <div className="col-span-3 text-gray-700"></div>
              <div className="col-span-2 font-bold text-gray-900">Detalle de Incidencia</div>
              <div className="col-span-5 text-gray-700"></div>
            </div>

            {/* Navegación de Pestañas Internas */}
            <div className="border-b border-gray-200 mt-2 mb-4 flex gap-6">
              <button
                type="button"
                onClick={() => setActiveTab("aviso")}
                className={`flex items-center gap-2 pb-2 px-1 font-bold text-xs cursor-pointer border-b-2 transition-colors ${
                  activeTab === "aviso"
                    ? "border-[#691C32] text-[#691C32]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Menu className="w-4 h-4" />
                <span>Aviso</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("archivos")}
                className={`flex items-center gap-2 pb-2 px-1 font-bold text-xs cursor-pointer border-b-2 transition-colors ${
                  activeTab === "archivos"
                    ? "border-[#691C32] text-[#691C32]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Paperclip className="w-4 h-4" />
                <span>Archivos anexos</span>
              </button>
            </div>

            {/* Cuadro de Texto de Procedimientos */}
            {activeTab === "aviso" ? (
           <TextoAviso/> 
            ) : (
              <div className="bg-[#F4F4F5] p-5 rounded border border-gray-200 text-gray-500 italic text-center">
                No hay archivos anexos disponibles.
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b last:border-b-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white my-1 p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer">
            <div className="flex items-center gap-2">
              <Menu />
              <span>Aduanas</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b last:border-b-0">
          <AccordionTrigger className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer">
            <div className="flex items-center gap-2">
              <MessageSquare />
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