import LoadingSpinner from '../components/LoadingSpinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className='w-screen flex justify-center items-center'>
      <div className=' w-5/12 md:w-1/12'>
        <LoadingSpinner />
      </div>
    </main>
  );
}
