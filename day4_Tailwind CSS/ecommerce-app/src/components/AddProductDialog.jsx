import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddProductDialog() {
  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>

      <DialogContent>

        <DialogHeader>
          <DialogTitle>
            Add New Product
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <Input placeholder="Product Name" />

          <Input placeholder="Price" />

          <Button className="w-full">
            Save Product
          </Button>

        </div>

      </DialogContent>

    </Dialog>
  );
}