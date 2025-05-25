import React from 'react'
import { useParams } from 'react-router'

const CollectionGroup = () => {
    const pathParam = useParams();
  return (
    <div>
        <h1>{pathParam?.collectionKey}</h1>
    </div>
  )
}

export default CollectionGroup