import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import {ShopContext} from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  console.log(all_product.map((obj)=>obj.category))
  console.log(props.category)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner'src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> Out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
          return(
            <div>
             <Item key={i} id={item.id} category={item.category} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
           </div>
         )}})}
       </div>
       <div className="shopcategory-loadmore">
        Explore More
       </div>
    </div>
  )
}
