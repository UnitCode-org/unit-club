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
    <section className="flex justify-center items-center min-h-screen px-6">
      <div className="max-w-[600px] text-center">
        <h1 className="mb-12 text-5xl md:text-6xl font-semibold leading-tight">
          <span className="italic">{number}</span> {title}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </section>
  );
};

export default Promotion;
