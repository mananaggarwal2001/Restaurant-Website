import React from 'react'
import Navbar from './Navbar'
import CoverPage from './CoverPage'
import images from '../Images/backgroundTheme.webp'
import SecondSection from './SecondSection'
import BookaTable from './BookaTable'
import Table from './Table'
import TodayMenu from './TodayMenu'
const MainBody = () => {
    const style = {
        backgroundImage: `url(${images})`,
        backgroundRepeat: 'no-repeat'
    }
    return (
        <>
            <div   style={style}>
                <Navbar />
                <CoverPage />
            </div>
            <div className="secondSection">
                <SecondSection/>
            </div>
            <div>
                <BookaTable/>
            </div>
            <div>
                <Table/>
            </div>
            <div>
                <TodayMenu/>
            </div>
        </>

    )
}

export default MainBody