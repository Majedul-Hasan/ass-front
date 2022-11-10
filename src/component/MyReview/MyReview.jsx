import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SignleReviewTr from './SignleReviewTr';


const MyReview = () => {
  const data = useLoaderData()
  const [dataDelt, setDataDelt] = useState(false)
  const [orders, setOrder] = useState([]); 


  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this order')
    if (proceed) {
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount
                  > 0) {
                      alert('deleted successfully')
                    setDataDelt(true)
                    console.log(dataDelt)
                    const remainging = orders.filter(odr => odr._id !== id);
                    setOrder(remainging)
                }})
              }
            }
  


            const handleApprovingStatus =( id, message) => {
              fetch(`http://localhost:5000/review/${id}`, {
                  method: 'PATCH',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify({ message: message })
              })
                  .then(res => res.json())
                  .then(data => {
                      console.log(data);                     
                  })
          }
      

  return (
    <div>
    <h1>My Review</h1>
      <div>
      <div className="overflow-x-auto">
  <table className="table table-zebra w-full">

    <thead>
      <tr>
        <th>sl</th>
        <th>Service Name</th>
        <th className='w-4/6'>Review</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
    {
        data.map((review, i) => <SignleReviewTr review ={review} key = {review._id} i= {i} handleDelete= {handleDelete} handleApprovingStatus={handleApprovingStatus}/> )
    }
      
     
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default MyReview