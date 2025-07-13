import Image from 'next/image'
import { FiHome } from 'react-icons/fi'
import { TbMessageChatbot } from 'react-icons/tb'
import { BsCurrencyDollar } from 'react-icons/bs'
import Footer from '@/components/Footer'

export default function Home () {
  return (
    <>
      <div className='relative w-full h-[665px]'>
        <Image
          src='/home.jpg'
          alt='Hero Image'
          fill
          className='object-cover'
          priority
        />

        <span className='absolute top-[60px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 text-4xl font-bold text-center px-4'>
          Find Your Perfect Home with
        </span>

        <span className='absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 text-4xl font-bold text-center px-4'>
          RentNest
        </span>

        <span className='absolute top-[180px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 text-lg text-center px-4 max-w-[600px]'>
          Discover shared living spaces tailored to your lifestyle and budget.
          Connect with like-minded roommates and simplify your rental journey.
        </span>

        <div className='absolute top-[250px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-[300px] sm:w-[400px] md:w-[500px]'>
          <input
            type='text'
            placeholder='Search for homes...'
            className='flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none'
          />
          <button className='bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition'>
            Search
          </button>
        </div>
      </div>

      {/* Key Features Section (below the image) */}
      <div className='w-full py-10 px-6 bg-white'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
          Key Features
        </h2>
        <p className='text-gray-600 max-w-3xl '>
          Explore smart roommate matching, real-time ai chat support, and easy
          rent splitting — all in one place.
        </p>
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4'>
          <div className='border-2 p-4 border-gray-300 rounded-xl h-[220px]'>
            <FiHome className='w-6 h-6 mb-4 ' />
            <p className='font-semibold text-2xl mb-2'>Smart match</p>
            <span className='text-gray-600'>
              Our intelligent algorithm matches you with compatible roommates
              based on your preferences and lifestyle.
            </span>
          </div>
          <div className='border-2 p-4 border-gray-300 rounded-xl h-[220px]'>
            <TbMessageChatbot className='w-7 h-7 mb-3' />
            <p className='font-semibold text-2xl mb-2'>AI ChatBot</p>
            <span className='text-gray-600'>
              Get instant support and answers to your questions with our
              AI-powered chatbot.
            </span>
          </div>
          <div className='border-2 p-4 border-gray-300 rounded-xl h-[220px]'>
            <BsCurrencyDollar className='w-6 h-6 mb-4' />
            <p className='font-semibold text-2xl mb-2'>Rent Splitter</p>
            <span className='text-gray-600'>
              Easily split rent and expenses with roommates, ensuring fair and
              transparent payments.
            </span>
          </div>
        </div>
        <div className='mt-10 p-4'>
          <p className='font-semibold text-2xl mb-2'>What our users say</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className=' p-1'>
              <Image
                src='/user1.png'
                alt='User Avatar'
                width={500}
                height={300}
                className='mb-4'
              />
              <p className='mb-2'>
                "RentNest made finding a roommate so easy! I connected with
                someone who shares my interests and we found a great place
                together."
              </p>
              <span className=' text-gray-500'>Sophia, Student</span>
            </div>
            <div className=' p-1'>
              <Image
                src='/user2.png'
                alt='User Avatar'
                width={500}
                height={300}
                className='mb-4'
              />
              <p className='mb-2'>
                "The Rent Splitter feature is a game-changer. No more awkward
                conversations about bills, it's all handled automatically."
              </p>
              <span className=' text-gray-500'>Ethan, Young Professional</span>
            </div>
            <div className=' p-1'>
              <Image
                src='/user3.png'
                alt='User Avatar'
                width={500}
                height={200}
                className='h-[230px] mb-4'
              />
              <p className='mb-2'>
                "I love the AI Chatbot, it's always there to help me with any
                questions I have about the app or the rental process."
              </p>
              <span className=' text-gray-500'>Olivia, Student</span>
            </div>
          </div>
        </div>

        <div className='mt-20 text-center'>
          <h2 className='text-4xl font-semibold text-gray-800 mb-2'>
            Ready to find your perfect roommate?
          </h2>
          <p className='text-gray-600 mb-10'>
            Join RentNest today and experience the future of shared living.
          </p>
          <button className='bg-blue-400 text-white py-2 px-4 rounded-lg'>
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
