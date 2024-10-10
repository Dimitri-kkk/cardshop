
import Image from 'next/image';
import Link from 'next/link';

const Categorieswrapper = () => {
  return (
    <div className="flex gap-2">
      <div className="relative">
        <Link href="/">
          <Image src="/images/Cover.jpg" alt="product image" width={630} height={430} />
          <div className="absolute top-[300px] right-10">
          <h2 className="text-3xl">PLAYING <br /> CARDS</h2>
        </div>
        </Link>
      </div>

      <div className="relative">
        <Link href="/">
          <Image src="/images/Cover1.jpg" alt="product image" width={630} height={430} />
        <div className="absolute top-[50px] right-[200px]">
          <h2 className="text-3xl text-white">MAGIC TRICKS</h2>
        </div>
        </Link>
      </div>

      <div className="relative">
        <Link href="/">
          <Image src="/images/Cover3.jpg" alt="product image" width={630} height={430} />
        <div className="absolute top-[50px] left-10">
        <h2 className="text-3xl">GIMMICS & <br /> ACCESSORIES</h2>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Categorieswrapper;
