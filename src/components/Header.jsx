import React from "react";
import allbooks from "./allbooks";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ToolBar from "@mui/material/ToolBar";


function Header(props) {
    function bookName() {
        return "abc";
        const tmp = allbooks.filter((bk) => { 
            return bookName.id === props.name;
        });
        console.log(tmp);
        return tmp.book;
    }
    
  
    return (
        <AppBar position="static">
            <ToolBar>
                <button id="jssel"  onClick={props.jssel}>Sel</button>
                <button id="jslangs"  onClick={props.jslangs}>Langs</button>
                <button id="jscolors"  onClick={props.jscolors}>Colors</button>
                <button id="jssizbig"  onClick={props.jssiz}>SizUp</button>
                <button id="jssizsmall"  onClick={props.jssiz}>SizDn</button>
                <button id="jsnavinc" onClick={props.jsnav}>+</button>
                <button id="jsnavdec" onClick={props.jsnav}>-</button>
                <button id="jsabout"  onClick={props.jsabout}>About</button>
            </ToolBar>
        </AppBar>
    );
}

export default Header;
