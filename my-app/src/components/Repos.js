import React, { useState, useEffect } from 'react';

const GithubRepos = () => {
    const [repos, setRepos] = useState([]);

    useEffect (() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/miasoiedova/repos')
                if(response.ok) {
                    const data = await response.json();
                    setRepos(data);
                }
            } catch (error) {
                console.error('Error fetching GitHub repos:', error);
            }
        }

        fetchRepos();
    }, [])

    return (
        <div>
          <h2>GitHub Repositories</h2>
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default GithubRepos;