import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function FormInput({ label, onChange, ...props }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor={label} className="text-right font-bold">
        {label}
      </Label>
      <Input
        className="col-span-3 overflow-x-auto rounded-2"
        {...props}
        onChange={handleInputChange}
        autoComplete="off"
      />
    </div>
  );
}
