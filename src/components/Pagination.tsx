import React from 'react'

interface IProps {
    count: number,
    setPage: (index: number) => void
}

export default function Pagination(props: IProps) {
  const { count, setPage } = props
  const [currentPage, setCurrentPage] = React.useState(count)

  const onChangePage = (index: number) => {
      setPage(index)
      setCurrentPage(index)
  }
  
  return (
    <ul>
        {[...Array(count)].map((element, index: number) =>
        <li key={index} onClick={() => onChangePage(index+1)}>{index+1}</li>)}
    </ul>
  )
}
