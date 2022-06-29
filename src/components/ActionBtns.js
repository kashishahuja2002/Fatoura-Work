import React from "react";
import { useNavigate } from "react-router-dom";

const ActionBtns = (props) => {
    const navigate = useNavigate();

    const handleEdit = (e) => {
        navigate('/pages/createEdit?task=edit&id='+e.target.id);
    }

    const handleView = (e) => {
        navigate('/pages/view?id='+e.target.id);
    }

    return(
        <div>
            <button className="action-btn" onClick={handleEdit} id={props.id}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            </button>
            <button className="action-btn" onClick={handleView} id={props.id}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </button>
        </div>
    );
}

export default ActionBtns;