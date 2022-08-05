import React from 'react'
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';
import { useState } from 'react';
export const MuiDialog = () => {
    const [open, setOpen] = useState(true)
  return (
    <div>
        
        <Dialog 
        open = {open}
        onClose={() => setOpen(false)}
        aria-labelledby='dialog-title' 
        aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>Message from Luminous Liquor</DialogTitle>
            <DialogContent>
                <DialogContentText id='dialog-description'>You must be of legal drinking age to access this website. Please confirm by clicking the button. </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Confirm</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
