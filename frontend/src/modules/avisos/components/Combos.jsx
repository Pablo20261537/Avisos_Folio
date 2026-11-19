import React from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@/components/ui/combobox";

export const CustomCombo = ({
  data,
  placeholder,
  disabled,
  itemValueKey = "id",
  itemLabelKey = "nombre",
  ...props
}) => {
  const safeData = Array.isArray(data) ? data : [];

  // Convierte el ID guardado (ej. 3) al texto visible (ej. "CABINA")
  const getLabel = (val) => {
    if (val === null || val === undefined || val === "") return "";
    if (typeof val === "object") return String(val[itemLabelKey] ?? "");

    const found = safeData.find(
      (item) => typeof item === "object" && item !== null &&
        String(item[itemValueKey]) === String(val)
    );

    return found ? String(found[itemLabelKey] ?? "") : String(val);
  };

  return (
    <Combobox
      items={safeData} disabled={disabled} itemToStringLabel={getLabel} {...props}
    >
      <ComboboxInput
        placeholder={placeholder} disabled={disabled} className={`${ disabled? "cursor-not-allowed opacity-50 bg-gray-100": "bg-white hover:bg-gray-50"
        }`}/>
        
      <ComboboxContent>
        <ComboboxEmpty>No items found</ComboboxEmpty>
        <ComboboxList>
          {safeData.map((item, index) => { const isObj = typeof item === "object" && item !== null; const itemVal = isObj ? item[itemValueKey] : item; const itemText = isObj ? item[itemLabelKey] : item;

            return (
              <ComboboxItem key={itemVal ?? index} value={itemVal}>
                {itemText}
              </ComboboxItem>
            );
          })}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default CustomCombo;