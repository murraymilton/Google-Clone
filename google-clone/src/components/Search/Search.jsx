import React, { useState } from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import {Button} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
function Search() {
    const [input, setInput] = useState("")
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        // Will prevent the page from reloading, will be the input value used to render user search results.

        //Added a console.log. To check the enter key response
        console.log("The Google Search or Enter key was hit!!!! Show search page for >>>", input)

        // Will re-direct user to the search page to view search results
         history.push('/search')
    };
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            <div className="search__buttons">
                <Button type='submit'onClick={search}variant="outlined"> Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search
