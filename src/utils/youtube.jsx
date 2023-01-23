//migrar a https://mdxjs.com/guideyarn as/embed/
const Youtube = (id) => {
  return (
    <div classname="w-50 h-full aspect-video ">
      <iframe
        width={"75%"}
        height={"100%"}
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Youtube;