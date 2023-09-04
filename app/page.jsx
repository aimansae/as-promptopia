
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share
        <p className="max_md:hidden">
          <span className="orange_gradient text-center">Ai Powered Prompts</span>
        </p>
      </h1>
      <p className="desc - text-center"> Promptopia is an open AI prompting tool fgot modern world to discover, create and share creative contents.</p>
      <Feed />

    </section>
  )
}

export default Home
