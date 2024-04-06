import {Metadata} from "next";
import fetchNews from "../lib/fetchNews";
import {categories} from "../constants";
import NewsList from "./ui/NewsList";

export const metadata : Metadata={
  title:'Live News'
}



 async function Home() {

    const news : NewsResponse = await fetchNews(categories.join(","))
     console.log(news)
  return (
    <div>
     <NewsList news={news}/>
    </div>
  );
}
export  default Home;
