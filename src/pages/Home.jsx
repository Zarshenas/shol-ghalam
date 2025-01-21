import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to={"/signup"}>signup</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to={"/login"}>login</Link>
    </>
  )
}

export default Home