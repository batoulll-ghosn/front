
import { React, useState } from 'react'


function MenuAndContent() {
    const [activePage, setActivePage] = useState('hero'); // Initial active page

    const handleMenuClick = (page) => {
        setActivePage(page);
    }
}
export default MenuAndContent;