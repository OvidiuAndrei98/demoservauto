import Image from "next/image";

const LatestWork = () => {
  return (
    <div className="w-full grid gap-[.5rem] grid-rows-diamond grid-cols-diamond items-center justify-center my-[100px] content-center h-[500px] bg-black overflow-hidden">
      <img
      className="max-w-[100%] aspect-square object-cover col-span-2 rounded-[.5rem] clip-image-diamond transition-diamond duration-500 hover:clip-diamond-hover [&:not(:hover)]:animate-[zIndexAnimation_500ms]"
        src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="guitar player at concert"
      />
      <img
      className="max-w-[100%] aspect-square object-cover col-span-2 rounded-[.5rem] clip-image-diamond transition-diamond duration-500 hover:clip-diamond-hover [&:not(:hover)]:animate-[zIndexAnimation_500ms]"
        src="https://images.unsplash.com/photo-1618783129985-dd97dbe4ad99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="duo singing"
      />
      <img
      className="max-w-[100%] aspect-square object-cover col-span-2 rounded-[.5rem] clip-image-diamond transition-diamond duration-500 hover:clip-diamond-hover [&:not(:hover)]:animate-[zIndexAnimation_500ms]"
        src="https://images.unsplash.com/photo-1579966434835-4e3b5d234466?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="crowd cheering"
      />
      <img
      className="max-w-[100%] aspect-square object-cover col-[2/_span_2] rounded-[.5rem] clip-image-diamond transition-diamond duration-500 hover:clip-diamond-hover [&:not(:hover)]:animate-[zIndexAnimation_500ms]"
        src="https://images.unsplash.com/photo-1530046614490-89e6f776b83b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="singer performing"
      />
      <img
      className="max-w-[100%] aspect-square object-cover col-span-2 rounded-[.5rem] clip-image-diamond transition-diamond duration-500 hover:clip-diamond-hover [&:not(:hover)]:animate-[zIndexAnimation_500ms]"
        src="https://plus.unsplash.com/premium_photo-1663090140645-32b7d760853e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="singer fistbumping crowd"
      />
      <img
      className="max-w-[100%] aspect-square object-cover col-span-2 rounded-[.5rem] clip-image-diamond transition-diamond duration-500 hover:clip-diamond-hover [&:not(:hover)]:animate-[zIndexAnimation_500ms]"
        src="https://images.unsplash.com/photo-1643700973089-baa86a1ab9ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="man with a guitar singing"
      />
      <img
      className="max-w-[100%] aspect-square object-cover col-span-2 rounded-[.5rem] clip-image-diamond transition-diamond duration-500 hover:clip-diamond-hover [&:not(:hover)]:animate-[zIndexAnimation_500ms]"
        src="https://images.unsplash.com/photo-1599256631012-9c2b32bfa8bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="crowd looking at a lighted stage"
      />
      <img
      className="max-w-[100%] aspect-square object-cover col-span-2 rounded-[.5rem] clip-image-diamond transition-diamond duration-500 hover:clip-diamond-hover [&:not(:hover)]:animate-[zIndexAnimation_500ms]"
        src="https://images.unsplash.com/photo-1565689876697-e467b6c54da2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="woman singing on stage"
      />
    </div>
  );
};

export default LatestWork;
