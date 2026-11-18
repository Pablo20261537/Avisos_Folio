import React,{useRef,useEffect} from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'; // ¡Importante! Los estilos por defecto
export const TextEditor = ({value,onChange,placeholder}) => {

    const editorContainerRef = useRef(null);
  const quillInstanceRef = useRef(null);


  useEffect(() => {
    // Asegurarnos de que el contenedor existe y Quill no se ha inicializado ya
    if (editorContainerRef.current && !quillInstanceRef.current) {
      
      // 1. Inicializamos Quill
      quillInstanceRef.current = new Quill(editorContainerRef.current, {
        theme: 'snow',
        placeholder: placeholder || '',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'], // Estilos básicos
            // ['blockquote', 'code-block'],
            // [{ header: 1 }, { header: 2 }],           // Encabezados
            [{ list: 'ordered' }, { list: 'bullet' }], // Listas
            // ['clean']                                  // Limpiar formato
          ]
        }
      });

      // 2. Si pasamos un valor inicial, lo establecemos
      if (value) {
        quillInstanceRef.current.root.innerHTML = value;
      }

      // 3. Escuchamos los cambios para enviárselos al componente padre
      quillInstanceRef.current.on('text-change', () => {
        if (onChange) {
          const htmlContent = quillInstanceRef.current.root.innerHTML;
          // Si el editor queda vacío, Quill deja un <p><br></p>, lo limpiamos si gustas
          const cleanContent = htmlContent === '<p><br></p>' ? '' : htmlContent;
          onChange(cleanContent);
        }
      });
    }
  }, []); // El array vacío asegura que solo se inicialice una vez al montar
  return (
<div className="quill-wrapper">
      {/* El div donde Quill montará el editor */}
      <div ref={editorContainerRef} style={{ minHeight: '180px', backgroundColor: '#fff' }} />
    </div>

  )
}

export default TextEditor