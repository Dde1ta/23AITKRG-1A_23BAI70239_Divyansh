import {screen,render} from "@testing-library/react"
import Button from "./Button"
import "@testing-library/jest-dom";

test("testing if button rendered properly",()=>{
  render(<Button textVal="Fetch logs"/>);
  expect(screen.getByText(/Fetch logs/)).toBeInTheDocument();
})

test("testing button UI snapshot",()=>{
  const {container}=render(<Button textVal="Fetch logs"/>);
  expect(container).toMatchSnapshot();
})