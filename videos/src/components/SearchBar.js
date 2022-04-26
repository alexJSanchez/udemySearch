import React from 'react'

class SearchBar extends React.Component{
    render(){
        return (
            <div className='search-bar ui segment'>
                <form className='ui form'>
                    <div className='feild'>
                        <label>Video Search
                            <input type="text" />
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;