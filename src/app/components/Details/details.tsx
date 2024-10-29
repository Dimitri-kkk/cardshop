import Image from "next/image";

const Details = () => {
    return (
      <div className="flex gap-4 justify-around flex-wrap pt-20">
        <div className="flex-col">
            <Image src="/images/miwodeba.jpg" alt="product image" width={430} height={330}></Image> 
            <p className="pt-2">მიწოდების სერვისი</p>
        </div>
        <div className="flex-column gap-2">
            <Image src="/images/cardistry.jpg" alt="product image" width={430} height={330}></Image> 
            <p className="pt-2">უმაღლესი ხარისხი</p>
        </div>
        <div className="flex-column gap-2">
            <Image src="/images/goldencard.jpg" alt="product image" width={430} height={330}></Image> 
            <p className="pt-2">დახვეწილი დიზაინი</p>
        </div>
        <div className="flex-column gap-2">
            <Image src="/images/cardshop.jpg" alt="product image" width={430} height={330}></Image> 
            <p className="pt-2">ყველაზე საიმედო</p>
        </div>
      </div>
    );
  };
  
  export default Details;
  