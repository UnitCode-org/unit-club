import Image from "next/image";

interface PromotionProps {
  number: string;
  title: string;
  description: string;
}

const Promotion: React.FC<PromotionProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <section className="flex flex-col justify-center items-center w-full max-w-screen-2xl py-48">
      <div className="max-w-[800px] text-center px-6 pb-48">
        <h1 className="mb-12 text-4xl md:text-5xl font-semibold leading-tight font-albert-sans">
          <span className="italic">{number}</span>
          <br />
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h1>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
        <Image
          src="/images/gallery/2.webp"
          alt=""
          width={500}
          height={300}
          className="w-full h-auto"
        />
        <Image
          src="/images/gallery/6.webp"
          alt=""
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Promotion;
