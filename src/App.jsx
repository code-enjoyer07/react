{/* import axios, useEffect dan useState */ }
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  {/* buat sebuah useState untuk menampung data yang berisi response dari APIs */ }
  const [data, setData] = useState([])

  {/* lakukan fecth pada APIs yang ada example nya dari dummy json */ }
  async function getData() {
    const response = await axios.get("https://dummyjson.com/products")
    {/* debug si response untuk melihat response di console */ }
    console.log(response.data.products)
    {/*set isi dari data dengan response dari APIs */ }
    setData(response.data.products)
  }

  useEffect(() => {
    getData()
    {/* buat useEffect untuk melakukan fecth saat pertama masuk web atau reload*/ }
  }, [])

  return (
    <>
      <div>
        {/* buat mapping karena data bersifat array */}
        {/* buat sebuah key untuk memberi key id setiap div */}
        {data.map((item) => (
          <div key={item.id} className='custom'>
            <h1>ID : {item.id}</h1>
            <h1>TITLE : {item.title}</h1>
            <h1>TAGS : {item.tags[1]} </h1>
            <h1>CREATED AT : {new Date(item.meta.createdAt).toISOString().split('T')[0]}</h1>
            <img src={item.thumbnail}/>
            <div>
              <h1> rating or review </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
