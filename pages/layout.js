import Header from '@/components/common/Layout/Header'
import Head from 'next/head'
import React from 'react'

export default function BaseLayout() {
  return (
    <>
      <Head>
        <title>MySide Shop</title>
        <meta name="description" content="Seu melhor lugar para comprar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  )
}
