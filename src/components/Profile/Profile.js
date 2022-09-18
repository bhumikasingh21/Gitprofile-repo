import React from "react";
import "./Profile.css";
import ProfileImg from "../../assets/profile.jpg";
import PaperClip from "../../assets/paperclip.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getProfileData } from "../../redux/actions/profileAction";
import pin from "../../assets/pin.png";

const Profile = () => {
  const [userName, setUserName] = React.useState("bhumikasingh21");

  const state = useSelector((state) => state);

  console.log("Profile", state);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.value) {
      setUserName(event.target.value);
    }
    if (!event.target.value) {
      setUserName("bhumikasingh21");
    }
  };

  const getData = () => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        // setData(result)
        dispatch(getProfileData(result));
      });
  };

  React.useEffect(() => {
    let timeoutId = setTimeout(() => {
      console.log("This is search value", userName);
      getData();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [userName]);

  return (
    <React.Fragment>
      <div className="profile-search">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search username....."
        />
      </div>
      {state?.profileData[0]?.message !== "Not Found" ? (
        <div className="profile-container">
          <div className="profile-avatar">
            <img src={state?.profileData[0]?.avatar_url} alt="profile" />
          </div>
          <div className="profile-summary">
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              {state?.profileData[0]?.name}
            </p>
            <p>{state?.profileData[0]?.bio}</p>
            <p>{state?.profileData[0]?.company}</p>
          </div>
          <div className="profile-attachment">
            <img src={pin} alt="pin" />
            <p>
              {state?.profileData[0]?.location !== null
                ? state?.profileData[0]?.location
                : "NO location found "}
            </p>
            {/* <p>{state?.profileData[0]?.company}</p> */}
          </div>
          <div className="profile-attachment">
            <img src={PaperClip} alt="attachment" />
            <a
              href={state?.profileData[0]?.url}
              target="blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              {state?.profileData[0]?.url}
            </a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};

export default Profile;
