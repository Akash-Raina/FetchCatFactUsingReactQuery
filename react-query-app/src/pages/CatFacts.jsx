import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';
function CatFacts() {
  const { data : catData, error, isLoading, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>{ return Axios.get("https://catfact.ninja/fact").then((res) => res.data)}
  });

  if (isLoading) {
    return <p className='text-white w-full h-[33.3rem] border flex justify-center items-center'>Loading...</p>;
  }

  if (error) {
    return <p>Error loading cat facts</p>;
  }
  const val = <span className='text-red-400'>No Facts Avaliable</span>
  return (
    <div className='text-white w-full h-[33.3rem] border flex flex-col gap-5 justify-center items-center'>
      <h1 className='border-b border-yellow-400 text-green-500 font-bold text-2xl w-[90%] text-center'>
        {catData?.fact || val}
      </h1>
      <button className='rounded-lg bg-yellow-600 w-28 h-8 hover:bg-yellow-500' onClick={refetch}>Catfact</button>
    </div>
  );
}

export default CatFacts;
