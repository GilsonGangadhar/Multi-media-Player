import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import "./_categoriesBar.scss"

const keywords = [
    'All',
    'React js',
    'Next js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Hindi Songs',
    'Coding',
    'Cricket',
    'Football',
    'Barcelona',
    'Gatsby',
    'Story Recapped',
    'Ghost Series',
 ]

const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All')

    const dispatch = useDispatch()

    const handleClick = (value) => {
        setActiveElement(value)
        if (value === 'All') {
            dispatch(getPopularVideos())
         } else {
            dispatch(getVideosByCategory(value))
         }
    }

    console.log(activeElement, "activeElement")
    return (
        <div className="categoriesBar">
            {
                keywords.map((value,i) => (
                    <span 
                    onClick={()=> handleClick(value)}
                    key={i}
                    className={activeElement === value? "active" : ""}
                    >{value}</span>
                   
                ))
            }
        </div>
    )
}

export default CategoriesBar
