"use client"
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
      <div className="d-flex ">
        <p>
          This is alert content.
        </p>
        <div className="justify-content-end" style={{marginLeft:"auto"}}>
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
          </div>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default AlertDismissible;