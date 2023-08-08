import * as React from "react"
import "../styles/styles.scss"
import Header from "../components/header"
import Banner from "../components/banner"
import AboutAyataka from "../components/aboutAyataka"
import Video from "../components/video"
import Seo from "../components/seo"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutAyataka />
    <Video />
    <Footer />
  </div>
)


export const Head = () => <Seo title="Ayataka lover" />

export default IndexPage
