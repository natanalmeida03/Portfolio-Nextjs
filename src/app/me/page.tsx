"use client";
import React from 'react'
import NavBar from '@/components/me/NavBar'
import Posts from '@/components/me/Posts'
import Footer from '@/components/Footer';

function Me() {
    const [search, setSearch] = React.useState("");
    return (
      <>
        <NavBar search={search} setSearch={setSearch} />
        <Posts search={search} />
        <Footer />
      </>
    )
}

export default Me