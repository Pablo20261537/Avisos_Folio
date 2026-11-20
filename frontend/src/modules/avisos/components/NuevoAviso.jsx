import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@base-ui/react";
import { Badge } from "@/components/ui/badge";
import CustomCombo from "./Combos";
import FileDropZone from "./FileDropZone";
import TextEditor from "@/components/TextEditor";
import machote from "../../detalles_aviso/components/Machote.json";

const INITIAL_ASUNTO = "Guia area de tipo: ";

const data = [
  { id: "1", nombre: "data1" },
  { id: "2", nombre: "data2" },
  { id: "3", nombre: "data3" },
];

export const NuevoAviso = () => {
  const [open, setOpen] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const [dependenciaList, setDependenciaList] = useState(null);
  const [dependencia, setDependencia] = useState(null);

  const [area, setArea] = useState(null);
  const [areaList, setAreaList] = useState(null);

  const [usuarioS, setUsuarioS] = useState(null);
  const [usuarioSList, setUsuarioSList] = useState(null);

  const [tipoAduana, setTipoAduana] = useState(null);
  const [tipoAduanaList, setTipoAduanaList] = useState(null);

  const [tipoEvento, setTipoEvento] = useState(null);
  const [tipoEventoList, setTipoEventoList] = useState(null);

  const [aduana, setAduana] = useState(null);
  const [aduanaList, setAduanaList] = useState(null);

  const [tipoAlerta, setTipoAlerta] = useState(null);
  const [tipoAlertaList, setTipoAlertaList] = useState(null);

  const [asunto, setAsunto] = useState(INITIAL_ASUNTO);

  useEffect(() => {
    fetch("http://localhost:8000/api/avisos/")
      .then((res) => res.json())
      .then((dataR) => {
        setDependenciaList(dataR.dependencias);
        setAreaList(dataR.areas);
        setTipoAduanaList(dataR.tipo_aduana);
        setTipoEventoList(dataR.eventos);
      });
  }, []);

  const resetForm = () => {
    setDependencia(null);
    setArea(null);
    setUsuarioS(null);
    setUsuarioSList(null);

    setTipoAduana(null);
    setAduana(null);
    setAduanaList(null);

    setTipoAlerta(null);
    setTipoAlertaList(null);

    setTipoEvento(null);
    setAsunto(INITIAL_ASUNTO);

    setResetKey((prev) => prev + 1);
  };

  const handleResetAndClose = () => {
    resetForm();
    setOpen(false);
  };

  // Bloquea cierre por clic fuera o Escape; permite cierre desde la X
  const handleOpenChange = (nextOpen, eventDetails) => {
    if (!nextOpen) {
      const reason = eventDetails?.reason;
      if (reason === "outside-press" || reason === "escape-key") {
        return;
      }
      resetForm();
    }
    setOpen(nextOpen);
  };

  const handleDependenciaChange = (valorSeleccionado) => {
    setDependencia(valorSeleccionado);
  };

  const handleAreaChange = (valorSeleccionado) => {
    setArea(valorSeleccionado);
    setUsuarioS(null);
    fetch(`http://localhost:8000/api/avisos/usuarios_area/${valorSeleccionado}/`)
      .then((res) => res.json())
      .then((dataU) => {
        setUsuarioSList(dataU);
      });
  };

  const handleTipoAduanaChange = (valorSeleccionado) => {
    setTipoAduana(valorSeleccionado);
    setAduana(null);
    setTipoAlerta(null);
    setTipoAlertaList(null);
    fetch(`http://localhost:8000/api/avisos/aduanas_x_tipo/${valorSeleccionado}/`)
      .then((res) => res.json())
      .then((dataAd_T) => {
        setAduanaList(dataAd_T);
      });
  };

  const handleTipoEventoChange = (valorSeleccionado) => {
    setTipoEvento(valorSeleccionado);
  };

  const handleAduanaChange = (valorSeleccionado) => {
    setAduana(valorSeleccionado);
    setTipoAlerta(null);
    fetch(`http://localhost:8000/api/avisos/alertas_aduana/${valorSeleccionado}/`)
      .then((res) => res.json())
      .then((dataAL_d) => {
        setTipoAlertaList(dataAL_d);
      });
  };

  const handleTipoAlertaChange = (valorSeleccionado) => {
    setTipoAlerta(valorSeleccionado);
  };

  const handleUsuarioSChange = (valorSeleccionado) => {
    setUsuarioS(valorSeleccionado);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí envías los datos al backend...
    handleResetAndClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button className="bg-[#691C32] text-white px-4 py-2.5 rounded-xl font-medium hover:bg-[#521527] transition shadow-xs flex items-center gap-2 cursor-pointer text-xs">
            NUEVO AVISO
          </Button>
        }
      />

      <DialogContent
        className="sm:max-w-2xl"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="pt-3">
              <Badge className="bg-gray-400 text-white text-xl py-4">
                Nuevo Aviso Folio
              </Badge>
            </DialogTitle>
          </DialogHeader>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <CustomCombo
                data={Array.isArray(dependenciaList) ? dependenciaList : []}
                placeholder="Selecciona dependencial del solicitante"
                value={dependencia}
                onValueChange={handleDependenciaChange}
                itemValueKey="id_dependencia"
                itemLabelKey="nombre"
              />

              <CustomCombo
                data={Array.isArray(areaList) ? areaList : []}
                placeholder="Selecciona área del solicitante"
                value={area}
                onValueChange={handleAreaChange}
                itemValueKey="id_area"
                itemLabelKey="nombre"
              />

              <CustomCombo
                data={Array.isArray(usuarioSList) ? usuarioSList : []}
                placeholder="Selecciona el usuario solicitante"
                disabled={!area}
                value={usuarioS}
                onValueChange={handleUsuarioSChange}
                itemValueKey="id_usuario"
                itemLabelKey="nombre_completo"
              />

              <CustomCombo
                data={Array.isArray(tipoAduanaList) ? tipoAduanaList : []}
                placeholder="Selecciona tipo(s) de aduana"
                value={tipoAduana}
                onValueChange={handleTipoAduanaChange}
                itemValueKey="id_tipo_aduana"
                itemLabelKey="tipo_aduana"
              />

              <CustomCombo
                data={Array.isArray(aduanaList) ? aduanaList : []}
                placeholder="Selecciona la(s) Aduana(s)"
                value={aduana}
                onValueChange={handleAduanaChange}
                itemValueKey="clave_aduana_3"
                itemLabelKey="nombre_corto"
                disabled={!tipoAduana}
              />

              <CustomCombo
                data={Array.isArray(tipoAlertaList) ? tipoAlertaList : []}
                placeholder="Selecciona el tipo(s) de alerta"
                value={tipoAlerta}
                onValueChange={handleTipoAlertaChange}
                itemValueKey="id_relacion"
                itemLabelKey="tipo_alerta"
                disabled={!tipoAduana}
              />

              <CustomCombo
                data={data}
                placeholder="Selecciona los usuarios de Aduana"
                disabled={!aduana && !tipoAlerta}
              />

              <CustomCombo
                data={Array.isArray(tipoEventoList) ? tipoEventoList : []}
                placeholder="Selecciona el tipo de evento"
                value={tipoEvento}
                onValueChange={handleTipoEventoChange}
                itemValueKey="id_tipo_evento"
                itemLabelKey="tipo_evento"
              />
            </div>

            <Input
              name="name"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              placeholder="Asunto"
              className="w-full py-1 border-b-3 border-gray-400 outline-none"
            />
          </div>

          <TextEditor key={`editor-${resetKey}`} value={machote.contenidoHtml} />
          <br />
          <FileDropZone key={`dropzone-${resetKey}`} />

          <DialogFooter>
            <Button
              type="button"
              onClick={handleResetAndClose}
              className="bg-red-500"
            >
              Cancel
            </Button>

            <Button type="submit" className="bg-green-600">
              Enviar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NuevoAviso;