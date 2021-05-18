import React, { useState, useEffect } from 'react'
import SearchBox from './components/SearchBox'

const App = () => {

  const [searchText, setSearchText] = useState('')
  const [list, setList] = useState([])

  // useEffect(() => {
  //   setList([
  //     { title: 'Comprar o bolo', done: false },
  //     { title: 'Pegar o cachorro no petshop', done: false },
  //     { title: 'Estudar react', done: true },
  //     { title: 'Colocar ração para o dog', done: false },
  //     { title: 'Fazer projeto no react', done: true },
  //   ])
  // }, [])

  const addAction = (newItem) => {
    let newList = [...list]
    newList.push({ title: newItem, done: false })

    setList(newList)
  }

  const handleToggleDone = (index) => {
    let newList = [...list]
    newList[index].done = !newList[index].done

    setList(newList)
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox
        onEnter={addAction}
      />

      <hr />

      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => handleToggleDone(index)}>
            {item.done &&
              <del>{item.title}</del>
            }

            {!item.done &&
              item.title
            }
          </li>))}
      </ul>
    </>
  )
}

export default App;