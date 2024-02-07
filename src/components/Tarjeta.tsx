import Recipe from "../interfaces/Recipe";



interface PropsTarjeta{
    data:Recipe;
    cambiar:(id:number)=>void
}

export const Tarjeta = ({data,cambiar}:PropsTarjeta) => {
    const {id,nombre,url,calificacion,favorito}=data;
  return (
    <div className="card">
        <img src={url} className="card-img-top" alt={nombre}/>
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{`Calificación: ${calificacion}`}</p>
            <div className="mt-auto d-flex justify-content-between ">
                <a href="#" className="btn btn-primary ">Detalles</a>
                {favorito ? 
                    <button  className="material-symbols-outlined link-danger" onClick={()=>cambiar(id)}>favorite</button> 
                    : 
                    <button  className="material-symbols-outlined link-secondary" onClick={()=>cambiar(id)}>favorite</button>}
            </div>
            
        </div>
    </div>
  )
}
