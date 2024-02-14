import * as React from "react";

function Login() {
    return (
        <>
            <div className="container mt-5">
                <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <h2>Sistema de Carga de Datos</h2>
                    <form>
                    <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="InputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="InputPassword" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default Login;