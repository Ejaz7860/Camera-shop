import Item1 from '../../Assets/c1.jpg';
import Item2 from '../../Assets/c2.jpg';
import Item3 from '../../Assets/c3.jpg';
import Item4 from '../../Assets/c4.jpg';
import Item5 from '../../Assets/c5.jpg';
import Item6 from '../../Assets/c6.jpg';


const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const productReducer = (state = initState, action) => {

    return  state;
  
};

export default productReducer;
