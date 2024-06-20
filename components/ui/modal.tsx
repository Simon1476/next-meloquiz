type Props = {
  onClose: () => void;
  onDelete: () => void;
};

export default function Modal({ onClose, onDelete }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-zinc-900/[.08] flex justify-center items-center  text-black">
      <div className="flex flex-col justify-center gap-4 bg-slate-200 p-4 rounded-md w-96">
        <div>정말로 삭제하시겠습니까 ?</div>

        <form className="flex justify-between text-black ">
          <button
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={onDelete}
          >
            Ok
          </button>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
