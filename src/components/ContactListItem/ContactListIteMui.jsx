import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export const ListItemMui = ({ id, name, number, onDeleteBtn }) => {
  return (
    <ListItem
      alignItems="flex-start"
      key={id} // To remove warning from Console.
      id={id}
      name={name}
      number={number}
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {number}
            </Typography>
          </>
        }
      />
      <Divider variant="inset" component="p" absolute="true" />
    </ListItem>
  );
};
