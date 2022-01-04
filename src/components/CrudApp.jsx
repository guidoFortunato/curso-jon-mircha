import React, { useState } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDb = [
    {
      id: 1,
      name: "Seiya",
      constellation: "Pegaso"
    },
    {
      id: 2,
      name: "Shiryu",
      constellation: "Dragón"
    },
    {
      id: 3,
      name: "Hyoga",
      constellation: "Cisne"
    },
    {
      id: 4,
      name: "Shun",
      constellation: "Andrómeda"
    },
    {
      id: 5,
      name: "Ikki",
      constellation: "Fénix"
    },
    {
      id: 6,
      name: "Mú",
      constellation: "Aries"
    },
    {
      id: 7,
      name: "Saga",
      constellation: "Geminis"
    },
    {
      id: 1617237562207,
      name: "Shura",
      constellation: "Capricornio"
    }
  ]

const CrudApp = () => {

    const [db, setDb] = useState(initialDb)


    return (
        <div>
            <h2>CRUD APP</h2>
            <CrudForm />
            <CrudTable data={db}/>
        </div>
    )
}

export default CrudApp