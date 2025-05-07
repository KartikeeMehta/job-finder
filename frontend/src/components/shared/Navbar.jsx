import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white fixed top-0 left-0 w-full z-10 shadow-md"
    >
      <div className="flex items-center justify-between flex-row-reverse lg:flex-row mx-auto container h-20 lg:px-0 px-4">
        <div className="lg:hidden"></div>

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            <Link to={"/"}>
              Code<span className="text-[#f83002]">Hire</span>
            </Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to={"/"}>Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to={"/jobs"}>Jobs</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <Link to={"/browse"}>Browse</Link>
            </motion.li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button variant="outline">Login</Button>
                </motion.div>
              </Link>
              <Link to="/signup">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button>Sign Up</Button>
                </motion.div>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-80"
              >
                <div>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Test MernStack</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-grey-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link">
                      {" "}
                      <Link to={"/profile"}> View Profile</Link>
                    </Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-start px-[20px] gap-4 py-4 bg-white shadow-md">
            <ul className="flex flex-col font-medium items-start gap-4">
              <li>
                <Link to={"/"} onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"#"} onClick={() => setMenuOpen(false)}>
                  Jobs
                </Link>
              </li>
              <li>
                <Link to={"#"} onClick={() => setMenuOpen(false)}>
                  Browse
                </Link>
              </li>
            </ul>

            {!user ? (
              <div className="flex flex-row items-start gap-4 lg:flex-col w-1/2 lg:w-auto">
                <Link to="/login" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup" className="w-full">
                  <Button className="w-full" onClick={() => setMenuOpen(false)}>
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Link to={"/profile"} onClick={() => setMenuOpen(false)}>
                  <Button variant="link">View Profile</Button>
                </Link>
                <Button variant="link" onClick={() => setMenuOpen(false)}>
                  Logout
                </Button>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
