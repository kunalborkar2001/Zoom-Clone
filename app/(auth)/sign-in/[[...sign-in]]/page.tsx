import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignedInPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center '>
      <SignIn />
    </main>
  )
}

export default SignedInPage