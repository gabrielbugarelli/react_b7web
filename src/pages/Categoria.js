import React from 'react'
import { useLocation } from 'react-router-dom'

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const Categoria = () => {
    let query = useQuery();
    let cat = query.get('tipo')

    return (
        <div>
            <h4>PÁGINA Categoria</h4>
            exibindo itens da categoria: {cat}
        </div>
    )
}

export default Categoria