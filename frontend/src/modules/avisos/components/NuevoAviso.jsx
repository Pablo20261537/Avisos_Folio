import React,{useState,useEffect} from "react";
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
import machote from "../../detalles_aviso/components/Machote.json"
const data = [
  { id: "1", nombre: "data1" },
  { id: "2", nombre: "data2" },
  { id: "3", nombre: "data3" },
];
export const NuevoAviso = () => {
const[dependenciaList,setDependenciaList] = useState(null);
const[dependencia,setDependencia] = useState(null);

const [area,setArea] = useState(null);
const [areaList,setAreaList] = useState(null);

const [usuarioS,setUsuarioS] = useState(null);
const [usuarioSList,setUsuarioSList] = useState(null);


const [tipoAduana, setTipoAduana] = useState(null);
const [tipoAduanaList, setTipoAduanaList] = useState(null);


const[tipoEvento,setTipoEvento] = useState(null);
const[tipoEventoList,setTipoEventoList] = useState(null);


const [aduana,setAduana] = useState(null);
const[tipoAlerta,setTipoAlerta] = useState(null);

const [avisos,setAvisos] = useState(null);

  useEffect(() => {
  fetch('http://localhost:8000/api/avisos/', {
    // headers: {
    //   'Authorization': `Token ${token}` // Usando el token que guardó en el login
    // }
  })
  .then(res => res.json())
  .then(dataR => {
    // React usa los datos a su antojo
    console.log("Hi-->", dataR)
    setDependenciaList(dataR.dependencias);
    setAreaList(dataR.areas);
    setTipoAduanaList(dataR.tipo_aduana);
    setTipoEventoList(dataR.eventos);

  });
}, []);

    // console.log(dependencia);

const handleDependenciaChange = (valorSeleccionado) => {
  // console.log("Lo que seleccionó el usuario:", valorSeleccionado);
    setDependencia(valorSeleccionado);
}

const handleAreaChange = (valorSeleccionado) => {
    setArea(valorSeleccionado);
     fetch(`http://localhost:8000/api/avisos/usuarios_area/${valorSeleccionado}/`,{
       })
      .then(res => res.json())
      .then(dataU => {
        console.log("Hello There General Kenobi --> ", dataU)
        setUsuarioSList(dataU)
      })
    

    // console.log("Valor -_> ", valorSeleccionado)
}

const handleTipoAduanaChange = (valorSeleccionado) => {
    setTipoAduana(valorSeleccionado)
}

const handleTipoEventoChange = (valorSeleccionado) => {
    setTipoEvento(valorSeleccionado)
}

const handleAduanaChange = (valorSeleccionado) => {
    setAduana(valorSeleccionado)
}

const handleTipoAlertaChange = (valorSeleccionado) => {
    setTipoAlerta(valorSeleccionado)
}

const handleUsuarioSChange = (valorSeleccionado) => {
    setUsuarioS(valorSeleccionado)
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
            <CustomCombo data={Array.isArray(dependenciaList) ? dependenciaList : []} placeholder={"Selecciona dependencial del solicitante"} value={dependencia}
             onValueChange={(itemsSeleccionado) => {
              handleDependenciaChange(itemsSeleccionado)
             }} itemValueKey="id_dependencia" itemLabelKey="nombre"/>

            <CustomCombo  data={Array.isArray(areaList) ? areaList : []} placeholder={"Selecciona área del solicitante"} value={area} 
              onValueChange={(itemsSeleccionado) => {
              handleAreaChange(itemsSeleccionado)
             }} itemValueKey="id_area" itemLabelKey="nombre"/>

            <CustomCombo data={Array.isArray(usuarioSList) ? usuarioSList : []} placeholder={"Selecciona el usuario solicitante"} disabled={!area}
            value={usuarioS} onValueChange={(itemsSeleccionado) => {
              handleUsuarioSChange(itemsSeleccionado)
            }} itemValueKey="id_usuario" itemLabelKey="nombres"
            />

            <CustomCombo  data={Array.isArray(tipoAduanaList) ? tipoAduanaList : []} placeholder={"Selecciona tipo(s) de aduana"} value={tipoAduana} 
              onValueChange={(itemsSeleccionado) => {
              handleTipoAduanaChange(itemsSeleccionado)
             }} itemValueKey="id_tipo_aduana" itemLabelKey="tipo_aduana"/>

            <CustomCombo data={data} placeholder={"Selecciona la(s) Aduana(s)"} value={aduana} onValueChange={handleAduanaChange} disabled={!tipoAduana}/>

            <CustomCombo data={data} placeholder={"Selecciona el tipo(s) de alerta"} value={tipoAlerta} onValueChange={handleTipoAlertaChange} disabled={!tipoAduana}/>

            <CustomCombo data={data} placeholder={"Selecciona los usuarios de Aduana"} disabled={!aduana && !tipoAlerta}/>

            <CustomCombo  data={Array.isArray(tipoEventoList) ? tipoEventoList : []} placeholder={"Selecciona el tipo de evento"} value={tipoEvento}
              onValueChange={(itemsSeleccionado) => {
              handleTipoEventoChange(itemsSeleccionado)
             }} itemValueKey="id_tipo_evento" itemLabelKey="tipo_evento"/>
             
        </div>
            <Input name="name" defaultValue="Guia area de tipo: " placeholder="Asunto" className=" w-full py-1 border-b-3 border-gray-400 outline-none"/>
        </div> 

        
        {/* <Textarea className="h-32" placeholder="Aqui deberia ir el editor de texto"/> */}
            <TextEditor value={machote.contenidoHtml}/>
            <br></br>
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