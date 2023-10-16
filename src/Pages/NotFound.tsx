import scarecrow from '../assets/Scarecrow.png'

export const NotFound = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-background">
      <div className='grid justify-items-center'>
        <img src={scarecrow} alt="scarecrow" className='scale-50'/>
        <h1 className='absolute bottom-20 text-3xl text-black font-sans font-extrabold'>You went further :^ 404</h1>
      </div>
    </div>
  )
}
