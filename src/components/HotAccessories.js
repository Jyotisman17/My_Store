import React from 'react'
import HotItemCard from "./HotItemCard.js"
import "../styles/HotAccessories.css"


const HotAccessories = ({mobileStore,mobileStoreCover,tV,tVCover,mobileAccessories,mobileAccessoriesCover,lifeStyle,lifeStyleCover,smartHome,smartHomeCover}) => {
    return (
        <div  className="HotAccessories">

            <div>
                <img src={mobileStoreCover || tVCover || mobileAccessoriesCover || lifeStyleCover || smartHomeCover} alt="Cover" />
            </div>
            

            {/* -----------2nd */}
            <div>
            {mobileStore && mobileStore.map((item,index)=>(
                <HotItemCard key={item.image} url={item.url} name={item.name} price={item.price} image={item.image} index={index}  />
                
            ))}
            {tV && tV.map((item,index)=>(
                <HotItemCard key={item.image} url={item.url} name={item.name} price={item.price} image={item.image} index={index}  />
            
            ))}
            {mobileAccessories && mobileAccessories.map((item,index)=>(
            <HotItemCard key={item.image} url={item.url} name={item.name} price={item.price} image={item.image} index={index}  />
            
            ))}

            {lifeStyle && lifeStyle.map((item,index)=>(
            <HotItemCard key={item.image} url={item.url} name={item.name} price={item.price} image={item.image} index={index}  />
            
            ))}

            {smartHome && smartHome.map((item,index)=>(
            <HotItemCard key={item.image} url={item.url} name={item.name} price={item.price} image={item.image} index={index}  />
                
            ))}

            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" url={"https://www.mi.com/in/products"}/>

            </div>

        </div>
    )
}

export default HotAccessories
