import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const AiResponsePreview = ({ content }) => {
  if (!content) return null

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='text-[14px] font-body prose prose-slate-dark:prose-invert max-w-none'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p ({ children }) {
              return <p className='mb-4 leading-5'>{children}</p>
            },
            strong ({ children }) {
              return <strong>{children}</strong>
            },
            em ({ children }) {
              return <em>{children}</em>
            },
            ul: ({ children }) => (
              <ul className='list-disc ml-6'>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className='list-decimal ml-6'>{children}</ol>
            ),
            li: ({ children }) => <li className='my-1'>{children}</li>,
            blockquote ({ children }) {
              return (
                <blockquote className='border-l-4 border-gray-200 pl-4 italic'>
                  {children}
                </blockquote>
              )
            },
            h1 ({ children }) {
              return (
                <h1 className='text-2xl font-bold mb-4 mt-6'>{children}</h1>
              )
            },
            h2 ({ children }) {
              return <h2 className='text-xl font-bold mb-4 mt-6'>{children}</h2>
            },
            h3 ({ children }) {
              return <h3 className='text-lg font-bold mb-4 mt-6'>{children}</h3>
            },
            h4 ({ children }) {
              return (
                <h4 className='text-base font-bold mb-4 mt-6'>{children}</h4>
              )
            },
            a ({ children }) {
              return (
                <a href={href} className='text-blue-600 hover:underline'>
                  {children}
                </a>
              )
            },
            table: ({ children }) => (
              <table className='min-w-full border-collapse border border-gray-200'>
                {children}
              </table>
            ),
            thead: ({ children }) => (
              <thead className='bg-gray-100'>{children}</thead>
            ),
            tbody: ({ children }) => <tbody>{children}</tbody>,
            th: ({ children }) => (
              <th className='border border-gray-200 px-4 py-2'>{children}</th>
            ),
            tr: ({ children }) => (
              <tr className='border-b border-gray-200'>{children}</tr>
            ),
            td: ({ children }) => (
              <td className='border border-gray-200 px-4 py-2'>{children}</td>
            ),
            hr: () => <hr className='my-4 border-gray-200' />,
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt}
                className='max-w-full h-auto rounded-lg shadow-sm'
              />
            ),
            code: ({ children }) => (
              <code className='bg-gray-100 px-1 py-0.5 rounded text-sm font-mono'>
                {children}
              </code>
            )
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default AiResponsePreview
