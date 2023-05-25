import {useForm} from 'react-hook-form';
import { createProduct } from '../Services/productServices';
function AddProduct(){
    const {register, handleSubmit, formState:{errors}} = useForm({mode: 'onSubmit'});

    const onSubmit=async (data)=>{
        try{
            const document = await createProduct(data);
            console.log(document)
        }catch(e){
            console.log(e)
        }
    }
    return(
    <>
        <div className="register-bubble">
        <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Carga de producto</h1>
        <label className="labeled-input">Producto
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
        </form>
        </div>
    </>)
}

export default AddProduct;