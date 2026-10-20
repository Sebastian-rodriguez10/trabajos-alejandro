import './App.css'
import { ListaRutas } from './components/ListaRutas';
import { rutas, type Dificultad, type Ruta } from './datos/rutas';

function filtrarPorDificultad(lista: Ruta[], dificultad: Dificultad){
    if (dificultad === "todas") return lista;
    return lista.filter((ruta) => ruta.dificultad === dificultad);
}
function App() {
    const visibles = filtrarPorDificultad(rutas, "todas").toSorted((a, b) => a.precio - b.precio);
    return (
        <main>
            <p>se encontraron {visibles.length} rutas</p>
            <ListaRutas rutas={visibles} />
        </main>
    );
}

export default App
