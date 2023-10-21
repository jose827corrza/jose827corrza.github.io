import { Card } from '../components/Card';

export const Projects = () => {
  return (
    <>
      <div className='grid  grid-flow-row grid-cols-3 gap-5 pt-6 h-screen'>
        {
          projects.map(card => (
            <Card
              key={card.repo}
              title={card.title} 
              description={card.description} 
              technologies={card.technologies} 
              repo={card.repo} 
              isDeployed={card.isDeployed}
              deployUrl={card.deployUrl}/>
          ))
        }
      </div>
    </>
  )
}

const projects = [
  {
    title: "Go Store Websockets",
    description: "Backend for an Ecommerce, with auth. Also integrates A module for publish POST's once you are already authenticated",
    technologies: [
      "Golang",
      "Mux",
      "Docker",
      "GORM"
    ],
    repo: "https://github.com/jose827corrza/go-store-websockets",
    isDeployed: true,
    deployUrl: "https://jose827corrza.github.io/go-store-websockets"
  },
  {
    title: "Geek Store",
    description: "Backend for an Ecommerce using NodeJS's framework NestJS, which has few modules that starts from categories, products, brand and also auth for users, allowing to create sale carts",
    technologies: [
      "NodeJs",
      "NestJS",
      "Docker"
    ],
    repo: "https://github.com/jose827corrza/nest_geek_store.git",
    isDeployed: true,
    deployUrl: "https://nest-geek-store.onrender.com/docs/"
  },
  {
    title: "Tweeter FastAPI",
    description: "This API emulates the basic behavior of X, the users password are encrypted and also to create a POST is necesary to login, which return a JWT token to auth",
    technologies: [
      "Python",
      "Docker"
    ],
    repo: "https://github.com/jose827corrza/backend-posts-fastapi",
    isDeployed: true,
    deployUrl: "https://tweet-fastapi.onrender.com/docs"
  },
  {
    title: "Java Spring Market",
    description: "Backend using Java's framework Spring, the basic Ecommerce where the API manages Users and Products tables with relations between these entities",
    technologies: [
      "Java",
      "Spring",
      "Docker"
    ],
    repo: "https://github.com/jose827corrza/java-spring-market.git",
    isDeployed: false,
    deployUrl: ""
  },
  {
    title: "Lambda CRUD Serverless",
    description: "Serverless Lambdas that ease a process explained into the readme file of the repo throuth a schema",
    technologies: [
      "AWS",
      "Serverless",
      "Javascript"
    ],
    repo: "https://github.com/jose827corrza/lambda-crud-aws.git",
    isDeployed: true,
    deployUrl: "https://rmfuoiqto7.execute-api.us-east-1.amazonaws.com/dev"
  },
  {
    title: "Forgetn't me",
    description: "Web TODO, which persists the tasks in the Cloud through the use of Firebase, it algo has a module to publish diffetent POST's which everyone registered in the app can see and comment about it",
    technologies: [
      "Typescript",
      "Firebase",
      "Tailwind"
    ],
    repo: "https://github.com/jose827corrza/to-forgetnt-me.git",
    isDeployed: true,
    deployUrl: "https://forget-nt-me.netlify.app/"
  },
  {
    title: "Rick And Morty",
    description: "Single pages that shows the info provided by the official Rick And Morty's free API. Implement important topics in React such state, effect and callbacks",
    technologies: [
      "Javascript",
      "Tailwind",
      "Vite"
    ],
    repo: "https://github.com/jose827corrza/rickAndMorty-app.git",
    isDeployed: true,
    deployUrl: "https://rickzable-with-hooks.netlify.app/"
  },
  {
    title: "Guess the Pokemon",
    description: "Basic game for iOS devices using Storyboard instead of SwiftUI, consumes info from PokeAPI, in the repo you can dive deeper into the functionality",
    technologies: [
      "Swift"
    ],
    repo: "https://github.com/jose827corrza/guess-the-pokemon-ios.git",
    isDeployed: false,
    deployUrl: ""
  },
  {
    title: "Dealing Tasking",
    description: "TODO app that persist data in Datastore which is a service from Firebase",
    technologies: [
      "Kotlin"
    ],
    repo: "https://github.com/jose827corrza/DealingTasking.git",
    isDeployed: true,
    deployUrl: "https://play.google.com/store/apps/details?id=com.josedev.dealingtasking"
  },
  {
    title: "Poke Infopedia",
    description: "Shows all the pokemons provided by the PokeAPI, also let us to observe detailed information about each Pokemon",
    technologies: [
      "Kotlin"
    ],
    repo: "https://github.com/jose827corrza/Poke-InfoPedia.git",
    isDeployed: true,
    deployUrl: "https://play.google.com/store/apps/details?id=com.josedev.pokedex"
  },
  // This app allows you to save your taks into the local memory of your Android device, these tasks are protected by  auth using either your patron or your previous registered fingerprint access
]
