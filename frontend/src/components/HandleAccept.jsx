import React, { useState, useEffect } from 'react';

function HandleAccept({id}) {
    const [DeleteCustomer, setDeleteCustomr] = useState();

    useEffect(() => {
        fetch(`/api/customers/${id}`, { method: 'DELETE' })
            .then(() => setDeleteCustomr('Delete successful'));
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">DELETE Request with React Hooks</h5>
            <div className="card-body">
                Status: {DeleteCustomer}
            </div>
        </div>
    );
}

export default HandleAccept;