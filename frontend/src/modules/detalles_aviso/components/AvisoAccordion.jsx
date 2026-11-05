import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Paperclip, Download } from 'lucide-react';

export default function AvisoAccordion({ avisoId = "3836" }) {
  // Estados para controlar los acordeones principales
  const [openSection, setOpenSection] = useState('aviso'); // 'aviso', 'aduanas', 'retroalimentacion'
  
  // Estado para las pestañas internas de la sección Aviso
  const [activeTab, setActiveTab] = useState('aviso'); // 'aviso', 'archivos'

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-4">
      
      {/* ================= 1. ACORDEÓN PRINCIPAL: AVISO ================= */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
        
        {/* Cabecera del Acordeón */}
        <button
          onClick={() => toggleSection('aviso')}
          className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <FileText size={16} />
            <span>Aviso</span>
          </div>
          {openSection === 'aviso' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Contenido del Acordeón */}
        {openSection === 'aviso' && (
          <div className="p-6 space-y-6">
            
            {/* Pestañas Internas (Aviso / Archivos anexos) */}
            <div className="flex border-b border-gray-200 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('aviso')}
                className={`pb-3 px-4 flex items-center gap-2 border-b-2 transition cursor-pointer ${
                  activeTab === 'aviso'
                    ? 'border-[#691C32] text-[#691C32]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FileText size={14} />
                <span>Aviso</span>
              </button>
              <button
                onClick={() => setActiveTab('archivos')}
                className={`pb-3 px-4 flex items-center gap-2 border-b-2 transition cursor-pointer ${
                  activeTab === 'archivos'
                    ? 'border-[#691C32] text-[#691C32]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Paperclip size={14} />
                <span>Archivos anexos</span>
              </button>
            </div>

            {/* Contenido de la pestaña: Aviso */}
            {activeTab === 'aviso' && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4 text-xs text-gray-700">
                
                {/* Fila 1 */}
                <div>
                  <span className="font-bold text-gray-900 block mb-1">N° Aviso</span>
                  <p className="text-gray-600">{avisoId}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="font-bold text-gray-900 block mb-1">Asunto</span>
                  <p className="text-gray-600 uppercase">LEGACY - SOLICITUD DE INSPECCIÓN DE BUQUE TANQUE</p>
                </div>
                <div>
                  <span className="font-bold text-gray-900 block mb-1">Fecha de emisión</span>
                  <p className="text-gray-600">30/10/2026 21:42</p>
                </div>

                {/* Fila 2 */}
                <div>
                  <span className="font-bold text-gray-900 block mb-1">Estado</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">Abierto</span>
                    <button 
                      onClick={() => alert('Cerrando aviso...')}
                      className="bg-black hover:bg-gray-800 text-white text-[10px] px-2.5 py-1 rounded-md font-semibold transition cursor-pointer flex items-center gap-1 shadow-xs"
                    >
                      ✕ Cerrar aviso
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <span className="font-bold text-gray-900 block mb-1">Área solicitante</span>
                  <p className="text-gray-600">HIDROCARBUROS MARÍTIMO</p>
                </div>
                <div>
                  <span className="font-bold text-gray-900 block mb-1">Usuario solicitante</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">MIRNA GUADALUPE BARRIOS SERVIN</span>
                    <span className="p-1 bg-gray-100 rounded text-gray-700 cursor-pointer" title="Ver detalles del usuario">📥</span>
                  </div>
                </div>

                {/* Fila 3 */}
                <div className="md:col-span-2">
                  <span className="font-bold text-gray-900 block mb-1">Dependencia solicitante</span>
                  <p className="text-gray-600 uppercase">AGENCIA NACIONAL DE ADUANAS DE MÉXICO</p>
                </div>
                <div className="md:col-span-2">
                  <span className="font-bold text-gray-900 block mb-1">Riesgo</span>
                  <p className="text-gray-600 font-semibold text-red-700">EVASIÓN FISCAL</p>
                </div>

                {/* Fila 4 */}
                <div className="md:col-span-2">
                  <span className="font-bold text-gray-900 block mb-1">Insertar Incidencia</span>
                  <button 
                    onClick={() => alert('Abriendo modal para Insertar Incidencia...')}
                    className="bg-[#0b3c29] hover:bg-[#07281b] text-white text-xs px-3.5 py-2 rounded-xl font-medium transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                  >
                    <span>🛡️ Insertar Incidencia</span>
                  </button>
                </div>
                <div className="md:col-span-2">
                  <span className="font-bold text-gray-900 block mb-1">Detalle de Incidencia</span>
                  <p className="text-gray-400 italic">Sin incidencias registradas</p>
                </div>

              </div>
            )}

            {/* Contenido de la pestaña: Archivos anexos */}
            {activeTab === 'archivos' && (
              <div className="space-y-4">
                <button 
                  onClick={() => alert('Abriendo selector de archivos...')}
                  className="bg-[#9c824c] hover:bg-[#826c3e] text-white text-xs px-4 py-2.5 rounded-xl font-bold transition cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <span>+ Agregar archivo</span>
                </button>
                
                <div className="border border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-500 text-xs">
                  No hay archivos anexos cargados en este aviso.
                </div>
              </div>
            )}

          </div>
        )}
      </div>

      {/* ================= 2. ACORDEÓN PRINCIPAL: ADUANAS ================= */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
        <button
          onClick={() => toggleSection('aduanas')}
          className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer"
        >
          <span>Aduanas</span>
          {openSection === 'aduanas' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {openSection === 'aduanas' && (
          <div className="p-6 text-xs text-gray-600">
            Información detallada de las aduanas vinculadas al aviso.
          </div>
        )}
      </div>

      {/* ================= 3. ACORDEÓN PRINCIPAL: RETROALIMENTACIÓN ================= */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
        <button
          onClick={() => toggleSection('retroalimentacion')}
          className="w-full bg-[#691C32] text-white p-4 flex justify-between items-center font-bold text-xs uppercase tracking-wider cursor-pointer"
        >
          <span>Retroalimentación de Aduana</span>
          {openSection === 'retroalimentacion' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {openSection === 'retroalimentacion' && (
          <div className="p-6 text-xs text-gray-600">
            Historial de retroalimentación y notas informativas.
          </div>
        )}
      </div>

    </div>
  );
}