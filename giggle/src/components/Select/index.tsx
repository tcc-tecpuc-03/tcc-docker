import React, { useState } from "react";

interface SelectProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  placeholder?: string;
}

export function Select({
  options,
  onSelect,
  placeholder = "Selecione uma opção",
}: SelectProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectOption = (option: string) => {
    setSearchTerm("");
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsOpen(true)}
        className="bg-white border  border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
      />
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md z-10">
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
