import React from 'react'
import styles from './CartaoJogo.module.css'

const CartaoJogo = ({nome, preco, promocao, emEstoque}) => {
  return (
    <div className={emEstoque ? styles.normal : styles.esgotado}>
        <h2>{nome}</h2>
        <p>Preço: {preco}</p>
        {promocao ? "🔥 PROMOÇÃO!" : ""}
        {emEstoque ? "🟢 Em estoque" : "⚫ Esgotado"}
    </div>
  )
}

export default CartaoJogo