import React, { useEffect, useState } from 'react';
import './Footer1.css';

const Footer1 = () => {
    const [footerData, setFooterData] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [updatedData, setUpdatedData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the server when the component mounts
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/footer/getfooter'); // Replace with your API endpoint
                if (response.ok) {
                    const result = await response.json();
                    if (result.data && result.data.length > 0) {
                        setFooterData(result.data[0]);
                        setUpdatedData(result.data[0]);
                    }
                    setIsLoading(false);
                } else {
                    console.error('Failed to fetch data from the server.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData({ ...updatedData, [name]: value });
    };

    const handleSave = async () => {
        // Send edited data back to the server when saving
        try {
            const response = await fetch(`http://localhost:5000/footer/update/${footerData._id}`, {
                method: 'PUT', // Assuming you use PUT for updates
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                console.log('Data updated successfully.');

                // Update the document in MongoDB with the same ID
                const updateResponse = await fetch(`http://localhost:5000/footer/updateDocument/${footerData._id}`, {
                    method: 'PUT', // Assuming you use PUT for updates
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedData),
                });

                if (updateResponse.ok) {
                    console.log(`Document with ID ${footerData._id} updated in MongoDB.`);
                } else {
                    console.error('Failed to update document in MongoDB.');
                }

                setFooterData(updatedData); // Update displayed data
            } else {
                console.error('Failed to update data on the server.');
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
        setEditMode(false); // Exit edit mode
    };

    return (
        <div className="foots">
            <div className="Flex_containerz">
                <div className="flex-itemz">
                    <p> Our Addresses</p>
                    {editMode ? (
                        <>
                            <input
                                type="text"
                                name="address"
                                value={updatedData.address || ''}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="quater"
                                value={updatedData.quater || ''}
                                onChange={handleInputChange}
                            />
                        </>
                    ) : (
                        <>
                            <p style={{ color: 'white' }}>{footerData.address}, Lebanon</p>
                            <p> Our Headquarters</p>
                            <p style={{ color: 'white' }}>{footerData.quater}, U.A.E.</p>
                        </>
                    )}
                </div>
                <div className="flex-itemz">
                    <p className="social-media"> Our Phones</p>
                    {editMode ? (
                        <>
                            <input
                                type="text"
                                name="ophone"
                                value={updatedData.ophone || ''}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="mobilephone"
                                value={updatedData.mobilephone || ''}
                                onChange={handleInputChange}
                            />
                        </>
                    ) : (
                        <>
                            <p style={{ color: 'white' }}>Office Phone: {footerData.ophone}</p>
                            <p style={{ color: 'white' }}>Mobile Phone: {footerData.mobilephone}</p>
                        </>
                    )}
                </div>

                <div className="flex-itemz">
                    <p>Follow us on social media:</p>
                    <div className="social-media">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                        <a href="https://www.github.com" target="_blank" rel="noreferrer">
                            Github
                        </a>
                    </div>
                    <div className="social-media">
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            Instagram
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
            {editMode ? (
                <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleEdit}>Cancel</button>
                </>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
        </div>
    );
};

export default Footer1;
