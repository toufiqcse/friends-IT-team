const SingleProjects = ({ }) => {
    return <div>Member Details</div>
}




// export const getServerSideProps = async (ctx) => {
//     const params = ctx.params;
//     try {
//         const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
//         if (!res.ok) {
//             throw new Error('Failed to fetch user data');
//         }
//         const singleProduct = await res.json();
//         return {
//             props: {
//                 singleProduct,
//             }
//         };
//     }
//     catch (error) {
//         return {
//             notFound: true,
//         }
//     }
// }
export default SingleProjects