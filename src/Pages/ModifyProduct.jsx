import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useParams,Link} from 'react-router-dom';
import { updateProduct, getById, deleteProduct} from '../Services/productServices';

function ModifyProduct(){
    const {register, handleSubmit, setValue, formState:{errors}} = useForm ({mode: 'onChange'});
    const {id} = useParams();

    useEffect(() => {
        const result = async () => {
          try {
            const response = await getById(id);
            setValue("title", response.data().title);
            setValue("price", response.data().price);
            setValue("thumbnail", response.data().thumbnail);
            setValue("details", response.data().details);
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

    const onSubmit= async (data)=>{
        try{
            const document = await updateProduct(id, data);
            console.log(document);
        }catch(e){
            console.log(e)
        }
    }
    return(
    <>
        <div className="register-bubble">
        <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Modificar los datos del producto</h1>

        <label className="labeled-input">Nombre del producto
        <div style={{height: "3px"}}></div>
        <input  type="text"
                name="title"
                id="name"
                className="register-input"
                {...register("title", {required: true})}
                />
                {errors.title?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
        </label>
        <label className="labeled-input">Precio
        <div style={{height: "3px"}}></div>
        <input  type="number"
                name="price"
                id="name"
                className="register-input"
                {...register("price", {required: true})}
                />
                {errors.price?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
                </label>
        <label className="labeled-input">Descripción
        <div style={{height: "3px"}}></div>
        <input  type="text"
                name="thumbnail"
                id="name"
                className="register-input"
                {...register("details", {required: true})}
                />
                {errors.details?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
        </label>
        <label className="labeled-input">Foto
        <div style={{height: "3px"}}></div>
        <input  type="text"
                name="thumbnail"
                id="name"
                className="register-input"
                {...register("thumbnail", {required: true})}
                />
                {errors.thumbnail?.type === 'required' &&(<p id="error-msg">Este campo es obligatorio</p>)}
        </label>

        <button className="register-button" type="submit">Guardar</button>
        <Link className="register-button" onClick={handleDelete} to="/">Eliminar</Link>
        </form>
        </div>
    </>)
}

export default ModifyProduct;