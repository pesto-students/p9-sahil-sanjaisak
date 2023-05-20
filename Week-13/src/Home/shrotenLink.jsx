import { useEffect, useState } from "react";
import React from "react";
import amigo from "../amigo.svg";
import "./home.css";

export const Home = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState();
  const [links, setLinks] = useState();

  async function getLink() {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    setResult(await response.json());
  }

  useEffect(() => {
    const allLinks = [];
    if (result) {
      Object.entries(result.result).forEach((value, index) => {
        allLinks.push({ name: value[0], url: value[1] });
      });
      setLinks(allLinks);
    }
  }, [result]);

  return (
    <>
      <div class="title">
        <h1>Kutty Shorter Links</h1>
        <h3>We make your link shorter</h3>
      </div>

      <div className="container">
        <div>
          <img src={amigo} class="amigo" alt="amigo" />
        </div>
        <div className="Home">
          <input
            type="text"
            name="url"
            id="url"
            value={url}
            placeholder="Enter the url"
            onInput={(e) => {
              const inputText = e.target.value;
              if (inputText) setUrl(inputText);
            }}
          />
          <button onClick={() => getLink()}>Shorten It</button>
          <div id="link">
            {links?.map((link) => (
              <>
                <p>{link.name}</p>
                <a href={link.url}>{link.url}</a>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
