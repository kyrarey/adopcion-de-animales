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
      <Form.Select defaultValue="Choose...">
        <option> Soltero/a </option>
        <option> Casado/a </option>
        <option> Divorciado/a </option>
        <option> Viudo/a </option>
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


 <fieldset>

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
  </fieldset>

    
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


  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Acepto los terminos y condiciones" />
  </Form.Group>


  <Button className="mb-5" variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
}

export default AdoptantForm
