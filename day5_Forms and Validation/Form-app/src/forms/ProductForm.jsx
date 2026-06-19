// src/forms/ProductForm.jsx

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { productSchema } from "../schemas/productSchema";

function ProductForm() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    mode: "onChange",
  });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  const onSubmit = (data) => {
    if (!image) {
      alert("⚠️ Please upload a product image.");
      return;
    }

    console.log({
      ...data,
      image,
    });

    alert("🎉 Product Created Successfully!");
  };

  const onError = () => {
    alert("⚠️ Please enter all required values.");
  };

  return (
    <form
      className="form-card"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h2>Create Product</h2>

      <div className="form-group">
        <label>Product Title</label>
        <input
          type="text"
          placeholder="Enter product title"
          {...register("title")}
        />
        <p className="error">
          {errors.title?.message}
        </p>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Enter product description"
          {...register("description")}
        />
        <p className="error">
          {errors.description?.message}
        </p>
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          placeholder="Enter price"
          {...register("price")}
        />
        <p className="error">
          {errors.price?.message}
        </p>
      </div>

      <div className="form-group">
        <label>Stock</label>
        <input
          type="number"
          placeholder="Enter stock quantity"
          {...register("stock")}
        />
        <p className="error">
          {errors.stock?.message}
        </p>
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          placeholder="Enter category"
          {...register("category")}
        />
        <p className="error">
          {errors.category?.message}
        </p>
      </div>

      <div
        {...getRootProps()}
        className="dropzone"
      >
        <input {...getInputProps()} />

        <p>
          📁 Drag & Drop Product Image Here
        </p>

        <p>
          or Click to Select Image
        </p>
      </div>

      {preview && (
        <img
          src={preview}
          alt="Product Preview"
          className="preview-image"
        />
      )}

      <button
        type="submit"
        className="submit-btn"
      >
        Create Product
      </button>
    </form>
  );
}

export default ProductForm;