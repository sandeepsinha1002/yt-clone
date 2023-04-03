import { Stack , Box } from '@mui/system'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ({videos}) => {
  return (
    <div className='p'>
    <Stack direction='row' flexWrap='wrap'
    justifyContent='start' alignItems='start' gap={1}>
      {videos.map((item,idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
    </div>
  )
}

export default Videos