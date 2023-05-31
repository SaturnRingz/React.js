import { useForm } from "react-hook-form";
import { createProduct } from "../../Services/productServices";
import LabeledInput from "../LabeledInput/LabeledInput";
import React, { useState } from "react";
import { AuthContext } from "../../Context/authContext";
import LoadButton from "../LoadButton/LoadButton"
import { useNavigate } from "react-router-dom";
function AddProductForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const context = React.useContext(AuthContext);
  const navigate=useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    const userData = await context.user;
    try {
      const document = await createProduct(data, userData);
      console.log(document);
      navigate("/my_products")
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const[loading, setLoading] = useState(false);

  return (
    <>
      <div id="form-bubble">
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
          <LoadButton text="Guardar" loading={loading}/>
        </form>
      </div>
    </>
  );
}

export default AddProductForm;
