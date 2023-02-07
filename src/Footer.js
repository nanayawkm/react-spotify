import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid,Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';


function Footer() {
  return (
    <div className='footer'>
        <div className='footer_left'>
            <img className='footer_album_logo' src='https://i.discogs.com/Nmd5Q6LnfiBIFt_FTsOEws-Hbph4JUVNEp4kCPbf_yc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQzMDAx/MzctMTYzMzUzOTg0/OS0zNDU4LmpwZWc.jpeg' alt=''/>
           <div className='footer_songInfo'>
            <h4>Cinderella Man</h4>
            <p>Eminem</p>
            </div>  
        </div>
        <div className='footer_center'>
            <ShuffleIcon className='footer_green'/>
            <SkipPreviousIcon className='footer_icon'/>
            <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
            <SkipNextIcon className='footer_icon'/>
            <RepeatIcon className='footer_green'/>
        </div>
        <div className='footer_right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon/>
                </Grid>
                <Grid item xs>
                    <Slider/>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer