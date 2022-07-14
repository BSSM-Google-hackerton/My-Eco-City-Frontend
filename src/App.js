import ProductionLine from './container/ProductionLine/productionLine';
import ThreeExemple from './container/ThreeExemple/threeExemple';
import { OrbitProvider } from './context/orbitContext';

function App() {
  return (
    <div className="App">
        <OrbitProvider>
            <ThreeExemple/>
            <ProductionLine/>
        </OrbitProvider>
    </div>
  );
}

export default App;
