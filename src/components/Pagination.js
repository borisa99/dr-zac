import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { cn } from '../lib/helper'
import Link from '@/resolvers/Link'
import { usePagination, DOTS } from '@/hooks/usePagination'

const Pagination = ({
  siblingCount = 1,
  currentPage,
  totalPageCount,
  className,
  url = '/blog/archive/',
}) => {
  const paginationRange = usePagination({
    totalPageCount,
    currentPage,
    siblingCount,
  })

  return (
    <div
      className={cn(
        'flex items-center justify-center px-4 py-6 sm:px-6',
        className,
      )}
    >
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          to={`${url}${currentPage - 1 < 2 ? '' : currentPage - 1 + '/'}`}
          className={cn(
            'relative inline-flex items-center rounded-md border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50',
            {
              'pointer-events-none bg-gray-100': currentPage === 1,
            },
          )}
        >
          Previous
        </Link>
        <Link
          to={`${url}${
            currentPage === totalPageCount ? totalPageCount : currentPage + 1
          }/`}
          className={cn(
            'relative ml-3 inline-flex items-center rounded-md border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50',
            {
              'pointer-events-none bg-gray-100': currentPage === totalPageCount,
            },
          )}
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px  rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link
              to={`${url}${currentPage - 1 < 2 ? '' : currentPage - 1 + '/'}`}
              className={cn(
                'relative inline-flex items-center rounded-l-md border border-gray-200 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20',
                {
                  'pointer-events-none bg-gray-100': currentPage === 1,
                },
              )}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>

            {paginationRange.map((pageNumber, i) => {
              if (pageNumber === DOTS) {
                return (
                  <span
                    key={i}
                    className="relative inline-flex items-center border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    ...
                  </span>
                )
              }

              return (
                <Link
                  to={`${url}${pageNumber === 1 ? '' : pageNumber + '/'}`}
                  key={i}
                  className={cn(
                    'relative hidden items-center border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex',
                    {
                      'pointer-events-none z-10 border-blue-500 bg-blue-50 text-blue-600':
                        pageNumber === currentPage,
                    },
                  )}
                >
                  {pageNumber}
                </Link>
              )
            })}
            <Link
              to={`${url}${
                currentPage === totalPageCount
                  ? totalPageCount
                  : currentPage + 1
              }/`}
              className={cn(
                'relative inline-flex items-center rounded-r-md border-b border-r border-t border-gray-200 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20',
                {
                  'pointer-events-none bg-gray-50':
                    currentPage === totalPageCount,
                },
              )}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
