import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import {
  updateProduct,
  getById,
  deleteProduct,
} from "../../Services/productServices";
import LabeledInput from "../LabeledInput/LabeledInput";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import LoadButton from "../LoadButton/LoadButton"
import DeleteButton from "../DeleteButton/DeleteButton"

function ModifyProductForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [deletion, setDeletion] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const result = async () => {
      try {
        const response = await getById(id);
        setValue("title", response.data().title);
        setValue("price", response.data().price);
        setValue("thumbnail", response.data().thumbnail);
        setValue("details", response.data().details);
        setValue("owner_id", response.data().owner_id);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    result();
  }, [id, setValue]);

  const handleDelete = async () => {
    setDeletion(true);
    try {
      const response = await deleteProduct(id);
      console.log(response);
      navigate("/my_products");
      setDeletion(false);
    } catch (e) {
      console.log(e);
      setDeletion(false);
    }
  };

  const handleUpdate = async (data) => {
    setLoad(true);
    try {
      const document = await updateProduct(id, data);
      console.log(document);
      setLoad(false);
      navigate("/my_products");
    } catch (e) {
      console.log(e);
      setLoad(false);
    }
  };

  const onSubmit = async (data) => {
    deletion?handleDelete():handleUpdate(data);
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
            <LoadButton text="Guardar" loading={load}/>
            <DeleteButton onClick={handleDelete} text="Eliminar" loading={deletion}/>
          </form>
        </div>
      </LoadingScreen>
    </>
  );
}

export default ModifyProductForm;
