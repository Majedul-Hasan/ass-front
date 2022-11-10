import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';


const MyReview = () => {
  const data = useLoaderData()
  console.log(data);
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
        <th className='w-4/6  '>Review</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
    {
        data.map((review, i) => (<tr>
          <th>{i+1}</th>
          <td>{review.service}</td>
          <td className='flex flex-wrap '>{review.message}</td>
          <td> <AiFillEdit /> </td>
          <td><AiFillDelete /> </td>
        </tr>))
    }
      
     
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default MyReview