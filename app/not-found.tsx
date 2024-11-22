import UiButton from '@component/atoms/button';

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-4xl font-black text-gray-900 ">Not Found</h1>

        <p className="my-4 text-base font-bold tracking-tight text-gray-200 sm:text-2xl">
          Could not find requested resource
        </p>

        <UiButton color="secondary" as="a" href="/" className="mt-8 w-max">
          Return Home
        </UiButton>
      </div>
    </div>
  );
}
