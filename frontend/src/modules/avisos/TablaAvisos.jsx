import React, { useState } from 'react';
import { FileText, Save, RefreshCw } from 'lucide-react';

export default function TablaAvisos({ token, onBack }) {
  // Datos simulados (Mock Data) para la visualización del módulo
  const [data] = useState([
    {
      id: 1,
      aviso_num: '3868',
      asunto: 'ATENCIÓN AVISO FOLIO / GUÍA AÉREA EXPORTACION',
      aduana: '5 ADUANAS',
      area_solicitante: 'CARGA AÉREO',
      fecha_solicitud: '2026-11-03 19:29',
      fecha_cierre: 'Pendiente',
      aprobacion: 'APROBADO',
      incidencia: 'Sin Incidencia'
    },
    {
      id: 2,
      aviso_num: '3865',
      asunto: 'EBN HAWKEL - SOLICITUD PARA LA ATENCIÓN DE BUQUE TANQUE',
      aduana: 'ALTAMIRA',
      area_solicitante: 'HIDROCARBUROS MARÍTIMO',
      fecha_solicitud: '2026-11-03 11:41',
      fecha_cierre: 'Pendiente',
      aprobacion: 'APROBADO',
      incidencia: 'Sin Incidencia'
    },
    {
      id: 3,
      aviso_num: '3863',
      asunto: 'HUNTEGAS - SOLICITUD DE INSPECCIÓN DE BUQUE TANQUE',
      aduana: 'ALTAMIRA',
      area_solicitante: 'HIDROCARBUROS MARÍTIMO',
      fecha_solicitud: '2026-11-03 10:51',
      fecha_cierre: 'Pendiente',
      aprobacion: 'APROBADO',
      incidencia: 'Sin Incidencia'
    },
    {
      id: 4,
      aviso_num: '3862',
      asunto: 'MONTE LEMA - SOLICITUD PARA LA ATENCION DE BUQUE TANQUE',
      aduana: 'SALINA CRUZ',
      area_solicitante: 'HIDROCARBUROS MARÍTIMO',
      fecha_solicitud: '2026-11-03 09:38',
      fecha_cierre: 'Pendiente',
      aprobacion: 'APROBADO',
      incidencia: 'Sin Incidencia'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filtrado dinámico en tiempo real
  const filteredData = data.filter(item => 
    item.aviso_num.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.asunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.aduana.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.area_solicitante.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Encabezado de la Vista */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-[#691C32]">Módulo de Avisos y Folios</h1>
        {onBack && (
          <button 
            onClick={onBack}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl text-xs font-bold transition cursor-pointer"
          >
            ← Regresar
          </button>
        )}
      </div>

      <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
        
        {/* Barra superior: Botón Nuevo Aviso y Buscador */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => alert('Aquí se abrirá el modal de Nuevo Aviso')}
            className="bg-[#691C32] text-white px-4 py-2.5 rounded-xl font-medium hover:bg-[#521527] transition shadow-xs flex items-center gap-2 cursor-pointer text-xs"
          >
            <span>+ Nuevo Aviso</span>
          </button>
          
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Buscar por aviso, asunto o aduana..."
            className="border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#691C32] w-80"
          />
        </div>

        {/* Contenedor Principal de la Tabla */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-xs">
          
          {/* BARRA DE ACCIONES SUPERIOR DE LA TABLA (Botones PDF, Guardar, Actualizar) */}
          <div className="bg-[#691C32] px-4 py-2 flex items-center justify-end gap-2 border-b border-[#521527]">
            <button 
              onClick={() => alert('Generando reporte PDF...')}
              className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
              title="Descargar PDF"
            >
              <FileText size={16} />
            </button>
            <button 
              onClick={() => alert('Datos guardados correctamente')}
              className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
              title="Guardar cambios"
            >
              <Save size={16} />
            </button>
            <button 
              onClick={() => alert('Actualizando tabla...')}
              className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition cursor-pointer"
              title="Actualizar registro"
            >
              <RefreshCw size={16} />
            </button>
          </div>

          {/* CONTENEDOR CON SCROLL VERTICAL */}
          <div className="max-h-[420px] overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#691C32] text-white text-[11px] uppercase tracking-wider sticky top-0 z-10">
                <tr>
                  <th className="p-3.5 border-b border-[#521527]">Aviso</th>
                  <th className="p-3.5 border-b border-[#521527] max-w-[220px]">Asunto</th>
                  <th className="p-3.5 border-b border-[#521527]">Aduana</th>
                  <th className="p-3.5 border-b border-[#521527]">Área Solicitante</th>
                  <th className="p-3.5 border-b border-[#521527]">Fecha Solicitud</th>
                  <th className="p-3.5 border-b border-[#521527]">Fecha Cierre</th>
                  <th className="p-3.5 border-b border-[#521527]">Aprobación</th>
                  <th className="p-3.5 border-b border-[#521527]">Incidencia</th>
                  <th className="p-3.5 border-b border-[#521527] text-center">Detalle</th>
                  <th className="p-3.5 border-b border-[#521527] text-center">Mensaje</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-gray-100 bg-white">
                {filteredData.length > 0 ? (
                  filteredData.map(row => (
                    <tr key={row.id} className="hover:bg-gray-50/80 transition">
                      <td className="p-3.5 font-semibold text-gray-900">{row.aviso_num}</td>
                      {/* ASUNTO RECORTADO (Trunca el texto largo visualmente y muestra tooltip al pasar el cursor) */}
                      <td className="p-3.5 text-gray-700 max-w-[220px] truncate" title={row.asunto}>
                        {row.asunto}
                      </td>
                      <td className="p-3.5 text-gray-700">{row.aduana}</td>
                      <td className="p-3.5 text-gray-700">{row.area_solicitante}</td>
                      <td className="p-3.5 text-gray-700">{row.fecha_solicitud}</td>
                      <td className="p-3.5 text-gray-700">{row.fecha_cierre}</td>
                      <td className="p-3.5 font-semibold text-[#0b3c29]">{row.aprobacion}</td>
                      <td className="p-3.5 text-gray-600">{row.incidencia}</td>
                      <td className="p-3.5 text-center">
                        <button 
                          onClick={() => alert(`Visualizando detalle del aviso ID: ${row.id}`)}
                          className="bg-[#0b3c29] text-white p-2 rounded hover:bg-[#07281b] transition shadow-sm cursor-pointer"
                          title="Ver Detalle"
                        >
                          🔍
                        </button>
                      </td>
                      <td className="p-3.5 text-center">
                        <button 
                          onClick={() => alert(`Abriendo mensajes del aviso ID: ${row.id}`)}
                          className="bg-[#0b3c29] text-white p-2 rounded hover:bg-[#07281b] transition shadow-sm cursor-pointer"
                          title="Mensaje"
                        >
                          ✉️
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="p-6 text-center text-gray-500">
                      No se encontraron registros coincidentes.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

        {/* Paginación y contador inferior */}
        <div className="flex justify-between items-center mt-4 text-xs text-gray-600 px-2">
          <div>
            Mostrando <span className="font-semibold">{filteredData.length}</span> de <span className="font-semibold">{data.length}</span> registros
          </div>
        </div>

      </div>
    </div>
  );
}