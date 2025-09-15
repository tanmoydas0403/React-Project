// import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

// function Github() {
//     const data = useLoaderData()
//     // const [data, setData] = useState([])
//     // useEffect(() => {
//     //  fetch('https://api.github.com/users/hiteshchoudhary')
//     //  .then(response => response.json())
//     //  .then(data => {
//     //     console.log(data);
//     //     setData(data)
//     //  })
//     // }, [])
    
//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
//     <img src={data.avatar_url} alt="Git picture" width={300} />
//     </div>
//   )
// }

// export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }

import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const { followers, avatar_url, name, bio, html_url } = useLoaderData();

  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg shadow-xl">
      <img
        src={avatar_url}
        alt={`${name}'s avatar`}
        className="w-40 h-40 rounded-full border-4 border-white shadow-md mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">{name}</h1>
      <p className="text-lg text-gray-300 mb-4">{bio}</p>
      <p className="text-xl font-semibold">Followers: {followers}</p>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
      >
        View GitHub Profile
      </a>
    </section>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/tanmoydas0403');
  if (!response.ok) {
    throw new Response('GitHub user not found', { status: response.status });
  }
  return response.json();
};