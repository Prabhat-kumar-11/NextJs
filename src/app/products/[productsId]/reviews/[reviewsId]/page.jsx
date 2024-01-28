import React from 'react'

export default function page({params}) {
  return (
    <div> product {params.productsId}  Reviews{params.reviewsId}</div>
  )
}
