import Home from "./page/Home"
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {

  return (
    <div>
    <Home />
    <SpeedInsights/>
    </div>
  )
}

export default App