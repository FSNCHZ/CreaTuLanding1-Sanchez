import { useForm } from "react-hook-form"
import "./Form.css"

const Form = ({ comprar }) => {

    const { register, handleSubmit } = useForm()

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(comprar)} className="form">
                <input type="text" placeholder="Ingresa tu nombre" {...register("name")}/>
                <input type="email" placeholder="Ingresa tu mail" {...register("mail")}/>
                <input type="phone" placeholder="Ingresa tu numero de telefono" {...register("phone")}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form