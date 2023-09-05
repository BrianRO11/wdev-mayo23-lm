menuprincipal.innerHTML += `
<nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
<div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="https://paginas-web-cr.com/ApiPHP">Api</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">......</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Módulos  
            </a>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="listarest.html">Estudiante</a></li>
            <li><a class="dropdown-item" href="#">Profesor</a></li>
            <li><a class="dropdown-item" href="#">Grupo</a></li>
            <li><a class="dropdown-item" href="#">Curso</a></li>
            </ul>
        </li>
        </ul>
    </div>
</div>
</nav>`