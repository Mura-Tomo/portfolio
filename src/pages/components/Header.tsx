"use clinent";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import styles from '@/styles/Home.module.css'
import { Link as Scroll } from 'react-scroll';

const Header = () => {
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleMenuOpen = () => {
      setOpen(!isOpen);
    };
    const handleMenuClose = () => {
      setOpen(false);
    };

    return <header id="js-header">
        <div>
            <Scroll to="about" smooth={true} duration={200} offset={-70} className="font-medium hover:opacity-50 hover:cursor-pointer">About</Scroll>
        </div>
        <div>
            <Scroll to="skill" smooth={true} duration={200} offset={-70} className="font-medium hover:opacity-50 hover:cursor-pointer">Skill</Scroll>
        </div>
        <div>
            <Scroll to="project" smooth={true} duration={200} offset={-70} className="font-medium hover:opacity-50 hover:cursor-pointer">Project</Scroll>
        </div>
        <div>
            <Scroll to="contact" smooth={true} duration={200} offset={-70} className="font-medium hover:opacity-50 hover:cursor-pointer">Contact</Scroll>
        </div>
    </header>
};

export default Header;