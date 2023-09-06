import LoadingSpinner from '../components/LoadingSpinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className='w-screen flex justify-center items-center'>
      <div className=''>
        <LoadingSpinner />
      </div>
    </main>
  );
}
