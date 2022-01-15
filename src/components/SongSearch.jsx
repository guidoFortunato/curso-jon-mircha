import React, { useState, useEffect } from 'react';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import Loader from './Loader'


const SongSearch = () => {
    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSearch = (data)=>{
        setSearch(data)
    }
    return (
        <div>
            <h2>Song Search</h2>
            { loading && <Loader />}
            <SongForm handleSearch={handleSearch} />
            <SongDetails search={search} lyric={lyric} bio={bio} />
        </div>
    )
}

export default SongSearch
