import {getSession, useSession} from 'next-auth/react';

function AdminUser({ data }) {
    const session = useSession()
    console.log({ session })
  
    return <h2 style={{ textAlign: 'center' }}>User page - {data}</h2>
  }
  
  export default AdminUser
  
  export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
      return {
        redirect: {
          destination: '/api/auth/signin?callbackUrl=http://localhost:3000/admin/user',
          permanent: false
        }
      }
    }
    return {
      props: {
        data: 'Sección de Usuario',
        session
      }
    }
  }