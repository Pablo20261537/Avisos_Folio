import React, { useState, useEffect, useMemo } from "react";
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
  value,
  onValueChange,
  itemValueKey = "id",
  itemLabelKey = "nombre",
  ...props
}) => {
  const safeData = useMemo(() => (Array.isArray(data) ? data : []), [data]);
  const [inputValue, setInputValue] = useState("");

  const findLabelByValue = (val) => {
    if (val === null || val === undefined || val === "") return "";
    if (typeof val === "object") return String(val[itemLabelKey] ?? "");

    const found = safeData.find(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        String(item[itemValueKey]) === String(val)
    );
    return found ? String(found[itemLabelKey] ?? "") : String(val);
  };

  useEffect(() => {
    setInputValue(findLabelByValue(value));
  }, [value, safeData, itemValueKey, itemLabelKey]);

  const selectedLabel = findLabelByValue(value);

  const filteredData = useMemo(() => {
    const query = inputValue.trim().toLowerCase();
    if (!query || (selectedLabel && inputValue === selectedLabel)) {
      return safeData;
    }
    return safeData.filter((item) => {
      const label =
        typeof item === "object" && item !== null
          ? String(item[itemLabelKey] ?? "")
          : String(item ?? "");
      return label.toLowerCase().includes(query);
    });
  }, [safeData, inputValue, selectedLabel, itemLabelKey]);

  const itemToStringLabel = (item) => {
    if (item === null || item === undefined) return "";
    if (typeof item === "object") return String(item[itemLabelKey] ?? "");
    return findLabelByValue(item);
  };

  return (
    <Combobox
      items={filteredData}
      disabled={disabled}
      value={value}
      onValueChange={(val) => {
        setInputValue(findLabelByValue(val));
        onValueChange?.(val);
      }}
      inputValue={inputValue}
      onInputValueChange={(nextInput) => {
        setInputValue(nextInput);
      }}
      itemToStringLabel={itemToStringLabel}
      {...props}
    >
      <ComboboxInput
        placeholder={placeholder}
        disabled={disabled}
        className={
          disabled
            ? "cursor-not-allowed opacity-50 bg-gray-100"
            : "bg-white hover:bg-gray-50"
        }
      />

      <ComboboxContent>
        <ComboboxEmpty>No items found</ComboboxEmpty>
        <ComboboxList>
          {filteredData.map((item, index) => {
            const isObj = typeof item === "object" && item !== null;
            const itemVal = isObj ? item[itemValueKey] : item;
            const itemText = isObj ? item[itemLabelKey] : item;

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