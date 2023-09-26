import React, { useState } from 'react';
import Circle from './circle.jpg';
import './index.css';

const WhyChooseUs = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(
        "Choose the Translators Union for unparalleled linguistic expertise. Our dedicated community of skilled translators covers 20+ languages, ensuring precision and cultural sensitivity. Join us for professional, integrity-driven translations that elevate your content."
    );
    const [editedValues, setEditedValues] = useState([
        "Multilingual Mastery: Our union houses experts fluent in 20+ languages, guaranteeing precise translations across diverse linguistic needs.",
        "Community Collaboration: Join our close-knit community for collaborative knowledge-sharing, ensuring top-notch translation quality.",
        "Unwavering Excellence: We uphold professionalism, integrity, and linguistic mastery, offering a trusted resource for your translation requirements."
    ]);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };

    const handleValueChange = (e, index) => {
        const updatedValues = [...editedValues];
        updatedValues[index] = e.target.value;
        setEditedValues(updatedValues);
    };

    const handleDeleteValue = (index) => {
        const updatedValues = [...editedValues];
        updatedValues.splice(index, 1);
        setEditedValues(updatedValues);
    };

    const saveToDatabase = async () => {
        try {
            const schema = {
                whyus: editedText,
                firsttick: editedValues[0],
                secondtick: editedValues[1],
                thirdtick: editedValues[2],
            };
            console.log(schema);
            console.log(JSON.stringify(schema));
            const response = await fetch('http://localhost:5000/batoul/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(schema),
            });
            console.log(response);
            if (response.ok) {
                console.log('Data saved successfully.');
            } else {
                console.error('Failed to save data to the database.');
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <div>
            <h2>Why Choose Us?</h2>
            {isEditing ? (
                <textarea value={editedText} onChange={handleTextChange} />
            ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '50%' }}>
                        <p>{editedText}</p>
                    </div>
                </div>
            )}
            <div className="content-why">
                <div className="list-why">
                    {editedValues.map((value, index) => (
                        <div key={index} className="list-item">
                            {isEditing ? (
                                <>
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleValueChange(e, index)}
                                    />
                                    <button onClick={() => handleDeleteValue(index)}>Delete</button>
                                </>
                            ) : (
                                <>
                                    <p>{value}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="right-why">
                    <img className="right-circle" src={Circle} alt="Circle" />
                </div>
            </div>
            <button onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            {isEditing && (
                <button onClick={saveToDatabase}>Save to Database</button>
            )}
        </div>
    );
};

export default WhyChooseUs;
