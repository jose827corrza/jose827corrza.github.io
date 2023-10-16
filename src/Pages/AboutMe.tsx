import react from '../assets/react.png'
import node from '../assets/node.png'
import golang from '../assets/golang.png'
import python from '../assets/python.png'
import graphql from '../assets/graphql.png'
import aws from '../assets/aws2.png'
import nest from '../assets/nest.png'
import postgres from '../assets/postgres.png'
import mongo from '../assets/mongo.png'
import sequelize from '../assets/sequelize.png'

export const AboutMe = () => {
  return (
    <>
      <div className='flex w-full h-screen'>
        <div className='flex w-1/2 h-full justify-center items-center pl-5'>
          <div className="flex flex-col">
            <h2 className="text-2xl font-sans font-extrabold">About me</h2>
            <br />
            <p className="text-xl font-sans font-medium">My name is Jose Daniel I am 26 years old. I am electromechanical
              engineer, continuous learner, autodidact, and tech enthusiastic. I have been working
              as a backend developer for more than a year in a fintech company. At the same time I've been learning 
              about technologies, which I've used for creating a few APIs, apps and some frontends apps 🚀.
            </p>
            <br />
            <p className="text-xl font-sans font-medium">My hobbies are playing with IoT stuff, skate, walking around the city and being a beer taster. </p>
          </div>
        </div>
        <div className='flex w-1/2 h-full justify-center items-center'>
          <div className="flex flex-col">
            <h2 className="text-2xl font-sans- font-extrabold">Technologies</h2>
            <br />
            <h3 className="text-xl font-sans- font-bold">Frontend</h3>
            <br />
            <section className="flex">
              <img className='h-12 w-14 resize' src={react} alt="react" />
            </section>
            <br />
            <h3 className="text-xl font-sans- font-bold">Backend</h3>
            <br />
            <section className="grid grid-flow-col gap-2">
              <img className='h-14 w-12 resize' src={node} alt="react" />
              <img className='h-12 w-14 resize' src={golang} alt="react" />
              <img className='h-14 w-12 resize' src={python} alt="react" />
            </section>
            <h3 className="text-xl font-sans- font-bold">Tools</h3>
            <br />
            <section className="grid grid-flow-col gap-2">
              <img className='h-14 w-14 resize' src={graphql} alt="react" />
              <img className='h-14 w-14 resize' src={aws} alt="react" />
              <img className='h-14 w-14 resize' src={nest} alt="react" />
            </section>
            <h3 className="text-xl font-sans- font-bold">Database</h3>
            <br />
            <section className="grid grid-flow-col gap-2">
              <img className='h-14 w-14 resize' src={postgres} alt="react" />
              <img className='h-14 w-14 resize' src={mongo} alt="react" />
              <img className='h-14 w-14 resize' src={sequelize} alt="react" />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
