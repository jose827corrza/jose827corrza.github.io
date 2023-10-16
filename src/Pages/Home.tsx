import image from '../assets/image.jpg'

export const Home = () => {
  return (
    <>
      <div className='flex w-screen h-screen'>
        <div className='flex w-1/2 h-full justify-center items-center'>
          <div className="flex flex-col">
            <h2 className="text-2xl font-sans font-extrabold">Hey</h2>
            <h2 className="text-2xl font-sans font-extrabold">I AM JOSE DANIEL CORREDOR</h2>
            <p className="text-xl font-sans font-medium">Engineer, Backend developer pasisonate with tech and mobile development</p>
          </div>
        </div>
        <div className='flex w-1/2 h-full justify-center items-center'>
          <div >
            <img className='object-cover h-64 w-64 rounded-full' src={image} alt="image" />
          </div>
        </div>
      </div>
    </>
  )
}
