import React, { useState } from 'react';
import NuevoAviso from './components/NuevoAviso';
import { FileText, Save, RefreshCw } from 'lucide-react';

export default function TablaAvisos({ token, onBack }) {
  // Datos simulados (Mock Data) para visualizar la interfaz sin errores de compilación
  const [data] = useState([
    {
      id: 1,
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
      id: 2,
      aviso_num: '3862',
      asunto: 'MONTE LEMA - SOLICITUD PARA LA ATENCIÓN DE BUQUE TANQUE',
      aduana: 'SALINA CRUZ',
      area_solicitante: 'HIDROCARBUROS MARÍTIMO',
      fecha_solicitud: '2026-11-03 09:38',
      fecha_cierre: 'Pendiente',
      aprobacion: 'APROBADO',
      incidencia: 'Sin Incidencia'
    },
    {
      id: 3,
      aviso_num: '3861',
      asunto: 'JASMINE TRADER - SOLICITUD DE INSPECCIÓN DE BUQUE TANQUE',
      aduana: 'ALTAMIRA',
      area_solicitante: 'HIDROCARBUROS MARÍTIMO',
      fecha_solicitud: '2026-11-03 03:48',
      fecha_cierre: 'Pendiente',
      aprobacion: 'APROBADO',
      incidencia: 'Sin Incidencia'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  
  // Estado para controlar qué aviso tiene el chat abierto
  const [selectedChatAviso, setSelectedChatAviso] = useState(null);
  
  // Estado para los mensajes del chat activo
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'Sistema', text: 'Bienvenido al hilo de atención del aviso.', time: '10:52 AM', isMe: false },
    { id: 2, sender: 'Usuario', text: 'Documentación enviada para revisión.', time: '10:55 AM', isMe: true }
  ]);
  const [newMessage, setNewMessage] = useState('');

  // Manejador para enviar un nuevo mensaje en el chat
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const msg = {
      id: Date.now(),
      sender: 'Yo',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setChatMessages([...chatMessages, msg]);
    setNewMessage('');
  };

  // Filtrado en tiempo real con el buscador
  const filteredData = data.filter(item =>
    item.aviso_num.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.asunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.aduana.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.area_solicitante.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full relative">
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
          <NuevoAviso />
          
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Buscar por aviso, asunto o aduana..."
            className="border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#691C32] w-80"
          />
        </div>

        {/* Contenedor Principal de la Tabla con la Franja de Acciones Institucional */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-xs">
          
          {/* BARRA DE ACCIONES SUPERIOR DE LA TABLA (PDF, Guardar, Actualizar) */}
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
                          onClick={() => setSelectedChatAviso(row)}
                          className="bg-[#0b3c29] text-white p-2 rounded hover:bg-[#07281b] transition shadow-sm cursor-pointer"
                          title="Abrir Chat"
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

        {/* Paginación visual estática */}
        <div className="flex justify-between items-center mt-4 text-xs text-gray-600 px-2">
          <div>
            Mostrando <span className="font-semibold">{filteredData.length}</span> de <span className="font-semibold">{data.length}</span> registros
          </div>
        </div>
      </div>

      {/* Modal de Chat Centrado */}
      {selectedChatAviso && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center items-center p-4 z-50">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-200 flex flex-col h-[520px] max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95">
            {/* Header del Chat con Aduana incluida */}
            <div className="bg-[#691C32] text-white p-4 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm">Chat - Aviso #{selectedChatAviso.aviso_num}</h3>
                  <span className="bg-[#521527] text-white text-[10px] px-2 py-0.5 rounded-md font-semibold tracking-wide">
                    {selectedChatAviso.aduana}
                  </span>
                </div>
                <p className="text-[11px] text-gray-200 truncate max-w-[280px] mt-0.5">{selectedChatAviso.asunto}</p>
              </div>
              <button
                onClick={() => setSelectedChatAviso(null)}
                className="text-white hover:bg-[#521527] rounded-lg p-1.5 transition text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Cuerpo de Mensajes */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50 text-xs">
              {chatMessages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}
                >
                  <span className="text-[10px] text-gray-400 mb-0.5">{msg.sender}</span>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2 shadow-xs ${
                      msg.isMe
                        ? 'bg-[#691C32] text-white rounded-br-none'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className={`text-[9px] block text-right mt-1 ${msg.isMe ? 'text-gray-200' : 'text-gray-400'}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input para enviar mensaje */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#691C32]"
              />
              <button
                type="submit"
                className="bg-[#0b3c29] hover:bg-[#07281b] text-white px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}