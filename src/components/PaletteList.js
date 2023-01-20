import React, { PureComponent } from "react";
import  { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import { red, blue } from '@mui/material/colors';
import styles from '../styles/PaletteListStyles'; 
import injectSheet from 'react-jss';
import MiniPalettes from "./MiniPalettes";

class PaletteList extends PureComponent {
  constructor (props) {
    super(props);
    this.state = { openDeleteDialog: false, deletingId: "" }
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
  };

  openDialog (id) {
    console.log()
    this.setState(()=>({openDeleteDialog: true, deletingId: id }));
  };

  closeDialog () {
    this.setState({ openDeleteDialog: false, deletingId: ""})
  };

  handleDelete(){
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog(); 
  };

  goToPalette (id) {
    console.log("HI:rainbow:")
    this.props.history.push(`/palette/${id}`);
  };

  render () {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state
    return (
      <div className={classes.root}>
        <div className={classes.container}>

          <nav className={classes.nav}>
            <h1>Saturn Palettes</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>

            <TransitionGroup className={classes.palettes}>
            { palettes.map(palette => (
             <CSSTransition key={palette.id} classNames='fade' timeout={2000}  >
               <MiniPalettes 
                  key={palette.id} 
                  id={palette.id} 
                  openDialog={this.openDialog} 
                  goToPalette={this.goToPalette}
                  {...palette} 
               /> 
             </CSSTransition> 
            )) }
            </TransitionGroup>

        </div>

        <Dialog open={openDeleteDialog} onClose={this.closeDialog} aria-labelledby='delete-dialog-title'>
          <DialogTitle>Delete This Palette ?</DialogTitle>
          <List>

            <ListItemButton onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                  <Check></Check>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete"/>
            </ListItemButton>

            <ListItemButton  onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{background: red[100], color: red[600]}}>
                  <Close></Close>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel"/>
            </ListItemButton>

          </List>
        </Dialog>
      </div>
    )
  }
}

export default injectSheet(styles)(PaletteList); 