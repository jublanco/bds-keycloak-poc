import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/react';

function Navbar() {
  const { data: session } = useSession()
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth - Keycloak</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href='/' legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/public' legacyBehavior>
            <a>Public</a>
          </Link>
        </li>
        <li>
          <Link href='/admin/user' legacyBehavior>
            <a>User</a>
          </Link>
        </li>
        <li>
          <Link href='/admin/groups' legacyBehavior>
            <a>Groups</a>
          </Link>
        </li>

        {!session && (
          <li>
            <Link href='/api/auth/signin' legacyBehavior>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn('github')
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href='/api/auth/signout' legacyBehavior>
              <a
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar