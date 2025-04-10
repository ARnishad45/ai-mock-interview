import { SignUp } from "@clerk/clerk-react"

const signup = () => {
    return (
      <div>
        <SignUp path="/signup"/>
      </div>
    )
  }
  
  export default signup