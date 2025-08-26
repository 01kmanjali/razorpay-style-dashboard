'use client';
import React, { useState } from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import { cn } from "./ui/cn";

interface DropdownOption {
    icon?: React.ElementType;
    label: string;
  }

interface DropdownProps {
    options: DropdownOption[];
    placeholder?: string;
    onSelect: (value: string) => void;
    hasPlaceholder?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = options[0].label, onSelect, hasPlaceholder=true }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelected(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block justify-items-end">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn("flex items-center mb-4 p-2 justify-between",
                hasPlaceholder && 'bg-accent-6')}
            >
                
                { hasPlaceholder &&  <span className="text-sm">{selected || placeholder}</span>}
                    {isOpen ? <ChevronUp size={16} className={cn(
                        hasPlaceholder ? "ml-2 text-accent-2" : "text-muted"
                    )}/> : <ChevronDown size={16} className={cn(
                        hasPlaceholder ? "ml-2 text-accent-2" : "text-muted"
                    )} />}
            </button>
            {isOpen && (
                <ul className="absolute z-10 w-max  mt-1 bg-accent-6 rounded shadow-lg">
                    {options.map((option, index) => {
                        const Icon = option.icon;
                        return (
                        <li
                            key={index}
                            onClick={() => handleSelect(option.label)}
                            className="px-5 py-1 cursor-pointer hover:bg-gray-700 flex flex-row gap-2 items-center border-b border-accent-2 "
                        >
                            {Icon && <Icon className="text-accent-2" size={16} />}
                            <span>{option.label}</span>
                        </li>
                    )})}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;