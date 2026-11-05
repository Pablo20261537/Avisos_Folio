import React, {useState,useRef} from 'react'
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UploadCloud,FileText,X } from 'lucide-react';

export const FileDropZone = () => {
const [file,setFile] = useState(null);
const [isDragging, setIsDragging] = useState(false);
const fileInputRef = useRef(null);

//manejar cuando el archivo cae en la zona
const handleDrop = (e) =>{
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0){
        setFile(e.dataTransfer.files[0]);
    }
};

//Manejar la seleccion tradicional por el boton/input
const handleFileChange = (e) =>{
    if(e.target.files && e.target.files.length > 0){
        setFile(e.target.files[0]);
    }
};

//Abrir el selector de archivos al hacer click en la tarjeta
const onCardClick = () =>{
    fileInputRef.current?.click();
}

  return (
    // <div className='max-w-md mx-auto mt-3'>
    <div className='w-full mx-auto mt-3'>

        <input type='file' ref={fileInputRef} onChange={handleFileChange} className='hidden' 
        // Puedes agregar accept=".pdf,.png,.jpg" si quieres filtrar tipos
        />

       <Card
        onClick={onCardClick}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`border-2 border-dashed p-8 text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-3 ${
          isDragging 
            ? 'border-primary bg-primary/5' 
            : 'border-muted-foreground/25 hover:border-primary/50'
        }`}
      >
        {file ? (
          <div className="flex items-center gap-3 bg-secondary/50 p-3 rounded-lg w-full justify-between" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 overflow-hidden">
              <FileText className="h-6 w-6 text-primary shrink-0" />
              <span className="text-sm font-medium truncate">{file.name}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-destructive"
              onClick={() => setFile(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <UploadCloud className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">
                Arrastra tu archivo aquí o <span className="text-primary underline">búscalo</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Soporta PDF, imágenes, documentos, etc.
              </p>
            </div>
          </>
        )}
      </Card>
        
    </div>
  )
}

export default FileDropZone;