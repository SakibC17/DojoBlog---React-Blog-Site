import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <>
            <div>
                <h1>Sorry</h1>
                <br />
                <h2>That Page Cannot Be Found - 404</h2>
                <br />
                <Link to="/">Back to the Home Page</Link>
            </div>
        </>
    );
}