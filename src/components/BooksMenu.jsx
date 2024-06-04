import React, { useState } from "react";
import allbooks from "./allbooks";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./BooksMenu.css";

export default function BooksMenu(props) {
  //  const [open, setOpen] = React.useState(false);
  //  const handleOpen = () => setOpen(true);
  const [vol, setVol] = useState();
  const [book, setBook] = useState();
  const [chap, setChap] = useState();

  function handleClose() {}

  function handleClose(event) {
    console.log("BooksMenu closing...");
    props.closeBooksMenu();
  }

  const style = {
    //    position: "absolute",
    //    top: "40%",
    //    left: "30%",
    //    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "White",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  function handleChange(event) {
    console.log("Changed: ", event.target);
    setVol(event.target.value);
  }

  const vols = [
    ["bom", "Book of Mormon"],
    ["dc", "Doctrine and Covenants"],
    ["pgp", "Pearl of Great Price"],
    ["nt", "New Testament"],
  ];

  const [anchorEl, setAnchorEl] = useState();

  function handleClick(event) {
    setAnchorEl(event.target);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    props.vis && (
      <div>
        <Modal
          sx={style}
          className="jssel"
          open={props.vis}
          onClose={props.closeBooksMenu}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Container>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Volume</InputLabel>
              <Menu
                open={props.vis}
                variant="menu"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={vol}
                label="Volume"
                onChange={handleChange}
                anchorEl={anchorEl}
              >
                {vols.map((v, idx) => {
                  return (
                    <MenuItem onClick={handleClick} key={idx}>
                      {v[1]}
                    </MenuItem>
                  );
                })}
              </Menu>
            </FormControl>
          </Container>
        </Modal>
      </div>
    )
  );
}
