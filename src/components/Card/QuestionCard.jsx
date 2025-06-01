import React, { useEffect, useRef, useState } from 'react'
import { LuChevronDown, LuSparkles } from 'react-icons/lu'
import AiResponsePreview from '../InterviewPrep/AiResponsePreview'

const QuestionCard = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isExpanded) {
      const contentHeight = contentRef.current.scrollHeight
      setHeight(contentHeight + 10)
    } else {
      setHeight(0)
    }
  }, [isExpanded])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div className='bg-white rounded-lg mb-4 overflow-hidden py-4 px-5 shadow-xl shadow-gray-100/7 border border-gray-100/60 group'>
        <div className='flex items-start justify-between cursor-pointer'>
          <div className='flex items-start gap-3'>
            <span className='text-xs md:text-base font-semibold text-black leading-[18px]'>
              Q
            </span>

            <h3
              className='text-xs md:text-[14px] font-medium text-black mr-0 md:mr-2 leading-5'
              onClick={toggleExpand}
            >
              {question}
            </h3>
          </div>

          <div className='flex items-center justify-end ml-4 relative'>
            <div
              className={`flex ${
                isExpanded ? 'md:flex' : 'md:hidden group-hover:flex'
              }`}
            >
              <button
                className='flex items-center gap-2 text-xs text-cyan-800 font-medium bg-cyan-50 px-3 py-1 mr-2 rounded text-nowrap border border-cyan-50 hover:border-cyan-200 cursor-pointer'
                onClick={() => setIsExpanded(true)}
              >
                <LuSparkles />
                <span className='hidden md:block'>Learn More</span>
              </button>
            </div>

            <button
              className='text-gray-400 hover:text-gray-500 cursor-pointer'
              onClick={toggleExpand}
            >
              <LuChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className='overflow-hidden transition-all duration-300 ease-in-out'
          style={{ maxHeight: `${height}px` }}
        >
          <div
            ref={contentRef}
            className='mt-4 text-gray-700 bg-gray-50 px-5 py-3 rounded-lg'
          >
            <AiResponsePreview content={answer} />
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionCard
