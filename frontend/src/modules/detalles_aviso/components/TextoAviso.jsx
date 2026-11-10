import React from 'react'

export const TextoAviso = () => {
    return (
        <div className="bg-[#F4F4F5] p-5 rounded border border-gray-200 text-gray-700 space-y-3 leading-relaxed text-[#4A4A4A]">
            <p className="font-bold text-gray-800">
                Procedimiento para la atención de solicitudes de inspección de buques tanque.
            </p>
            <p>
                <span className="font-bold">A.</span> Coordinación interinstitucional previa (Agencia Nacional de Aduanas de México (ANAM) – Secretaría de Marina (SEMAR) – Petróleos Mexicanos (PEMEX), las demás que se requieran).
            </p>
            <p>
                <span className="font-bold">B.</span> La Aduana deberá coordinarse con las autoridades competentes para verificar el estatus del buque, en particular con la SEMAR, a través de la ASIPONA y/o la UNAPROP.
            </p>
            <p>
                <span className="font-bold">C.</span> Monitoreo de arribo.<br />
                En caso de que el buque no haya arribado al puerto, se deberá mantener un monitoreo continúo de su posición y estatus hasta su llegada a puerto.
            </p>
            <p>
                <span className="font-bold">D.</span> Inspección a bordo.<br />
                Una vez confirmado el arribo y atraque, se solicita que, en la medida de lo posible, se coordine con la Secretaría de Marina la inspección a bordo del buque, previo al inicio de las operaciones de descarga conforme a lo siguiente:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mt-2">
                <li>
                    Requerir al capitán del buque la documentación que acredite los permisos de transporte de carga, conocimiento de embarque (Bill of Lading – BL), hoja de programa de descarga de mercancías en puerto y registro de mercancías en tránsito, a fin de me constatar la legal estancia y traslado de la mercancía a bordo.
                </li>

            </ol>
        </div>
    )
}

export default TextoAviso