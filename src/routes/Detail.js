import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail(props) {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    React.useEffect(() => {
        if (location.state == null) {
            navigate('/');
        }
    }, [location, navigate]);
    return <span>{location.state.title}</span>
}

export default Detail;