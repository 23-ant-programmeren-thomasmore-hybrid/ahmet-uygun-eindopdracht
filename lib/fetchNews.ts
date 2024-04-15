import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category? : Category | string,
    keyword? : string,
    isDynamic? : boolean,
)=>{


    const res = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&languages=en${keyword==null ? "" :  `&keywords=${keyword}`}&categories=${category}`,
        {
            // cache:  isDynamic ? "no-cache" : "default" ,
            next:  isDynamic ? {revalidate:0} : {revalidate:20}
        });

    await new Promise(resolve => setTimeout(resolve,2000))

    const newsResponse = await res.json();
    return sortNewsByImage(newsResponse);
}

export default fetchNews;

