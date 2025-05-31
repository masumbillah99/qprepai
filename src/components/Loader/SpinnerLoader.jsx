import React from 'react'

const SpinnerLoader = () => {
  return (
    <div role='status'>
      {/* <svg
        width='20'
        height='20'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ animation: 'spin 1s linear infinite' }}
      >
        <circle
          cx='20'
          cy='20'
          r='16'
          stroke='#4f46e5'
          strokeWidth='4'
          fill='currentColor'
          opacity='0.2'
        />
        <path
          d='M36 20a16 16 0 1 1-8-13.856'
          stroke='#000000'
          strokeWidth='4'
          fill='currentFill'
          strokeLinecap='round'
        />
      </svg> */}

      <svg
        className='animate-spin h-5 w-5 dark:text-[#4f46e5] fill-cyan-500'
        fill='none'
        viewBox='0 0 100 101'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1373 27.4535 91.5094 50 91.5094C72.5465 91.5094 90.9186 73.1373 90.9186 50.5908C90.9186 28.0443 72.5465 9.67224 50 9.67224C27.4535 9.67224 9.08144 28.0443 9.08144 50.5908Z'
          fill='currentColor'
        />
        <path
          d='M93.9676 39.0408C96.1771 37.1304 95.0072 33.5805 91.9697 33.5805H82.0459C79.8364 33.5805 78.6665 37.1304 80.876 39.0408L88.6463 46.8111C90.8558 48.7215 94.4057 48.7215 96.6152 46.8111L93.9676 39.0408Z'
          fill='currentFill'
        />
      </svg>

      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default SpinnerLoader
