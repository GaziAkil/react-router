import React from 'react'
// for passing dynamic parameters
import { useParams } from 'react-router-dom';

export default function Posts() {
const parameter = useParams(); // const {category, topic} = useParams();
  return (
    <div>
      <h2>Dynamic post page: [Category: { parameter.category } | Topic: { parameter.topic }]</h2>
    </div>
  )
}
