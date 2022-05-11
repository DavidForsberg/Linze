import { userInfo } from "os";
import Users from "../users";

const tempprofile = [
  { Username: "David", Image: "", Bio: "#maneshairline #Kevindanell" },
];

const Profile = () => {
  return (
    <div className="flex items-center justify-center rounded w-11/12 text-primary border-2 py-36 px-12">
      {/* Profile wrapper*/}
      <div className="w-3/5 bg-bg rounded-tl-2xl rounded-bl-2xl justify-between">
        {/* Övredel */}
        <div>
          <img
            src="/images/twitter.png"
            alt=""
            width={60}
            height={60}
            className="rounded-2xl border-2"
          />
        </div>
        {/* Vänstra Överdel */}
        <div className="w-2/5 h-full  ">
          {/* Högra Överdel */}
          <div>Bio</div>
        </div>
      </div>
      <div className="w-2/5 p-5 bg-alternative rounded-tr-2xl rounded-br-2xl">
        {/* Nedredel */}
        <div>Username</div>
        <div>Recent post</div>
      </div>
    </div>
  );
};

export default Profile;
