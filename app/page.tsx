import {Metadata} from "next";
import fetchNews from "../lib/fetchNews";

export const metadata : Metadata={
  title:'Live News'
}
 async function Home() {

    const news : NewsResponse = await fetchNews();
    console.log(news);

  return (
    <div>
     Homepage
    </div>
  );
}
export  default Home;
