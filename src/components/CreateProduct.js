"use client";
import FormDialog from "@/components/FormDialog";
import { addNewProduct, editProduct } from "@/lib/products";

export default function CreateProduct({ labels, data }) {
  return (
    <>
      <FormDialog
        action={!data ? addNewProduct : editProduct}
        data={data}
        labels={labels}
        title={!!data ? "Edit Product" : "Create New Product"}
        descTitle={
          !!data
            ? "Make changes to your product here. Click save when you're done."
            : "Please complete the required fields to add a new product to our catalog."
        }
        submitTitle={!!data ? "Save Changes" : "Create"}
        submitMessage={!!data ? "edited" : "created"}
      />
    </>
  );
}
