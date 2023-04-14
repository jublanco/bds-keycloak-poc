import {getSession, useSession} from 'next-auth/react';

function AdminUser({ data }) {
    const session = useSession()
    console.log({ session })

    const handleClick = () => {
      fetch('/api/hello')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
    }
  
    return <div>
    <h2 style={{ textAlign: 'center' }}>User page - {data}</h2>
      <button onClick={handleClick}>  Boton Test </button>
    </div>
  }
  
  export default AdminUser
  
  export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
      return {
        redirect: {
          destination: '/api/auth/signin?callbackUrl=http://localhost:3001/admin/user',
          permanent: false
        }
      }
    }
    return {
      props: {
        data: 'Hola Well!!!, Sección de Usuario Aplicación 2',
        session
      }
    }
  }