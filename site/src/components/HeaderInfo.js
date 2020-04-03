import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import { withPlugin } from 'tinacms'
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'

import headerInfoStyles from "../styles/components/headerinfo.module.scss"

function HeaderInfo() {
  return (
    <section className={headerInfoStyles.headerinfo}>
      <div className="sobre">
        <h2>filmes curtos<br/> e direitos humanos</h2>
        <p>13<sup>a</sup> edição - 2020</p>
      </div>
      <div className="inscricoes">
        <h2>inscrições</h2>
        <p>faça sua inscrição até 00/00</p>
      </div>
    </section>
  )
}

export default withPlugin(HeaderInfo);
