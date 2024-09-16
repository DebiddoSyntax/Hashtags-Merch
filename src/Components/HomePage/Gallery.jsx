import React from 'react'
import photo1 from '../Assets/photo1.jpg'
import photo2 from '../Assets/photo2.jpg'
import photo3 from '../Assets/photo3.jpg'
import ReactPlayer from 'react-player'



const HashtagsVideo = () => {
  return (
    <div><ReactPlayer url={'/video/Brandvideo.mp4'} className='' width="100%" height="50%" controls/></div>
  )
}


const Gallery = () => {
  return (
    <div className='flex flex-col justify-between items-center mt-24 px-5 md:px-10'>
      <h1 className='mt-5 text-2xl md:text-3xl lg:text-3xl font-semibold text-blue-700'>Our Gallery</h1>
      <p className='mt-5 md:mt-7 text-center text-lg md:text-xl font-semibold'>To feature on our gallery, take the best pictures with our wears, upload it on any social media with the hashtag <span className='font-bold text-blue-700'>#TrendwithHashtagsMerch</span></p>
      
      
          <div className='px-0 mt-10'>
            <HashtagsVideo className=''/>
          </div>


          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 mt-3 h-auto w-full max-w-[1920px]'>

                <div className='h-auto'>
                  <img src={photo1} alt="" className='h-52 md:h-96 w-full' />
                </div>

                <div className='h-auto'>
                  <img src={photo2} alt="" className='h-52 md:h-96 w-full'/>
                </div>

                <div className='h-auto'>
                  <img src={photo3} alt="" className='h-52 md:h-96 w-full' />
                </div>

                <div className='h-auto'>
                  <img src={photo3} alt="" className='h-52 md:h-96 w-full' />
                </div>

          </div>

    
    
    </div>
  )
}

export default Gallery