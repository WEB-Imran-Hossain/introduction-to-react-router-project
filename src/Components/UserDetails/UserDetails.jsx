import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
const {name, website, phone, company}=user;
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
        </div>
    );
};

export default UserDetails;