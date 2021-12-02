import React, { useState } from 'react'
import './_header.scss'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch} from 'react-icons/ai'
import { MdNotifications, MdApps} from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = ({handleToogleSidebar}) => {

    const [input, setInput] = useState('')

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
  
        history.push(`/search/${input}`)
     }

    const handleHome = () => {
        history.push('/')
    }

     const user = useSelector(state => state.auth?.user)

     console.log(user, "header")
    return (
        <div className="border border-dark header">
            
            <FaBars className="header__menu" size={26}
            onClick={() => handleToogleSidebar()}
            />
            
            <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className="header__logo" onClick={handleHome} />

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search" value={input} onChange={e => setInput(e.target.value)} />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <dic className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src={user?.photo_URL} alt='avatar' />
            </dic>


        </div>
    )
}

export default Header
