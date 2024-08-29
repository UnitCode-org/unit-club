interface DescriptionProps {
  title: string;
  highlightedText: string;
  description: string;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  highlightedText,
  description,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen max-w-screen-2xl px-6">
      <div className="max-w-[600px] text-center">
        <h1 className="mb-12 text-5xl md:text-6xl font-semibold leading-tight">
          <span className="italic">{highlightedText}</span> {title}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default Description;
