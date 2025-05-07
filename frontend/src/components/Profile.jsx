import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./Profile_section/AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["Html5", "CSS3", "Javascript", "Reactjs"];
const isResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-[100px]">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://imgs.search.brave.com/JjxM7OPxAtcEU8461FihQpBjC6RjQpducdi5JUaqivg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/ODQxNjU3NC92ZWN0/b3IvaC1sZXR0ZXIt/c2hhcGUtbG9nby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OXJ4TmFlaFVwaDZN/c0kxOVBVbnpMZkxv/bkt2aEdQcEFCQUdh/YmFZczYxMD0"
                alt="Profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Add Your Bio Here Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Doloremque, molestias!
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-5 my-2">
            <Mail />
            <span>testuser@gmail.com</span>
          </div>
          <div className="flex items-center gap-5 my-2">
            <Contact />
            <span>8128903920</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1 my-2">
            {skills.length !== 0 ? (
              skills.map((item, index) => <Badge ket={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://youtube.com"
              className="text-blue-500 w-full hover:underline"
            >
              Test Link
            </a>
          ) : (
            <span>No Resume Found</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-5">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        {/* Applied Job table */}
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
