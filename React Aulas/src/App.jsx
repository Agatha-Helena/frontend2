import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import { cardapio  } from "./data/cardapio";
import { useState } from "react";
import "./App.css";

// O "banco de dados" da tela: um array de objetos.

function App() {
    const [totalItens, setTotalItens] = useState(0)

    function adicionarAoPedido(quantidade) {
        setTotalItens(totalItens + quantidade)
    }
  return (
    <main className="app">
      <Header totalItens={totalItens}/>
      <section className="cardapio">
        {/* .map() gera um CardPrato para cada prato. key = id único. */}
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            onAdicionar={adicionarAoPedido}
          />
        ))}
      </section>
    </main>
  );
}

export default App;