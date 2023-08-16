import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3, { message: "Macar 3 caractere boss" }),
  amount: z
    .number({ invalid_type_error: "Baga cantitate" })
    .min(1, { message: "Macar una" }),
  category: z.string().min(3, { message: "Macar 3 caractere boss" }),
  //   category: z.string().min(3, { message: "Macar 3 caractere boss" }),
});

type FormData = z.infer<typeof schema>;

const FormProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <select name="selectList" id="selectList">
          <option value="option 1">Option 1</option>
          <option value="option 2">Option 2</option>
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormProject;
