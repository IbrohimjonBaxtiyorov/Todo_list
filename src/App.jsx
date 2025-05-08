import { useEffect, useReducer } from "react";
import { deleteById, getData } from "./request";
import Main from "./components/Main";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./components/ui/button";

const initialSteate = {
  data: [],
  loading: false,
  error: null,
  buttonClicked: null,
  skip: 0,
  limit: 10,
};

function reduser(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESSFUL":
      return { ...state, loading: false, data: action.payload };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: "HATOLIK BO'LDI BROOO" };

    case "BUTTON_CLICKED":
      return { ...state, buttonClicked: action.payload };

    case "SKIP_CLICKED":
      return { ...state, skip: state.skip + state.limit };
  }
  return state;
}
export default function App() {
  const [state, dispach] = useReducer(reduser, initialSteate);
  useEffect(() => {
    dispach({ type: "FETCH_START" });
    getData(state.skip, state.limit)
      .then((data) => {
        if (state.skip === 0) {
          dispach({ type: "FETCH_SUCCESSFUL", payload: data });
        } else {
          dispach({
            type: "FETCH_SUCCESSFUL",
            payload: [...state.data, ...data],
          });
        }
      })

      .catch((err) => {
        dispach({ type: "FETCH_ERROR", payload: err.message });
      })

      .finally(() => {});
  }, [state.skip]);

  useEffect(() => {
    if (state.buttonClicked) {
      deleteById(state.buttonClicked)
        .then(() => {
          console.log(`ID ${state.buttonClicked} o'chirildi`);
          dispach({ type: "FETCH_START" });
          getData()
            .then((data) => {
              dispach({ type: "FETCH_SUCCESSFUL", payload: data });
            })
            .catch((err) => {
              dispach({ type: "FETCH_ERROR", payload: err.message });
            });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          dispach({ type: "BUTTON_CLICKED", payload: null });
        });
    }
  }, [state.buttonClicked]);

  function handleSkip() {
    dispach({ type: "SKIP_CLICKED" });
  }
  return (
    <div>
      <div className=" container mx-auto p-4">
        {state.loading && (
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <Skeleton
                  key={index}
                  className="w-full h-[195px] rounded-2xl"
                ></Skeleton>
              );
            })}
          </div>
        )}
        {state.error && <p>{state.error}</p>}
        <Main data={state} dispach={dispach} />

        <div className="flex items-center justify-center mt-5 mb-5">
          <Button onClick={() => handleSkip()}>Ko'proq malumot</Button>
        </div>
      </div>
    </div>
  );
}
