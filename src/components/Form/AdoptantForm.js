import {Col , Form , Row, Button} from 'react-bootstrap';

const AdoptantForm = () => {
  return (
<Form className="container">
    <h1 className='text-center mb-5'>Formulario de Adopcion</h1>
  <Row className="mt-3 mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" placeholder="Nombre" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Apellido</Form.Label>
      <Form.Control type="text" placeholder="Document" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridAge">
      <Form.Label controlId="formGridAge"> Edad </Form.Label>
      <Form.Control placeholder='Edad' type="text" />
    </Form.Group>
  </Row>

  <Row className="mt-3 mb-3">
  <Form.Group as={Col} controlId="formGridDocument">
      <Form.Label>Documento</Form.Label>
      <Form.Control type="text" placeholder="Documento" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email" />
    </Form.Group>

  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Estado Civil</Form.Label>
      <Form.Select defaultValue="Seleccionar...">
      <option> -Seleccionar... </option>
        <option> -Soltero/a </option>
        <option> -Casado/a </option>
        <option> -Divorciado/a </option>
        <option> -Viudo/a </option>
      </Form.Select>
    </Form.Group>


 </Row>


 <Row>
    <Form.Group className='mb-3'controlId="formGridNumber">
      <Form.Label controlId="formGridNumber" >Telefono</Form.Label>
      <Form.Control placeholder='Numero de Telefono' type="text"  />
    </Form.Group>
    

    <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Direccion</Form.Label>
    <Form.Control placeholder="Localidad,  Calle" />
  </Form.Group>
  
  </Row>


  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label controlId="formGridCity" >Ciudad</Form.Label>
      <Form.Control placeholder='Ciudad' type="text"  />
    </Form.Group>
    

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label >Codigo Postal</Form.Label>
      <Form.Control  placeholder='Codigo postal' type="text" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Tipo de domcilio</Form.Label>
    <Form.Control placeholder="Apartamento,  Estudio,  Casa,  etc..." />
  </Form.Group>


    <h2 className='text-center mb-5 mt-5' >Sobre usted</h2>


    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        <h6>Actualmente tiene otros animalitos?</h6> 
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Si"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>


    
  <Row className="mt-3 mb-3">
    <Form.Group as={Col}>
      <Form.Label>Cuales?</Form.Label>
      <Form.Control type="text" placeholder="Cuales" />
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Que tipo de animal es?</Form.Label>
      <Form.Control type="text" placeholder="Especie" />
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label controlId="formGridAge"> Cuantos anios tiene? </Form.Label>
      <Form.Control placeholder='Edad' type="text" />
    </Form.Group>
  </Row>  

  <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        <h6>Vive con alguien mas en su casa?</h6> 
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Si"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>


    
  <Row className="mt-3 mb-3">
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Estan todos de acuerdo en adoptar?</Form.Label>
      <Form.Select defaultValue="Eliga...">
        <option> -Seleccionar... </option>
        <option> -Si </option>
        <option> -No </option>
        <option> -No,se </option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Alguno tiene algun tipo de alergia?</Form.Label>
      <Form.Select defaultValue="Eliga...">
        <option> -Seleccionar... </option>
        <option> -Si </option>
        <option> -No </option>
        <option> -No,se </option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>El arrendador sabe que quiere adoptar un animal?</Form.Label>
      <Form.Select defaultValue="Eliga...">
        <option> -Seleccionar... </option>
        <option> -Soy el propietario </option>
        <option> -Si </option>
        <option> -No </option>
        <option> -No,se </option>
      </Form.Select>
    </Form.Group>
  </Row>  


  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Si tendria que cambiar de domicilio, que pasaria con el animalito?</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Como se ve de aqui a 3 anios en el futuro con su nuevo amigo?</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Si llegase a haber una ruptura en la familia, o la llegada de un nuevo integrante. Cuales serian los cambios para el adoptado?</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>


  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label controlId="formGridCity" >Cuanto tiempo pasara solo el animal?</Form.Label>
      <Form.Control  type="text"  />
    </Form.Group>
    

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Que tanta energia debe tener su nuevo amigo?</Form.Label>
      <Form.Select defaultValue="Eliga...">
        <option> -Seleccionar... </option>
        <option> -Quieto, callado </option>
        <option> -Moderada </option>
        <option> -Vivaz </option>
        <option> -Mucha energia </option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Porque quiere adoptar?</Form.Label>
      <Form.Select defaultValue="Eliga...">
        <option> -Seleccionar... </option>
        <option> -Para compania </option>
        <option> -Guardia y proteccion </option>
        <option> -Otras </option>
      </Form.Select>
    </Form.Group>
  </Row>

  <h2 className='text-center mb-5 mt-5' > Formulario de Adopcion: </h2>
  Como adoptante del animas a que se hace mencion en esta ficha y declarando que todos los datos otorgados son correctos, se compromete, mediante la validacion de este documento a:

  <ol>
    <li>El responsable de la institucion efectue las visitas de control que concidere necesarias y compruebe su estado de salud y bienestar</li>
    <li>Mantener actualizada la informacion del adoptante, en caso de que haya un cambio de domicilio, extravio o perdida, se debe avisar con un plazo maximo de 48 horas.</li>

    <li>EL adoptado no puede ser vendido bajo ningun consepto</li>
    <li>El adoptado no sera entrenado para ningun fin agresivo</li>
    <li>El adoptado NO recibira ningun tipo de MALTRATO en ningun momento bajo ninguna circunstancia</li>
    <li>El adoptado sera un miembro mas de la familia.</li>
    <li>El adoptado tendra en todo momento agua limpia con libre acceso.</li>
    <li>El adoptado tendra una alimentacion balanceada</li>
    <li>El adoptado tendra un collar con una identificacion en todo momento</li>
    <li>El adoptado debe tener en la casa un lugar especifico para comer y dormir</li>
    <li>El adpotado debe contar con la disponibilidades medicas necesarias incluyendo desparasitacion y vacunacion</li>
    <li>Usted se compromete a darle un hogar seguro, una alimentacion constante y a cuidar del animal con cari;o</li>
    <li>Si desea dar en adopcion al animal, debe hacer dando un AVISO PREVIO al servicio donde adopto al animalito</li>
    <br />
     <h4>Si las pautas establecidas en este contrato no se cumplen, el adoptado se retirara inmediatamente y se le buscara un nuevo hogar con alguien que si quiera cumplir este documento.</h4>
  </ol>
  


  <Form.Group className="mb-3 needs-validation" id="formGridCheckbox" noValidate>
    <Form.Check for="formGridCheckbox" type="checkbox" label="Acepto las pautas de este formulari y que los datos proporcionados son correctos" />
  </Form.Group>


  <Button className="mb-5" variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
}

export default AdoptantForm
