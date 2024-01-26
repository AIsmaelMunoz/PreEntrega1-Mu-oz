const Form = ( { datosForm, guardarDatosInput, enviarOrden } ) => {

  return (
        <form onSubmit={enviarOrden}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />

            <label htmlFor="cel">Cel</label>
            <input type="number" name="cel" id="cel" value={datosForm.cel} onChange={guardarDatosInput} />

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={datosForm.email} onChange={guardarDatosInput} />

            <button type="submit">Realizar orden</button>
        </form>
  )
}


export default Form