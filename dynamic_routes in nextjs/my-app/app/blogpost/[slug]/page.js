export default async function Page({ params }) {
    // throw new Error("there is a error")
    

    const { slug } = await params
    let lang = ["python","js","c++","c"]
    if (lang.includes(slug)) {
        return <div>My Post: {slug}</div>
    }
    else{
        return <div>Not Found</div>
    }
    // return <div>My Post: {slug}</div>
  }