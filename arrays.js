const dragons = [
    {name: "draco", type: "fire", size: "large"},
    {name: "neptune", type: "ice", size: "medium"},
    {name: "zygor", type: "water", size: "small"},
    {name: "draz", type: "fire", size: "small"},
    {name: "toothless", type: "fire", size: "small"},
    {name: "hydro", type: "water", size: "large"}
 ];

 const firstDragon = dragons[0];

 console.log(firstDragon.name);

 //map returns a new array of the same length but with different values

 const alteredDragons = dragons.map(function(dragon){

 });

 //filter is going to filter an array

 const fireDragons = dragons.filter(function(dragon){
    return dragon.type === "fire"
 });

 const queryURL = "user.name.firstName="

 const thirdDragon = dragons[2]
 console.log(thirdDragon);
