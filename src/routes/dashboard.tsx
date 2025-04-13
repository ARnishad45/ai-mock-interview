import Headings from "@/components/headings";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {Separator} from "@/components/ui/separator";

const Dashboard = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        {/* headings */}
        <Headings
          title="Dashboard"
          description="Start you AI Mock interview"
        />
        <Link to={"/generate/create"}>
          <Button size={"sm"}>
            <Plus />
          </Button>
        </Link>
      </div>

      <Separator className="my-8" />
      {/* content section */}

    </>
  );
};

export default Dashboard;
