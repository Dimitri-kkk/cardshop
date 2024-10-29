import Image from "next/image";

const Companies = () => {
    return (
      <div className="flex gap-20 bg-gray-200 justify-around">
        <div>
            <Image src="/images/byc.png" alt="product image" width={100} height={100}></Image> 
        </div>
        <div>
            <Image src="/images/tallyho.jpg" alt="product image" width={100} height={100}></Image> 
        </div>
        <div>
            <Image src="/images/ellusionist.jpg" alt="product image" width={100} height={100}></Image> 
        </div>
        <div>
            <Image src="/images/cheoryeleven.png" alt="product image" width={100} height={100}></Image> 
        </div>
        <div>
            <Image src="/images/bee.jpg" alt="product image" width={100} height={100}></Image> 
        </div>
        <div>
            <Image src="/images/benediky.png" alt="product image" width={100} height={100}></Image> 
        </div>
      </div>
      
    );
  };
  
  export default Companies;
  