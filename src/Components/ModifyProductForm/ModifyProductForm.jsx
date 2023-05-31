import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import {
  updateProduct,
  getById,
  deleteProduct,
} from "../../Services/productServices";
import LabeledInput from "../LabeledInput/LabeledInput";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

function ModifyProductForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const result = async () => {
      try {
        const response = await getById(id);
        setValue("title", response.data().title);
        setValue("price", response.data().price);
        setValue("thumbnail", response.data().thumbnail);
        setValue("details", response.data().details);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    result();
  }, [id, setValue]);

  const handleDelete = async () => {
    try {
      const response = await deleteProduct(id);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (data) => {
    try {
      const document = await updateProduct(id, data);
      console.log(document);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <LoadingScreen loading={loading}>
        <div id="form-bubble">
          <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Modificar los datos del producto</h1>
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
            <Link className="register-button" onClick={handleDelete} to="/">
              Eliminar
            </Link>
          </form>
        </div>
      </LoadingScreen>
    </>
  );
}

export default ModifyProductForm;
