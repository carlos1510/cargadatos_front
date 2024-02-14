import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Sistema de carga de datos</a>
        </div>
      </nav>
      <div className="card content_file_heigth">
        <div className="card-body ">
          <div className='row mt-5 '>
            <form action="">
              <div className="mb-5">
                <label htmlFor="formFile" className="form-label">Selecciona un archivo de carga</label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <div className='mt-5 text-center'>
              <button type="button" className="btn btn-primary">Upload File</button>
              </div>
            </form>
          </div>
        
        </div>
      </div>
    </div>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Sistema de carga de datos</a>
        </div>
      </nav>
      <div className="card ">
        <div className="card-body ">
          <div className='row'>
            <div className='col-lg-10'>
              <div></div>
            </div>
            <div className='col-lg-2'>
              <div class="d-grid gap-2">
                <button type="button" className="btn btn-secondary">New File</button>
              </div> 
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <label>The (2) records listed below encountered errors. Please rectify these issues and retry.</label>
              <table className='table mt-2'>
                <thead>
                  <tr>
                    <th>Row</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
            </div>
          </div>
        
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
