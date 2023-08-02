/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './Media.css';
import { fetchSearchedGiphys, fetchTrendingGiphys } from '../Api/giphyApi';
import TrendingGiphy from './TrendingGiphy.js';
import giphyArtists from '../Artists'
import ArtistGiphy from './ArtistGiphy';
import ClipsGiphySection from './ClipsGiphySection';

const Media = () => {
    const [trending, setTrending] = useState([]); //usestate is used to update the element when the page id reloaded
    const [artists, setArtists] = useState([]);
    const [clips, setClips] = useState([]);

const randomizeData = (content) => {
    return content.data.sort(()=>Math.random()-0.5);
};

//for trending
const getTrendingGiphys = async () => {
    //get the giphy by calling the api
    const trending = await fetchTrendingGiphys();
    //set the trending giphy
    setTrending(randomizeData(trending.data));
};
//for artists
const getArtists = async () =>{
    const artists = await Promise.all
    (
        giphyArtists.map(async(giphyArtist)=> {
         return fetchSearchedGiphys(giphyArtist).then((res)=>res.data.data);
        })
    );
    setArtists(artists.flat());
}

//for clips
const getSearchedGiphys = async (query, setState) => {
    const searched = await fetchSearchedGiphys(query);
    setState(randomizeData(searched.data));
};


useEffect(() => {
    getTrendingGiphys();
    getArtists();
    getSearchedGiphys("coffee",setClips);
}, []);

console.log(clips, 'what is in the clips!');

  return (
    <div className='media'>
        {/*trending componente*/}
        <div className='row'>
            <div className='row-header'>
                <img src='/images/Trending.svg' alt='Trending'></img>
                <h1>Trending</h1>
            </div> 
            {/*trending giphys and looping them section*/}
            <div className='trending-container'>
            {trending?.map((trendingGiphy, index)=>{
                    return <TrendingGiphy giphy = {trendingGiphy} key = {index}></TrendingGiphy>
                })}
            </div>
        </div>

        {/*artists component*/}
        <div className='row'>
            <div className='row-header'>
                <img src='/images/Artists.svg' alt='Artists'></img>
                <h1>Artists</h1>
            </div>
            <div className='artists-container'>
                {/**loop through artist.js and show them */}
                {artists.map((artistGiphys, index)=>{
                    return <ArtistGiphy giphy = {artistGiphys} key = {index}></ArtistGiphy>;
                })}
            </div>
        </div>

        {/*clips component*/}
        <div className='row'>
            <div className='row-header'>
                <img src='/images/Clips.svg' alt='Clips'></img>
                <h1>Clips</h1>
            </div>
            <div className='clips-container'>
                <ClipsGiphySection giphysArray = {clips}></ClipsGiphySection>
            </div>
        </div>       

        <div className='row'>
            <div className='row-header'>
                <img src='/images/Stories.svg' alt='Stories'></img>
                <h1>Stories</h1> 
            </div>
            <div className='stories-container'>
                <p>Content</p>
            </div>
        </div>

    </div>
  )
}

export default Media
