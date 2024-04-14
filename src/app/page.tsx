"use client";
import Apply from "@/components/apply_here/Apply";
import { useDispatch, useSelector } from "react-redux";
import { setCloseModal } from "./redux/slice";

export default function Home() {
  const openModal = useSelector((data: any) => data.closeModal);
  console.log(openModal);

  const dispatch = useDispatch();
  const closeButtonDispatch = () => {
    dispatch(setCloseModal(true));
  };

  return (
    <main className="flex min-h-screen items-center justify-center tablet:p-24">
      {!openModal ? (
        <button
          onClick={closeButtonDispatch}
          className="px-3 py-4 bg-[#38A001] rounded-3xl text-white"
        >
          Apply Here
        </button>
      ) : (
        <Apply />
      )}
    </main>
  );
}
