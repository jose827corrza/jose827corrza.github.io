import { HashRouter, useRoutes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { AboutMe } from "./Pages/AboutMe"
import Projects from "./Pages/Projects"
import NotFound from "./Pages/NotFound"
import { Layout } from "./containers/Layout"
import NavBar from "./components/NavBar"


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
        <NavBar />
        <Layout>
          <AppRoutes />
        </Layout>
      </HashRouter>
    </>
  )
}

export default App
