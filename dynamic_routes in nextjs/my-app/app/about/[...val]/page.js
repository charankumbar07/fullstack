export default async function Page({ params }) {
    const { val } = await params
    // console.log(params)
    console.log(val)
    return <div>chack console</div>
  }