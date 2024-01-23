"use client";

import * as React from "react"
import {Check, ChevronsUpDown} from "lucide-react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem,} from "@/components/ui/command"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {getProductByCategories} from "@/lib/products";

function Capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ComboboxDemo({name}) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {

        const main = async () => {
            const categories = await getProductByCategories();
            setProducts(categories.map((category) => Capitalize(category)));
        }

        main();

    }, [])

    return (
        <Popover name={name} open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between text-white font-sans"
                >
                    {value ? (products.includes(Capitalize(value)) ? Capitalize(value) : "All") : "All"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 border-black bg-gray-100 mt-8 overflow-y-auto max-h-64">
                <Command>
                    <CommandInput placeholder="Search category..."/>
                    <CommandEmpty>No product found.</CommandEmpty>
                    <CommandGroup>
                        {products.map((product) => (
                            <CommandItem
                                key={product}
                                value={product}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue);
                                    setOpen(false);
                                }}
                                className="group transition-colors"
                            >
                                <div className="flex items-center group-hover:bg-gray-200 rounded w-full h-full p-1">
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === product ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {product}
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
