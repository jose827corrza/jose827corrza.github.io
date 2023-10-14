import { HashRouter, useRoutes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { AboutMe } from "./Pages/AboutMe"
import Projects from "./Pages/Projects"
import NotFound from "./Pages/NotFound"
import { Layout } from "./containers/Layout"


function App() {

  const AppRoutes = () => {
    const routes = useRoutes([
      {path: '/', element: <Home />},
      {path: '/about-me', element: <AboutMe />},
      {path: '/projects', element: <Projects />},
      {path: '*', element: <NotFound />},
    ])
    return routes
  }

  return (
    <>
      <HashRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </HashRouter>
    </>
  )
}

export default App
