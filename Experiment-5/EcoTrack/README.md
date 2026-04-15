## README: Experiment 5 – Application Testing & Debugging  

### 🌿 Project: EcoTrack v5.0  

**Aim:**  
To verify the correctness, reliability, and stability of the EcoTrack application by implementing automated testing using Jest, React Testing Library, Redux testing, snapshot testing, and mocking techniques.

---

### 🧪 Testing Techniques Implemented  

- **Unit Testing:**  
  Testing pure functions and Redux reducers independently using Jest.

- **Component Rendering Tests:**  
  Verifying UI elements render correctly using React Testing Library.

- **Snapshot Testing:**  
  Capturing UI structure using `toMatchSnapshot()` to detect unintended changes.

- **Redux Reducer Testing:**  
  Validating initial state and state transitions for async lifecycle actions.

- **Mock Store Testing:**  
  Simulating Redux state using `redux-mock-store` to test connected components.

- **Asynchronous Behavior Handling:**  
  Understanding dispatch flow using Redux Thunk middleware.

- **Debugging & Error Analysis:**  
  Identifying and resolving failing test cases systematically.

---

### 📂 Folder Structure  

```
src/
├── components/
│   └── Button.jsx          # UI component tested with rendering & snapshot
├── pages/
│   └── Logs.jsx            # Redux-connected component
├── store/
│   ├── logSlice.js         # Reducer & async thunk
│   └── store.js            # Redux store configuration
├── __tests__/
│   ├── Button.test.jsx
│   ├── Logs.test.jsx
│   └── logSlice.test.js
```

---

### 📈 Testing Results

- All unit tests passed successfully.
- Snapshot files were generated and validated.
- Redux mock store correctly simulated application state.
- Reducer state transitions were verified.
- UI behavior was automatically validated without manual checking.

---

### 🎯 Key Outcomes

- Improved application reliability through automated testing.
- Increased confidence in Redux state transitions.
- Protection against unintended UI changes via snapshot testing.
- Better debugging and systematic error analysis.
- Adoption of modern frontend testing practices.