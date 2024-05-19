import Card from "./Card";
const HomeCard = () =>{
    return (
        <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card />
            <Card bg="bg-indigo-100" />
          </div>
        </div>
      </section>
    )
}
export default HomeCard;