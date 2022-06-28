import s from "./SinglePetCardView.module.css";

const SinglePetCardView = ({pet}) => {

    {console.log(pet.image)}

  return (

     <section className="container sproduct my-5 pt-5">
                <div className="row mt-5">
                  <div className="col-lg-5 col-md-12 col-12">
                     {/* <img
                      className="img-fluid pb-1"
                      width="600px"
                      src={require(`../../assets/img${pet.image[0]}`)}
                      alt={pet.animalName}
                    ></img>  */}
                    <br />
                    <div className={s.smallImgGroup}>
                      <div className={s.smallImgcol}>
                        {/* {pet.imagenes.map(imagen => <img width='30%' height='90%' className='small-img p-1' src={require(`../../assets/img${imagen}`)}></img>  )} */}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 col-12">
                    <h6> Patitas con techo </h6>
                    <h2 className="py-4"> {pet.animalname}</h2>
                    <h6>Edad: {pet.age}</h6>
                    <h6>Genero: {pet.sex}</h6>
                    <h6>Tamaño: {pet.size}</h6>
                    <h6>Ubicacion: {pet.location}</h6>
                    <h6>Vacunas: {pet.vaccines}</h6>
                    <h6>Especie: {pet.species}</h6>
                    <span> <h5>Personalidad: </h5> {pet.personality}</span>
                    <span> <h5>Historia:</h5> {pet.history}</span>
                    <br />
                    <button className="btn btn-primary">Aplicar</button> 
                  </div>

                </div>
              </section>
  )
}

export default SinglePetCardView