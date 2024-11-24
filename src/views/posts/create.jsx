// import useState
import { useState } from 'react';

// import useNavigate
import { useNavigate } from 'react-router-dom';

// import API
import api from '../../api';

export default function PostCreate() {

    // define state
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            HALAMAN POST CREATE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}