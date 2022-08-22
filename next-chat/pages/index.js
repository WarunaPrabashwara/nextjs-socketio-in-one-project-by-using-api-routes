import React , { useEffect , useState } from 'react'
import io from 'socket.io-client'

export default () => {

  
  useEffect(() => {
    fetch('/api/socketio').finally(() => {
   
   //   const socket = io()

    //  socket.on('connect', () => {
    //    console.log('connect')
    //    socket.emit('hello')
   //   })

    //  socket.on('hello', data => {
    //    console.log('hello', data)
   //   })

  //    socket.on('a user connected', () => {
  //      console.log('a user connected')
  //    })

  //    socket.on('disconnect', () => {
  //      console.log('disconnect')
  //    })
            
    })
  }, []) // Added [] as useEffect filter so it will be executed only once, when component is mounted


  const [ name , setName  ] = useState("")
  const [ list , setList ]  = useState([]);

  const handlepost  =( e )=>{
    fetch('/api/socketio').finally(() => {
      const socket = io()

      socket.on("dewanipara"  , ( data ) => {
        console.log(data )
        setList([...list , data ])
      })
      
      socket.emit("roomsatu" ,  { post: name })
            
    })


    
}
  var i = 0 ;
  return (
    <>      
    <br />
    <input type="text"  onChange= { (e) => setName( e.target.value )} />
    <button onClick={ handlepost }>Send comment </button>
    <br />
    { list.map((p  ) => (
      <div key={i++}> <li   > { p.post} </li> </div>
      
    ) )  }
    </>
  )
}