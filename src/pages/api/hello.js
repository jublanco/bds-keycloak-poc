// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  console.log(session)
  if (session) {
    // Signed in
    res.status(200).json({ name: 'John Doe' })

  } else {
    // Not Signed in
    res.status(401)
  }
res.end()
}
