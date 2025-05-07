import React from "react";
import { Badge } from "./ui/badge";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";

function JobDescription() {
  const isApplied = false;
  return (
    <div className="container mx-auto py-[100px]">
      <Navbar />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Developer</h1>
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
        </div>
        <Button
          className={`rounded-lg ${
            isApplied
              ? `bg-gray-600 cursor-not-allowed`
              : `border border-black hover:bg-transparent hover:text-black hover:border-black hover:border`
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <div className="">
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
          Job Description
        </h1>
        <div className="my-4">
          <h1 className="font-bold my-1">
            Role:
            <span className="pl-4 font-normal text-gray-800">
              Frontend Developer
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Location:
            <span className="pl-4 font-normal text-gray-800">Goa</span>
          </h1>
          <h1 className="font-bold my-1">
            Description:
            <span className="pl-4 font-normal text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              id? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores magni ipsum inventore dicta, sapiente illo nobis enim
              cumque quae eveniet ad corporis ut omnis consequuntur doloremque
              culpa. Corrupti aliquam inventore laudantium quo officia
              accusantium nostrum blanditiis nemo, eius deleniti doloribus
              impedit sint mollitia aperiam dignissimos! Nulla vitae cumque
              distinctio eaque nobis non inventore minima! Sapiente suscipit,
              assumenda unde voluptatem sint ex asperiores minus. Qui natus
              nobis culpa quos quibusdam voluptatum odit eius illum nisi
              exercitationem expedita necessitatibus, deserunt eum modi
              dignissimos explicabo mollitia dicta laboriosam ea saepe corporis!
              Voluptas, perferendis saepe. Cum repellendus provident quam,
              molestiae nihil nobis accusamus cumque!
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience:
            <span className="pl-4 font-normal text-gray-800">2 yrs</span>
          </h1>
          <h1 className="font-bold my-1">
            Salary:
            <span className="pl-4 font-normal text-gray-800">12LPA</span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applicants:
            <span className="pl-4 font-normal text-gray-800">5</span>
          </h1>
          <h1 className="font-bold my-1">
            Posted Date:
            <span className="pl-4 font-normal text-gray-800">17-07-2024</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
