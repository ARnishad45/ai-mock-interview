import { SignIn } from "@clerk/clerk-react"

const signin = () => {
  return (
    <div>
      <SignIn path="/signin"/>
    </div>
  )
}

export default signin
