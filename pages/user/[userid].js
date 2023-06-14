import React from 'react';

// hello 

const SingleUser = ({user}) => {
    console.log(user);

    return (
        <div>
            <h2>Test user page {user.name} </h2>
        </div>
    );
};

export async function getServerSideProps(context) {
    const id = context.params.userid;
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await data.json();
    return {
        props: { user }
    }
}



export default SingleUser

