"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormInput from "@/components/FormInput";
import { toast } from "sonner";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function FormDialog(props) {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const handleInputChange = (name, value) => {
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async () => {
    setOpen(false);
    const json =
      props.data !== undefined
        ? await props.action(form, id)
        : await props.action(form);
    toast(
      `You have successfully edited the product named ${json.title} that was listed with a price tag of $${json.price}.`,
      {
        description: `Congratulations! Your product has been edited successfully. Changes are saved and ready to go!`,
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="px-4 md:px-0">
          <Button
            variant="outline"
            className="text-white rounded-full font-bold font-sans py-0 border-2 border-black bg-black min-h-14 h-full w-full md:w-64 flex justify-center hover:bg-gray-700 hover:text-white focus:outline-none"
          >
            {props.title}
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white font-sans">
        <form action={submitHandler}>
          <DialogHeader>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogDescription>{props.descTitle}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 focus:ring focus:ring-black focus:border-black">
            {props.labels.map((val, key) => (
              <FormInput
                key={`${val.name}-${key}`}
                onChange={(value) => handleInputChange(val.name, value)}
                {...val}
              />
            ))}
          </div>
          <DialogFooter>
            <Button
              className="text-white rounded font-bold font-sans border-2 border-black bg-black hover:bg-gray-700 hover:text-white focus:outline-none"
              type="submit"
              variant="outline"
            >
              {props.submitTitle}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
