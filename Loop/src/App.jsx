import { useState } from "react";

export default function App() {
  const [data, updateData] = useState([]);

  var ApiCall = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let content = await res.json();
    console.log(content.products);
    updateData(content.products);
    // console.log(content);
  }
  return (
    <div>
      <button onClick={() => ApiCall()}>Fetch Data</button>

      {
        data.map((e) => {
          return (
            <article>
              <img src={e.images} alt={e.title} />
              <h3>{e.title}</h3>
              <p>{e.discription}</p>
              <button>Buy Now</button>
            </article>
          )
        })
      }
    </div>
  )
}