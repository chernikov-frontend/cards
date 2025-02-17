import React from "react";

interface CardProps {
    title: string;
    text: string;
    image?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, text, image, children }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
        {image && <img src={image} className="card-img-top" alt="Card Image" />}
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            {children}
        </div>
        </div>
    );
};

export default Card;
