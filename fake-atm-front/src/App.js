import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <AppContainer>
        <Header title={"FakeAtm"} />

        <PageContainer>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </PageContainer>
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
`;

const PageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
