import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

function Job() {
  const navigate = useNavigate();
  const jobId = "asdasdfdffaf";

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/JjxM7OPxAtcEU8461FihQpBjC6RjQpducdi5JUaqivg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/ODQxNjU3NC92ZWN0/b3IvaC1sZXR0ZXIt/c2hhcGUtbG9nby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OXJ4TmFlaFVwaDZN/c0kxOVBVbnpMZkxv/bkt2aEdQcEFCQUdh/YmFZczYxMD0" />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-sm font-medium">Company name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl my-2 text-blue-700">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, sunt?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          enim!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          24 LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${jobId}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button>Save for later</Button>
      </div>
    </div>
  );
}

export default Job;
