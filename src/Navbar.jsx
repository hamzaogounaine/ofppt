import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, useDisclosure } from "@nextui-org/react";
import { Moon, Sun, User } from "@phosphor-icons/react";
import { motion } from "framer-motion"
import Profile from "./Profile";

export default function App({isdark , setDark}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    function toggletheme() {
        setDark(!isdark)
    }
    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Demandes', href: 'Demandes' },
        { label: 'Activity', href: 'Activity' }

    ];

    return (
        <>
        <Navbar onMenuOpenChange={setIsMenuOpen} >
            <NavbarContent >
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>

                    <a className="font-bold text-inherit" href="/"><img src="https://mir-s3-cdn-cf.behance.net/projects/404/3711ff165624403.Y3JvcCw4MjAsNjQxLDAsMg.png" width={120} alt="" /></a>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        <a
                            className="w-full dark:text-white"
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </a>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <motion.div whileHover={{ scale: 0.92 }} whileTap={{ scale: 0.7 }} transition={{ duration: 0.1 }}>

                        <img src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="rounded-full" width={40} onClick={onOpen}  />
                    </motion.div>
                </NavbarItem>
                <NavbarItem className="" onClick={toggletheme}>

                    <motion.div whileTap={{ rotate: '360deg' }} whileHover={{ scale: 0.93 }} transition={{ duration: .1 }}>

                        {isdark ? <Sun size={40} color={'yellow'} /> : <Moon size={40} color={'black'} weight="thin" />}
                    </motion.div>

                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} >
                       
                            <a

                                className="w-full dark:text-white"
                                href={item.href}
                                size="lg"
                            >
                                {item.label}
                            </a>
                       
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>



        </Navbar>
        <Profile isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}/>
        </>

        
    );
}
