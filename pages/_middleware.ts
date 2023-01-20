import { NextResponse } from 'next/server'

const signedInPages = ['/', '/playlist', '/library']

// this gets executed on the edge when hosted
// can't import things like prisma etc etc
// heroku might not have edge functions so this might not work there

export default function middleware(req) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN

    if (!token) {
      return NextResponse.redirect('/signin')
    }
  }
}
