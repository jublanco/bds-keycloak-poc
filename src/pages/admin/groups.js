import {getSession, useSession} from 'next-auth/react';

function AdminGroups({ data }) {
    const session = useSession()
    console.log({ session })
  
    return <h2 style={{ textAlign: 'center' }}>Groups page - {data}</h2>
  }
  
  export default AdminGroups
  
  export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
      return {
        redirect: {
          destination: '/api/auth/signin?callbackUrl=http://localhost:3000/admin/groups',
          permanent: false
        }
      }
    }
    return {
      props: {
        data: 'Sección de Grupos',
        session
      }
    }
  }