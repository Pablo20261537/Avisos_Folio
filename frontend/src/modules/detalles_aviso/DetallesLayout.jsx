import React from 'react';
import AvisoAccordion from './components/AvisoAccordion';

export const DetallesLayout = ({ avisoId = "3836", onBack }) => {
  return (
    <div className="w-full space-y-6">
      
      {/* Encabezado superior idéntico a tu referencia */}
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
            <span className="bg-[#0b3c29] text-white px-2 py-0.5 rounded">SIA Avisos</span>
            <span>/</span>
            <span className="text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded">Detalle Avisos Folio</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Aviso {avisoId}</h1>
        </div>

        {onBack && (
          <button 
            onClick={onBack}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl text-xs font-bold transition cursor-pointer"
          >
            ← Regresar
          </button>
        )}
      </div>

      {/* Renderizado del componente de acordeón */}
      <AvisoAccordion avisoId={avisoId} />

    </div>
  );
};

export default DetallesLayout;