import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function Baba() {
  return (
    <AvatarGroup total={0} id='caa'>
      <Avatar id="ur" alt="Remy Sharp" src="https://randomuser.me/api/portraits/woman/79.jpg" />
      <Avatar id="ur" alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar id="ur" alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar id="ur" alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      <Avatar id="ur" alt="Trevor Henderson" src="/static/images/avatar/5.jpg" >9+</Avatar>
    </AvatarGroup>
  );
}