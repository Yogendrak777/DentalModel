import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "./Style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 , itemsToScroll: 1}
];

export default function CarouselMain() {
  const [items, setItems] = useState(["https://news.harvard.edu/wp-content/uploads/2023/02/20230208_dental-1200x800.jpg","https://www.apollowhitedental.com/wp-content/uploads/2019/08/Types-of-Missing-Teeth.jpg", "https://www.babylondentalcare.com/wp-content/uploads/2020/10/shutterstock_1062891104.jpg", "https://sa1s3optim.patientpop.com/fit-in/500x362/assets/images/provider/photos/2111538.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbn4eQ9Hjqif6ClV-Fp0s8CjVcVbNCECxpNQ&usqp=CAU","https://thumbs.dreamstime.com/b/crowding-tooth-cartoon-character-dental-problem-concept-illustration-isolated-blue-background-107709934.jpg","https://ballantynepedo.com/wp-content/uploads/2022/01/shutterstock_775656931.jpg","https://us.123rf.com/450wm/baldezh/baldezh2203/baldezh220300029/183108737-crooked-tooth-with-dental-braces-in-gym-cute-character.jpg?ver=6","https://static.vecteezy.com/system/resources/previews/017/819/444/original/teeth-with-cute-muzzles-vector.jpg"]);


  return (
    <div className="App my-4 mx-2" >
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={10000} >
          {items.map((item) => (
            <div >
            <img src={item} alt="random" height={250} width={350} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

