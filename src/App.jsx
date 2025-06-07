import { Header } from "./Components/Header"
import { ProductCatalog  } from "./Components/ProductCatalog"

function App() {
  return (
  <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Header />
        <ProductCatalog />
      </div>
    </div>
  );
}

export default App;
