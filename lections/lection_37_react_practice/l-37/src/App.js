import './App.css';
import { Button, makeStyles, Menu, MenuItem, Switch } from '@material-ui/core';
import { useState } from 'react';
import CustomElem from './CustomElem';

const useStyles = makeStyles((theme) => ({
        default_2: {
            color: 'blue',
            '&:hover .MuiButton-label': {
                transition: '.2s',
                color: 'red',
            }
        },
        default_title: {
            fontSize: `42px`,
        },
        menuItem: {
            paddingLeft: '20px',
            '& .MuiTouchRipple-root': {
                top: '10px',
            }
        },
        buttonActive: {
            color: 'blue',
            '&.Mui-disabled': {
                color: 'brown',
                backgroundColor: 'aqua'
            }
        }
    }
));


function App() {
    const [customs, setCustoms] = useState([{top: 150, left: 70}, {top: 120, left: 0}, {top: 0, left: 67}]);
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [selected, setSelected] = useState(false);

    return (
        <div className="App">
            {String(selected)}
            <Switch
                checked={selected}
                onChange={(event) => {
                    setSelected(event.target.checked)
                }}
            />
            <Button
                disabled={!selected}
                className={classes.buttonActive}
                variant="contained"
            >
                Default
            </Button>


            <Button
                classes={{ label: classes.default_title }}
                className={classes.default_2}
                variant="contained"
                size={'small'}
            >Default 2</Button>
            <br/>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>My account</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>Logout</MenuItem>
            </Menu>
            {customs.map((item) => <CustomElem top={`${item.top}px`} left={`${item.left}px`}/>)}
            <Button onClick={() => {
                const newPositions = customs.map(() => {
                    return {
                        top: Math.floor(Math.random()*300),
                        left: Math.floor(Math.random()*300),
                    }
                });
                setCustoms(newPositions);
            }
            }>
                Shake
            </Button>
        </div>
    );
}

export default App;
