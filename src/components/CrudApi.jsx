import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'


const CrudApi = () => {
  const [db, setDb] = useState([])
  const [dataToEdit, setDataToEdit] = useState(null);
  let url = 'http://localhost:5000/santos'
  let api = helpHttp()


  useEffect(() => {

    api.get(url).then(res => setDb(res))
    
    
  }, [])


   


    const createData = (data) => {
      data.id = Date.now()
      setDb([...db, data])
    }
    const updateData = (data) => {
      let newData = db.map(el => el.id === data.id ? data : el)
      setDb(newData)
    }
    const deleteData = (id) => {
      let isDelete = window.confirm(`Estas seguro de eliminar el registro con el id: ${id}`)
      if (isDelete) {
        let newDAta = db.filter(el => el.id !== id)
        setDb(newDAta)
      }else{
        alert('Confirmación cancelada')
        return
      }
    }


    return (
        <div>
            <h2>CRUD API</h2>
            <article className="grid-1-2">
              <CrudForm 
                createData={createData} 
                updateData={updateData} 
                dataToEdit={dataToEdit} 
                setDataToEdit={setDataToEdit}
              />
              <CrudTable 
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            </article>
        </div>
    )
}

export default CrudApi
