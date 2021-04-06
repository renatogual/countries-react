import React, { useEffect, useState } from 'react'

import api from './services/Api'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    api.get('all').then(setData)
  }, [])

  console.log(data)

  return <div>Teste</div>
}

export default App
