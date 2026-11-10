import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellPlus, UsersRoundCollaboration, X } from "lucide-react";

export const DetailsAviso = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Fila 1: Una Card que contiene 4 elementos */}
      <Card>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-base">
            <div className="p-4 rounded-lg flex items-center gap-8">
              <span className="font-bold">N° Aviso</span>
              <span className="text-black">3232</span>
            </div>

            <div className="bg-muted p-4 rounded-lg flex items-center gap-8">
              <span className="font-bold">Asunto</span>
              <span className="text-black">	TAEBAEK- SOLICITUD DE INSPECCION DE BUQUE TANQUE</span>
            </div>

            <div className="bg-muted p-4 rounded-lg flex items-center gap-8">
              <span className="font-bold">Fecha de emisión</span>
              <span className="text-black">06/11/2026 01:19</span>
            </div>

            <div className="bg-muted p-4 rounded-lg flex items-center gap-8">
              <span className="font-bold">Estado</span>
              <span className="text-black">Abierto</span>

              <Button className="bg-emerald-800 text-base ">
                <X
                  data-icon="inline-start"
                  className="text-red stroke-[2.5] w-8 h-10"
                />
                Cerrar Aviso
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-base">
            <div className="p-4 rounded-lg flex items-center gap-8">
              <span className="font-bold">Fecha de cierre</span>
              <span className="text-black"></span>
            </div>

            <div className="bg-muted p-4 rounded-lg flex items-center gap-8">
              <span className="font-bold">Área solicitante</span>
              <span className="text-black">HIDROCARBUROS MARITIMO</span>
            </div>

            {/* El último div ahora abarca las 2 columnas restantes en pantallas grandes */}
            <div className="bg-muted p-4 rounded-lg flex items-center gap-4 sm:col-span-2">
              <span className="font-bold">Usuario solicitante</span>

              <span className="text-black">
                CLAUDIA IVETH BERMUDEZ VICENCIO
              </span>
              <Button size="icon" className="bg-emerald-800 text-base ">
                <UsersRoundCollaboration
                  data-icon="inline-start"
                  className="text-white stroke-[2.5] w-10 h-10 "
                />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fila 3: Una Card que contiene 2 elementos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Fila 3 (2 elementos)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-base">
            <div className="p-4 rounded-lg flex items-center gap-8 ">
              <span className="font-bold">Dependencia solicitante</span>
              <span className="text-black">
                CENTRO DE PROCESAMIENTO ELECTRONICO DE DATOS
              </span>
            </div>
            <div className="p-4 rounded-lg flex items-center gap-8 sm:col-span-3">
              <span className="font-bold">Riesgo</span>
              <span className="text-black">EVASION FISCAL</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fila 4: Una Card que contiene 2 elementos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            {/* Fila 3 (2 elementos) */}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg flex items-center gap-8 h-5">
              <Button className="bg-green-600 text-base ">
                <BellPlus
                  data-icon="inline-start"
                  className="text-red stroke-[2.5] w-8 h-10"
                />{" "}
                Insertar incidencia
              </Button>
            </div>
            <div className=" p-4 rounded-lg flex items-center gap-8 sm:col-span-3 h-5">
              <span className="text-black font-bold">
                Detalle de incidencia
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsAviso;
