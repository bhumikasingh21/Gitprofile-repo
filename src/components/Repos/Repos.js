import React from "react";
import "./Repos.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loader/Loader";
import next from "../../assets/right-arrow.png";
import previous from "../../assets/left-arrow.png";

const Repos = () => {
  const reposArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const state = useSelector((state) => state);

  const [data, setData] = React.useState([]);

  const [page, setPage] = React.useState(0);

  // console.log("Repo", state.profileData[0].repos_url);

  const getRepoData = () => {
    fetch(`${state?.profileData[0]?.repos_url}`)
      .then((response) => response.json())
      .then((result) => {
        console.log("Repo", result);
        setData(result);
      });
  };

  React.useEffect(() => {
    getRepoData();
  }, [state?.profileData[0]?.repos_url]);

  console.log("Data", data);

  return (
    <div className="repos-container">
      {data.length > 0 ? (
        data.slice(page * 10, page * 10 + 10).map((value, index) => {
          return (
            <div className="repos-card">
              <div className="repos-name">
                <h2>{value.name}</h2>
              </div>
              <div className="repos-desc">
                <p>
                  {value.description !== null
                    ? value.description
                    : "No Description Found"}
                </p>
              </div>
              <div className="repos-skills">
                <button>
                  {value.language !== null ? value.language : "No Data Found"}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
      <div className="page-btn">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page == 0 ? true : false}
          className="btn"
        >
          <img src={previous} />
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page + 1 === Math.ceil(data.length / 10) ? true : false}
          className="btn"
        >
          <img src={next} />
        </button>
      </div>
    </div>
  );
};

export default Repos;
