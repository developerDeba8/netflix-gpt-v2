const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-2/5 my-2 text-sm">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black font-medium px-10 py-2 rounded-md hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="text-white font-medium px-10 py-2 ml-2 bg-gray-500 bg-opacity-60 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
