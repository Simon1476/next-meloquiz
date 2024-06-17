export default function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center w-full rounded-md bg-transparent dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-center w-48 h-12 px-8 py-8 text-xl font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-md animate-pulse dark:bg-blue-900 dark:text-blue-200">
        loading...
      </div>
    </div>
  );
}
