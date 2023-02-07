import React from 'react'
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';


function Body({spotify}) {
    const [{discover_weekly}] = useDataLayerValue();
  return (
    <div className='player_body'>
        <Header spotify={spotify}/>

        <div className='body_info'>
            <img src={discover_weekly?.images[0].url} alt=''/>
            <div className='body_infotext'>
                <strong>PLAYLISTS</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>

            </div>
        </div>

        <div className='body_songs'>
            <div className='body_icons'>
        <PlayCircleFilledIcon className='bodyshuffle'/>
            <FavoriteIcon fontSize='large'/>
            <MoreHorizIcon/>
            </div>
            {discover_weekly?.tracks.items.map(item =>(
            <SongRow track={item.track} />
                ))}
        </div>
    </div>
  );
}

export default Body;