import { AiFillGithub } from 'react-icons/ai';
import { FaRocket } from 'react-icons/fa';


interface Props {
    title: string,
    description: string,
    technologies: string[],
    repo: string,
    isDeployed: boolean,
    deployUrl?: string
}

export const Card = (data: Props) => {
    
  return (
    <div className='card w-96 h-56 bg-gray-200'>
        {/* <img src={go} className='w-full h-48 object-cover' alt="test" /> */}
        <h4 className="text-lg font-sand font-bold">{data.title}</h4>
        <p>{data.description}</p>
        <section className="flex gap-1 m-3">
            {
                data.technologies.map(technology => (
                    <p className="bg-gray-300 rounded-md px-2 py-1 text-xs" key={technology}>{technology}</p>
                ))
            }
          {/* <p className="bg-gray-300 rounded-md px-2 py-1 text-xs">Swift</p>
          <p className="bg-gray-300 rounded-md px-2 py-1 text-xs">Kotlin</p> */}
        </section>
        <div className="flex">
          <a href={data.repo} className='mx-2'>
                <AiFillGithub fill="#000" size={18}/>
          </a>
          {
            data.isDeployed
            ?
            <a href={data.deployUrl} className='mx-2' rel="noopener noreferrer">
                <FaRocket fill="#FFD700" size={18}/>
            </a>
            :
            <></>
          }
        </div>
      </div>
  )
}
