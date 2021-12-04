import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link ,Navigate} from "react-router-dom";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    console.log("URL DATA :", data);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup className="mb-5">
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
            <div className="text-primary"> <a href={repo.html_url} target="_blank">{repo.name}</a> </div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-info">{repo.description}</div>
        </ListGroupItem>
      ))}
      <br></br>
      <br></br>
      <br></br>
    </ListGroup>
  );
};

export default Repos;
