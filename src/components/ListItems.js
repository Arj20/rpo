import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';




export const ListItems = ({ links }) => {

    return (
        <Box>
            <Typography variant="h6" fontWeight="bold">{links.heading}</Typography>


            {
                links.list.length === 1 ?
                    <List>
                        {
                            links.list.flat(2).map((listItem) =>
                                <ListItem disablePadding key={listItem}>
                                    <ListItemButton sx={{ padding: '0rem' }} >
                                        <ChevronRightIcon />
                                        <ListItemText primary={listItem} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        }
                    </List> :
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} >
                        <List>
                            {
                                links.list[0].flatMap((listItem) =>
                                    <ListItem disablePadding key={listItem}>
                                        <ListItemButton sx={{ padding: '0rem' }} >
                                            <ChevronRightIcon />
                                            <ListItemText primary={listItem} />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            }
                        </List>
                        <List>
                            {
                                links.list[1].flatMap((listItem) =>
                                    <ListItem disablePadding key={listItem}>
                                        <ListItemButton sx={{ padding: '0rem' }} >
                                            <ChevronRightIcon />
                                            <ListItemText primary={listItem} />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            }
                        </List>
                    </Box>
            }
        </Box >
    );
} 