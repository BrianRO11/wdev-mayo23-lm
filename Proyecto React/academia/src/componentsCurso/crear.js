import React from 'react';

class CrearCurso extends ReactComponent {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
          
        <form action="">
        <div class="row g-3">
            <div class="col-sm mb-3">
                <label for="" class="form-label">Nombre</label>
                <input required type="text" 
                    class="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="Ingrese el nombre" > </input>
                <small id="helpId" class="form-text text-muted"></small>
            </div>

            <div class="col-sm mb-3">
                <label for="" class="form-label">Descripcion</label>
                <input required type="text"  
                    class="form-control" name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="Ingrese la descripcion"> </input>
                <small id="helpId" class="form-text text-muted"></small>
            </div>

            <div class="col-sm mb-3">
                <label for="" class="form-label">Tiempo</label>
                <input required type="text"  
                    class="form-control" name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="Ingrese el tiempo"> </input>
                <small id="helpId" class="form-text text-muted"></small>
            </div>
            </div>
            <div class="mb-3">
                <div class="d-grid gap-2">
                <button  type="button" name="" id="" class="btn btn-primary"> Guardar </button>
                
                <button type="reset" class="btn btn-danger">Reset</button>
            </div>
            </div>
        </form>
        );
    }
}
 
export default CrearCurso;