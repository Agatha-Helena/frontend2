import { useState } from 'react'

function CardPrato({ nome, preco, categoria, onAdicionar }) {
  // Preparamos o valor ANTES do return (boa prática).
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const [quantidade, setQuantidade] = useState(1)
  const [curtida, setCurtida] = useState(0)

  function diminuir() {
    if (quantidade > 1) {
        setQuantidade(quantidade - 1)
    }
  }

  function aumentar() {
    setQuantidade(quantidade + 1)
  }

  function adicionar() {
    onAdicionar(quantidade)
    console.log(`Adicionou ${quantidade}x ${nome} ao pedido`)
    setQuantidade(1)
  }

  function curtir(){
    setCurtida(curtida + 1)
  }

  return (
    <article className="card-prato">
      <span className="categoria">{categoria}</span>
      <h2>{nome}</h2>
      <p className="preco">{precoFormatado}</p>

        <div className='quantidade'>
            <button type='button' onClick={diminuir} aria-label={`Diminuir quantidade de ${nome}`}>
                -
            </button>

            <span> {quantidade} </span>

            {<button type='button' onClick={aumentar} aria-label={`Aumentar quantidade de ${nome}`}>
                +
            </button>}

            {<button type='button' className='btn-curtir' onClick={curtir} aria-label={`Curtir ${nome}`}>
                ❤️ Curtir
            </button>}
        </div>

      <button type="button" className="btn-adicionar" onClick={adicionar}>
        Adicionar ao pedido
      </button>
    </article>
  );
}

export default CardPrato;