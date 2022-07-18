import React from "react";

const foodItems = [
  { id: 1, name: "carrot", img: "https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/09/2048x1364/gallery-1519672422-carrots.jpg" },
  { id: 2, name: "eggplant/aubergine", img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/279/279359/two-eggplants-on-a-wooden-table.jpg" },
  { id: 3, name: "fennel bulb", img: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/fennel.jpg" }
]

export class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foodItems: foodItems,
    }
  }
  render() {
    const foodItems = this.state.foodItems
    const searchItems = foodItems.map(f => {
      const altTag = f.name + '_img'
      return (
        <div key={f.id} onClick={() => console.log(f.name)} className="searchItem m-1 mb-2 p-1 selectable">
          <div className="foodInfo">
            <h6>{f.name}</h6>
          </div>
          <div className="foodImg">
            <img alt={altTag} src={f.img}></img>
          </div>
        </div>
      )
    })
    return (
      <div className="container-fluid" >
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="searchResults">
              <div className="p-2">
                <h4><em>Here are your search results...</em></h4>
                {searchItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}