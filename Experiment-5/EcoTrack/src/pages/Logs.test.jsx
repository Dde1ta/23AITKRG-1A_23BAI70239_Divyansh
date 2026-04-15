import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {thunk} from "redux-thunk";
import Logs from "./Logs";
import "@testing-library/jest-dom";

// create mock store with thunk middleware
const mockStore = configureStore([thunk]);

test("mocking fetchLog api", () => {

  // manually provide Redux state
  const store = mockStore({
    logs: {
      data: [
        { id: 1, activity: "Plane Travel", carbon: 4 },
        { id: 2, activity: "Electricity Usage", carbon: 6 },
        { id: 3, activity: "Cycling", carbon: 0 },
      ],
      status: "success",
      error: null,
    },
  });

  render(
    <Provider store={store}>
      <Logs />
    </Provider>
  );

  expect(screen.getByText(/Plane Travel/)).toBeInTheDocument();
});