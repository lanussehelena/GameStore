import React from 'react'
import Cabecalho from './components/Cabecalho'
import CartaoJogo from './components/CartaoJogo';
import styles from './components/App.module.css'

const jogos = [
  { id: 1, nome: "The Witcher 3: Wild Hunt", preco: 149.90, promocao: true, emEstoque: true },
  { id: 2, nome: "Cyberpunk 2077", preco: 199.90, promocao: false, emEstoque: true },
  { id: 3, nome: "Stardew Valley", preco: 24.90, promocao: false, emEstoque: false },
  { id: 4, nome: "Hollow Knight", preco: 46.99, promocao: true, emEstoque: true },
  { id: 5, nome: "Red Dead Redemption 2", preco: 299.90, promocao: true, emEstoque: false }
];

const App = () => {
  return (
    <div>
      <Cabecalho total={jogos.length}/>
      <h1>Jogos:</h1>
      <div className={styles.vitrine}>
        {
        jogos.map((jogo) => (
          <CartaoJogo key={jogo.id} nome={jogo.nome} preco={jogo.preco} promocao={jogo.promocao} emEstoque={jogo.emEstoque}/>

        ))
      }
      </div>
    </div>
  )
}

export default App