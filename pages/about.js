import React from 'react';

 
export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const projects = await res.json()
   
    return { props: { projects} }
  }
 
   
const about = ({projects}) => {
    console.log(projects);
    return (
        <div>
            {
                projects?.map((item, i) => <div key={i}>
<h2>{item.name}</h2>


                </div> )
            }
        </div>
    );
};

export default about;