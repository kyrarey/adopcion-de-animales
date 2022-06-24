import React from "react";
import s from "./SinglePetCard.module.css";
import { useParams } from "react-router-dom";
import pets from "../../assets/pets.json";

const SinglePetCard = () => {
  const params = useParams();

  // let id = useLocation().pathname.slice(1);
  //   const [pet, setPet] = useState({});

  //   useEffect(() => {
  //       find(/pets/single/${id})
  //       .then(petObj => setPet(petObj))
  //       .catch(error => console.log(error))
  //   }, [id])

  return (
    <div>
      {pets.map((pet, i) => {
        if (pet.id == params.id) {
          return (
            <>
              <section className="container sproduct my-5 pt-5">
                <div className="row mt-5">
                  <div className="col-lg-5 col-md-12 col-12">
                    <img
                      className="img-fluid pb-1"
                      width="600px"
                      src={require(`../../assets/img${pet.url_path1}`)}
                      alt={pet.name}
                    ></img>
                    <br />
                    <div className={s.smallImgGroup}>
                      <div className={s.smallImgcol}>
                        {/* {pet.imagenes.map(imagen => <img width='30%' height='90%' className='small-img p-1' src={require(`../../assets/img${imagen}`)}></img>  )} */}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 col-12">
                    <h6> Patitas con techo </h6>
                    <h2 className="py-4"> {pet.apodo}</h2>
                    <h6>Nombre: {pet.name}</h6>
                    <h6>Edad: {pet.age}</h6>
                    <h6>Genero: {pet.gender}</h6>
                    <h6>Ubicacion: {pet.location}</h6>
                    <h6>Vacunas: {pet.vacunas}</h6>
                    <button className="buy-btn">Aplicar</button>
                    <h6 className="mt-5 mb-5">Le gusta:</h6>
                    <span> {pet.descripcion}</span>
                  </div>
      {
      pets.map( (pet, i) => { if (pet.id==params.id){ 
        return (
          <>
          <section className='container sproduct my-5 pt-5'>
           <div className='row mt-5'>
            <div className='col-lg-5 col-md-12 col-12'>
              <img className='img-fluid pb-1' width='600px' src={require(`../../assets/img${pet.url_path1}`)} alt={pet.name}></img><br/>
              <div className={s.smallImgGroup}> 
                <div className={s.smallImgcol}>
                {/* {pet.imagenes.map(imagen => <img width='30%' height='90%' className='small-img p-1' src={require(`../../assets/img${imagen}`)}></img>  )} */}
                </div>

export default SinglePetCard;

// <img className={s.petImage}src={require(`../../assets/img${pet.url_path1}`)} alt={pet.name}></img><br/>

// <h2> {pet.apodo}</h2><br/>
{
  /* <span>Nombre:{pet.name}</span><br/>
<span>Edad: {pet.age}</span><br/>
<span>Genero: {pet.gender}</span><br/>
<span>Ubicacion: {pet.location}</span><br/>
<span>Vacunas: {pet.vacunas}</span><br/> */
}
// <span>Le gusta: {pet.descripcion}</span><br/>
// <button className={s.button}> Contactarse con asociacion </button>
// </div>
// <div className={s.container}>
//   <div>
//  {/* {pet.imagenes.map(imagen => <img className={s.petImages} src={require(`../../assets/img${imagen}`)}></img>  )} */}
//  </div>

{
  /* <div>
{
pets.map( (pet, i) => { if (pet.id==params.id){ 
  return (
    <>
    <section className='container sproduct my-5 pt-5'>
     <div className='row mt-5'>
      <div className='col-lg-5 col-md-12 col-12'>
        <img className='img-fluid pb-1' width='600px' src={require(`../../assets/img${pet.url_path1}`)} alt={pet.name}></img><br/>
        <div className={s.smallImgGroup}> 
          <div className={s.smallImgcol}>
          {pet.imagenes.map(imagen => <img width='30%' height='90%' className='small-img p-1' src={require(`../../assets/img${imagen}`)}></img>  )}
          </div>
        </div>
      </div>

      <div className='col-lg-6 col-md-12 col-12'>
        <h6> Patitas con techo </h6>
        <h2 className='py-4'> {pet.apodo}</h2>
        <h6>Nombre: {pet.name}</h6>
        <h6>Edad: {pet.age}</h6>
        <h6>Genero: {pet.gender}</h6>
        <h6>Ubicacion: {pet.location}</h6>
        <h6>Vacunas: {pet.vacunas}</h6>
        <button className='buy-btn'>Aplicar</button>
        <h6 className='mt-5 mb-5'>Le gusta:</h6>
        <span> {pet.descripcion}</span>
      </div>
    </div>

     </section>
   </>
  )
}}
)
}
</div>
)

} */
}
