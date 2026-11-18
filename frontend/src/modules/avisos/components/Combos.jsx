import React from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";

export const CustomCombo = ({data,placeholder,disabled,
  itemValueKey = 'id',
  itemLabelKey = 'nombre',
  ...props}) => {

    
  return (
         <Combobox items={data} disabled={disabled} {...props}>
            <ComboboxInput placeholder={placeholder} disabled={disabled} className={`${disabled ? "cursor-not-allowed opacity-50 bg-gray-100" : "bg-white hover:bg-gray-50"}`}/>
                          {/* // className= {disabled ? "cursor-not-allowed opacity-50 bg-gray-100" : "" "outline-none"} /> */}
            <ComboboxContent>
              <ComboboxEmpty>No items founds</ComboboxEmpty>
              <ComboboxList>
              {data.map((item) => (  // <-- Asegúrate de hacer el .map() sobre los items si tu librería lo requiere
            <ComboboxItem key={item[itemValueKey]} value={item[itemValueKey]}>
              {item[itemLabelKey]}
            </ComboboxItem>
          ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
  )
}

export default CustomCombo;