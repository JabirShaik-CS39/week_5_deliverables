import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";

export default function ProductCard({ product }) {
  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Card>
      <CardContent className="p-4">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg"
        />

        <h2 className="font-bold text-lg mt-3">
          {product.name}
        </h2>

        <p className="text-gray-600">
          {product.price}
        </p>

        <Button
          className="w-full mt-4"
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>

      </CardContent>
    </Card>
  );
}