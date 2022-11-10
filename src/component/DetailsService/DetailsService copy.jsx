import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';


const DetailsService = () => {
    const navigate =  useNavigate()
    const { user } = useContext(AuthContext)
    const { _id, img, name, description, price } = useLoaderData();
    console.log(user)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;      
        const message = form.message.value;
        console.log(message)
        if (message===''){
            return alert('please enter a description')
        }
        const reviews = {
            customer: user?.displayName,
            message
        }
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='w-10/12 mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">Service: {name}</h2>
                    <h2 className="card-title">Price: ${price}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

          
        </div>
    );
};

export default DetailsService;