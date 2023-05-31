import { useForm } from "react-hook-form";
import { createProduct } from "../../Services/productServices";
import LabeledInput from "../LabeledInput/LabeledInput";
import React from "react";
import { AuthContext } from "../../Context/authContext";

function AddProductForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const context = React.useContext(AuthContext);

  const onSubmit = async (data) => {
    const userData = await context.user;
    try {
      const document = await createProduct(data, userData);
      console.log(document);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="register-bubble">
        <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Carga de producto</h1>
          <LabeledInput
            label="Nombre del producto"
            type="text"
            control="title"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <LabeledInput
            label="Precio"
            type="number"
            control="price"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <LabeledInput
            label="Descripción"
            type="text"
            control="details"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <LabeledInput
            label="Foto"
            type="text"
            control="thumbnail"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <button className="register-button" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProductForm;