import React,{useState} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@base-ui/react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import CustomCombo from "./Combos";
import FileDropZone from "./FileDropZone";
import TextEditor from "@/components/TextEditor";

const data = ["data1", "data2", "data3", "data4", "data5"];

export const NuevoAviso = () => {
const[dependencia,setDependencia] = useState(null);
const [area,setArea] = useState(null);
const [tipoAduana, setTipoAduana] = useState(null);
const [aduana,setAduana] = useState(null);
const[tipoAlerta,setTipoAlerta] = useState(null);



const handleDependenciaChange = (valorSeleccionado) => {
    setDependencia(valorSeleccionado);
}

const handleAreaChange = (valorSeleccionado) => {
    setArea(valorSeleccionado);
}

const handleTipoAduanaChange = (valorSeleccionado) => {
    setTipoAduana(valorSeleccionado)
}

const handleAduanaChange = (valorSeleccionado) => {
    setAduana(valorSeleccionado)
}

const handleTipoAlertaChange = (valorSeleccionado) => {
    setTipoAlerta(valorSeleccionado)
}
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={<Button 
            className="bg-[#691C32] text-white px-4 py-2.5 rounded-xl font-medium hover:bg-[#521527] transition shadow-xs flex items-center gap-2 cursor-pointer text-xs"
           >NUEVO AVISO</Button>}
        />
        <DialogContent className={"sm:max-w-2xl"}>
          <DialogHeader>
            <DialogTitle className="pt-3">
              <Badge className="bg-gray-400 text-white text-xl py-4">
                Nuevo Aviso Folio
              </Badge>
            </DialogTitle>
          </DialogHeader>
        <div>
                   
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
            <CustomCombo data={data} placeholder={"Selecciona dependencial del solicitante"} value={dependencia} onValueChange={handleDependenciaChange}/>
            <CustomCombo data={data} placeholder={"Selecciona área del solicitante"} value={area} onValueChange={handleAreaChange}/>
            <CustomCombo data={data} placeholder={"Selecciona el usuario solicitante"} disabled={!area}/>
            <CustomCombo data={data} placeholder={"Selecciona tipo(s) de aduana"} value={tipoAduana} onValueChange={handleTipoAduanaChange} />
            <CustomCombo data={data} placeholder={"Selecciona la(s) Aduana(s)"} value={aduana} onValueChange={handleAduanaChange} disabled={!tipoAduana}/>
            <CustomCombo data={data} placeholder={"Selecciona el tipo(s) de alerta"} value={tipoAlerta} onValueChange={handleTipoAlertaChange} disabled={!tipoAduana}/>
            <CustomCombo data={data} placeholder={"Selecciona los usuarios de Aduana"} disabled={!aduana && !tipoAlerta}/>
            <CustomCombo data={data} placeholder={"Selecciona el tipo de evento"}/>
        </div>
            <Input name="name" defaultValue="" placeholder="Asunto" className=" w-full py-1 border-b-3 border-gray-400 outline-none"/>
        </div> 

        
        {/* <Textarea className="h-32" placeholder="Aqui deberia ir el editor de texto"/> */}
            <TextEditor/>

        <FileDropZone />

          <DialogFooter>
            {/* <DialogClose render={<Button variant="destructive">Cancel</Button>} /> */}
            <DialogClose
              render={<Button className="bg-red-500">Cancel</Button>}
            />

            <Button type="submit" className="bg-green-600">
              {" "}
              Enviar
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default NuevoAviso;
