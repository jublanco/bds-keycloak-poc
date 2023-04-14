// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSession } from 'next-auth/react'

export default async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    // Signed in
    res.status(200).json({ name: 'John Doe' })

  } else {
    // Not Signed in
    res.status(401)
  }
}
