import { useState } from "react";

export default function Modal({ onClose, onSubmit }) {
  const [title, setTitle] = useState("");

  function onSubmit() {
    if (title.trim() === "") {
      return alert("Title bo'sh bo'lishi mumkin emas");
    }
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Yangi Todo qo'shish</h2>
        <input
          className="border p-2 w-full mb-4"
          placeholder="Yangi Malumot Qo'shing"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onClose()}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Bekor
          </button>
          <button
            onClick={() => onSubmit({ title })}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Qo'shish
          </button>
        </div>
      </div>
    </div>
  );
}
