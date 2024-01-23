"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteProduct } from "@/lib/products";

export function DeleteProduct({ id }) {
  const router = useRouter();

  const clickHandler = async () => {
    const { title, isDeleted } = await deleteProduct(id);
    const parsedDate = isNaN(Date.parse(isDeleted))
      ? new Date()
      : new Date(isDeleted);
    await router.push("/");
    toast(`Product named ${title} has been deleted successfully.`, {
      description: `Deleted on: ${parsedDate.toDateString()} ${parsedDate.toLocaleTimeString()}`,
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white rounded-full font-bold font-sans px-0 py-0 border border-white bg-black h-full w-64 flex justify-center hover:bg-gray-700 hover:text-red-600 focus:outline-none"
        >
          Delete Product
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            product and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-black hover:text-white rounded">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="hover:bg-black hover:text-white rounded"
            onClick={clickHandler}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
