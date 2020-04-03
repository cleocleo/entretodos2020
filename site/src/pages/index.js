import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import HeaderInfo from "../components/HeaderInfo"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <section>
        <HeaderInfo />
        <BlogList />
      </section>
    </Layout>
  )
}