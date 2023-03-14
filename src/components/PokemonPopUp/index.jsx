import * as React from "react";
import { Button, Dialog, DialogContent, DialogActions, Typography, Box } from '@mui/material';
import { useState } from "react";


export default function PokemonPopUp({ selectedPokemon }) {

    const [open, setOpen] = useState(false);




    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const capitalizeFirstLetter = (string) => {
        if (string) {

            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
    return (
        <div>

            <Button sx={{ fontSize: '1.2rem', top: '-37px', left: '90px' }} onClick={handleOpen}>🛈</Button>
            <Dialog PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    backgroundImage: `url(/Pokedex/assets/pokedex.png)`,
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '20px',
                    position: 'relative',
                    height: '500px',
                    width: '400px',
                },
            }} open={open} onClose={handleClose}>
                <DialogContent>
                    <img style={{
                        width: '180px',
                        height: '180px',
                        position: 'absolute',
                        top: '12%',
                        left: '38%',
                    }} src={selectedPokemon?.data?.sprites.front_default} alt={selectedPokemon?.data?.name} />
                    <Box sx={{
                        position: 'absolute',
                        bottom: '20%',
                        left: '44%',
                    }}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="body1">{capitalizeFirstLetter(selectedPokemon?.data?.name)}</Typography>
                        <Typography variant="body1">Height: {selectedPokemon?.data?.height}</Typography>
                        <Typography variant="body1">Weight: {selectedPokemon?.data?.weight}</Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}
