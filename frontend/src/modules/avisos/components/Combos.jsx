import React from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";

export const CustomCombo = ({data,placeholder,disabled,...props}) => {
  return (
         <Combobox items={data} disabled={disabled} {...props}>
            <ComboboxInput placeholder={placeholder} disabled={disabled} className={`${disabled ? "cursor-not-allowed opacity-50 bg-gray-100" : "bg-white hover:bg-gray-50"}`}/>
                          {/* // className= {disabled ? "cursor-not-allowed opacity-50 bg-gray-100" : "" "outline-none"} /> */}
            <ComboboxContent>
              <ComboboxEmpty>No items founds</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
  )
}

export default CustomCombo;